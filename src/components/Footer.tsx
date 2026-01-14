import SnabHubLogo from './SnabHubLogo';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <SnabHubLogo variant="light" />
          
          <div className="text-center md:text-right">
            <p className="mb-2">Ваш надежный партнер в комплексном снабжении.</p>
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} СнабХаб-Групп. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
