import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import Section from './Section';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { FormStatus } from '@/types';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [formData, setFormData] = useState({ name: '', phone: '', request: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus(FormStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setFormStatus(FormStatus.SUCCESS);
      setFormData({ name: '', phone: '', request: '' });
    }, 1500);
  };

  return (
    <Section id="contact" variant="white">
      <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden border border-border flex flex-col md:flex-row">
        
        <div className="md:w-1/2 bg-brand-primary p-10 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
          {/* Dynamic background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Начните работать сейчас!</h3>
            <p className="mb-6 text-blue-100">
              Мы расширяем базу постоянных клиентов. Возьмем на приоритетное обслуживание только <span className="font-bold text-primary-foreground bg-red-500/20 px-2 rounded">5 новых компаний</span> в этом месяце.
            </p>
            <div className="bg-primary-foreground/10 p-4 rounded-lg backdrop-blur-sm mb-6">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="text-brand-accent" />
                <span className="font-bold">Фиксация цен</span>
              </div>
              <p className="text-sm opacity-80">
                Мы фиксируем стоимость материалов в счете на 3 дня. Успейте оплатить по старым ценам до подорожания.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex gap-3">
              <Phone size={20} className="flex-shrink-0 mt-1" />
              <div className="flex flex-col">
                <a href="tel:+79125882713" className="hover:text-brand-accent transition-colors font-medium">+7 (912) 588-27-13</a>
                <a href="tel:+79183524512" className="hover:text-brand-accent transition-colors font-medium">+7 (918) 352-45-12</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} /> 
              <a href="mailto:snabhab-group@mail.ru" className="hover:text-brand-accent transition-colors">snabhab-group@mail.ru</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} /> г. Краснодар, квартал Восточный
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-10 bg-card">
          <h3 className="text-2xl font-bold text-foreground mb-6">Оставьте заявку на снабжение</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Ваше имя</label>
              <Input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Телефон</label>
              <Input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">Что нужно поставить?</label>
              <Textarea 
                rows={3}
                value={formData.request}
                onChange={(e) => setFormData({...formData, request: e.target.value})}
                className="w-full"
                placeholder="Например: 10 тонн арматуры, 5 бочек масла 10w40..."
              />
            </div>

            {formStatus === FormStatus.ERROR && (
              <div className="text-destructive text-sm text-center">Произошла ошибка. Попробуйте снова.</div>
            )}

            <Button 
              type="submit"
              disabled={formStatus === FormStatus.SUBMITTING || formStatus === FormStatus.SUCCESS}
              className={`w-full py-4 h-auto rounded-lg font-bold text-primary-foreground transition-all transform hover:-translate-y-1 shadow-lg ${
                formStatus === FormStatus.SUCCESS 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-brand-primary hover:bg-blue-700'
              }`}
            >
              {formStatus === FormStatus.SUBMITTING ? 'Отправка...' : 
               formStatus === FormStatus.SUCCESS ? 'Заявка принята!' : 'Получить расчет'}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
