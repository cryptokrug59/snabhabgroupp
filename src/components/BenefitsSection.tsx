import { motion } from 'framer-motion';
import Section from './Section';

const benefits = [
  { title: "Всё в одном месте", desc: "Не нужно искать 10 разных поставщиков. Мы привезем стройматериалы, масла и сельхозпродукцию одной машиной." },
  { title: "Оперативная логистика", desc: "Собственный транспорт позволяет нам не зависеть от транспортных компаний и доставлять точно в срок." },
  { title: "Оптовые цены", desc: "Благодаря большим объемам закупок мы предлагаем цены ниже розничных магазинов." },
  { title: "Любые объемы", desc: "Работаем как с крупными строительными объектами, так и с частными заказчиками." },
  { title: "Гарантия качества", desc: "Весь товар сертифицирован. Предоставляем полный пакет документов и паспорта качества." },
  { title: "Услуги монтажа", desc: "Если нужно не только привезти, но и построить — наши бригады готовы приступить к работе." }
];

const BenefitsSection = () => {
  return (
    <Section id="benefits" variant="gray" className="diagonal-clip">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают СнабХаб?</h2>
        <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-card p-8 rounded-xl shadow-sm border border-border hover:border-brand-primary/50 transition-all"
          >
            <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 text-brand-primary font-bold">
              {i + 1}
            </div>
            <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
