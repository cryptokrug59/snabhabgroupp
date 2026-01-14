import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TelegramRequest {
  name: string;
  phone: string;
  request: string;
}

const TELEGRAM_CHAT_ID = "1709669483";

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, request }: TelegramRequest = await req.json();

    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    if (!botToken) {
      throw new Error("TELEGRAM_BOT_TOKEN not configured");
    }

    const message = `📋 *Новая заявка на снабжение*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📦 *Запрос:* ${request || "Не указано"}

📅 _${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}_`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramResult);
      throw new Error(telegramResult.description || "Failed to send message");
    }

    console.log("Message sent successfully:", telegramResult);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-telegram function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
