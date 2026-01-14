import { motion } from 'framer-motion';
import { CheckCircle, Truck } from 'lucide-react';
import Section from './Section';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const benefits = [
  "Широчайший ассортимент: стройка, ГСМ, агро, инструмент",
  "Собственная логистика и автопарк спецтехники",
  "Прямые дилерские контракты с производителями",
  "Строительные услуги как надежное дополнение"
];

const SolutionSection = () => {
  return (
    <Section variant="dark" diagonal="both" className="relative">
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
        <Truck size={400} />
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary-foreground">
            СнабХаб-Групп — ваш внешний <span className="text-brand-primary">отдел снабжения</span>
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            Мы берем на себя всю рутину по поиску и доставке. Вы отправляете заявку — мы привозим всё: от самореза до бочки масла. 
            Единый договор, единый счет, единая ответственность.
          </p>
          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" 
            alt="Logistics and Supply" 
            className="rounded-lg shadow-2xl border-4 border-primary-foreground/10"
          />
          <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-lg shadow-xl max-w-xs">
            <p className="font-bold text-lg mb-1">Оптимизация до 20%</p>
            <p className="text-sm text-muted-foreground">Сокращаем расходы на закупки за счет оптовых цен и грамотной логистики.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default SolutionSection;
