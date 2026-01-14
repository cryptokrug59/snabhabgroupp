import { motion } from 'framer-motion';
import { CheckCircle, Package } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { Button } from './ui/button';

const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-brand-dark text-primary-foreground diagonal-clip-bottom">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-brand-cyan/20 text-brand-cyan px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-6 border border-brand-cyan/50">
              СНАБЖЕНИЕ БИЗНЕСА И СТРОЙКИ
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Бесперебойные поставки<br />
              <span className="text-gradient-hero">
                для вашего дела.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              От моторных масел и стройматериалов до электроинструмента и сельхозпродукции. 
              Всё, что нужно для работы, в одном месте. Плюс профессиональные строительные услуги.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => handleScroll('contact')}
                className="bg-brand-accent text-brand-dark px-8 py-4 h-auto rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-brand transform hover:scale-105"
              >
                Рассчитать заявку
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleScroll('services')}
                className="px-8 py-4 h-auto rounded-lg font-bold text-lg border-slate-600 text-primary-foreground hover:bg-primary-foreground/10 transition-all bg-transparent"
              >
                Каталог продукции
              </Button>
            </div>
          </motion.div>
          
          {/* Abstract visual representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-cyan rounded-3xl transform rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Stylish grid overlay */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-10">
                  {[...Array(36)].map((_, i) => <div key={i} className="bg-primary-foreground/20"></div>)}
                </div>
                <div className="text-center p-8 z-10">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">100%</div>
                  <div className="text-slate-400 uppercase tracking-widest text-sm">Комплектация объектов</div>
                  <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-10 -right-10 bg-card text-card-foreground p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Заявка #4829</div>
                  <div className="font-bold">Отгружено в срок</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-5 -left-5 bg-brand-primary text-primary-foreground p-4 rounded-xl shadow-xl z-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <Package size={20} />
                  <span className="font-bold">5000+ позиций</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
