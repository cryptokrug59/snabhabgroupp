import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SnabHubLogo from './SnabHubLogo';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <SnabHubLogo variant="dark" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScroll('services')} 
              className="text-muted-foreground hover:text-brand-primary transition-colors font-semibold"
            >
              Каталог услуг
            </button>
            <button 
              onClick={() => handleScroll('benefits')} 
              className="text-muted-foreground hover:text-brand-primary transition-colors font-semibold"
            >
              Почему мы
            </button>
            <button 
              onClick={() => handleScroll('reviews')} 
              className="text-muted-foreground hover:text-brand-primary transition-colors font-semibold"
            >
              Отзывы
            </button>
            <Button 
              onClick={() => handleScroll('contact')}
              className="bg-brand-primary text-primary-foreground px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Заказать снабжение
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-foreground p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
              <button 
                onClick={() => handleScroll('services')} 
                className="block py-2 text-lg text-muted-foreground"
              >
                Каталог услуг
              </button>
              <button 
                onClick={() => handleScroll('benefits')} 
                className="block py-2 text-lg text-muted-foreground"
              >
                Почему мы
              </button>
              <Button 
                onClick={() => handleScroll('contact')} 
                className="w-full bg-brand-primary text-primary-foreground py-3 rounded-lg text-center font-bold"
              >
                Заказать снабжение
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
