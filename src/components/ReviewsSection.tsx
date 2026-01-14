import { motion } from 'framer-motion';
import Section from './Section';

const reviews = [
  { 
    name: "Дмитрий Волков", 
    role: "Главный инженер АгроХолдинг", 
    text: "Раньше закупали ГСМ в одном месте, запчасти в другом. СнабХаб закрыл все позиции разом. Удобно и выгодно." 
  },
  { 
    name: "Сергей Ковалев", 
    role: "Прораб СтройГрупп", 
    text: "Заказываем здесь всё: от сухих смесей до профессионального инструмента. Доставка всегда вовремя, простоев нет." 
  }
];

const ReviewsSection = () => {
  return (
    <Section id="reviews" variant="white">
      <h2 className="text-3xl font-bold text-center mb-12">Нам доверяют снабжение</h2>
      <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
        {/* Placeholder Logos */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="text-2xl font-bold text-muted-foreground flex items-center gap-2">
            <div className="w-8 h-8 bg-muted rounded-full"></div> КЛИЕНТ {i}
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            className="bg-muted p-8 rounded-2xl relative"
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-accent text-6xl absolute top-4 right-6 opacity-20">"</div>
            <p className="text-muted-foreground text-lg italic mb-6 relative z-10">{review.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted-foreground/20 rounded-full overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&seed=${i}`} 
                  alt={review.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="font-bold text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ReviewsSection;
