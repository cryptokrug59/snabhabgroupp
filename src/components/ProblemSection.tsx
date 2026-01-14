import { motion } from 'framer-motion';
import { Clock, AlertTriangle, TrendingUp } from 'lucide-react';
import Section from './Section';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const problems = [
  { 
    icon: <Clock size={40} />, 
    title: "Задержки поставок", 
    desc: "Материалы не приезжают вовремя, рабочие и техника простаивают, графики горят." 
  },
  { 
    icon: <AlertTriangle size={40} />, 
    title: "Брак и некондиция", 
    desc: "Привезли не то, что заказывали. Возврат занимает недели, а работать нужно сейчас." 
  },
  { 
    icon: <TrendingUp size={40} />, 
    title: "Завышенные цены", 
    desc: "Закупка у десятка разных мелких поставщиков увеличивает бюджет на логистику и наценки." 
  }
];

const ProblemSection = () => {
  return (
    <Section variant="white" className="pt-20">
      <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Проблемы со <span className="text-destructive">снабжением</span> тормозят работу?
        </h2>
        <p className="text-lg text-muted-foreground">
          Бесконечный поиск нужных позиций, срыв сроков доставки, переплаты посредникам и простой техники из-за отсутствия ГСМ. 
          Ваш бизнес теряет деньги, пока вы ждете поставку.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-muted p-8 rounded-2xl border border-border hover:shadow-xl transition-shadow group"
          >
            <div className="w-16 h-16 bg-red-100 text-destructive rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProblemSection;
