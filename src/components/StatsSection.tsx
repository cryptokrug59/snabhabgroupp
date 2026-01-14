import { motion } from 'framer-motion';
import Section from './Section';

const stats = [
  { num: "10k+", label: "Товарных позиций" },
  { num: "1200", label: "Тонн отгружено" },
  { num: "50+", label: "Партнеров-заводов" },
  { num: "24/7", label: "Прием заявок" }
];

const StatsSection = () => {
  return (
    <Section variant="white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-2">{stat.num}</div>
            <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default StatsSection;
