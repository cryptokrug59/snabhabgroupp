import { AlertTriangle } from 'lucide-react';

const WarningSection = () => {
  return (
    <section className="bg-muted py-16 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
          <AlertTriangle className="text-destructive" />
        </div>
        <h4 className="text-xl font-bold text-foreground mb-2">Почему стоит отправить заявку сейчас?</h4>
        <p className="text-muted-foreground">
          Рынок нестабилен. Цены на металл, ГСМ и стройматериалы меняются еженедельно. 
          Отправьте список потребностей сейчас, чтобы мы забронировали товар на складе и зафиксировали стоимость.
        </p>
      </div>
    </section>
  );
};

export default WarningSection;
