import LogoIcon from './LogoIcon';
import { cn } from '@/lib/utils';

interface SnabHubLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const SnabHubLogo = ({ className = "", variant = "dark" }: SnabHubLogoProps) => (
  <div className={cn("flex items-center gap-3 group cursor-pointer", className)}>
    <LogoIcon />
    <div className="flex flex-col justify-center">
      <span className={cn(
        "font-[800] text-3xl tracking-tighter leading-none transition-colors duration-300",
        variant === 'dark' 
          ? 'text-foreground group-hover:text-brand-primary' 
          : 'text-primary-foreground group-hover:text-brand-accent'
      )}>
        СнабХаб-Групп
      </span>
      <span className={cn(
        "text-[11px] font-bold uppercase tracking-widest leading-none mt-1 transition-colors duration-300",
        variant === 'dark' 
          ? 'text-muted-foreground group-hover:text-brand-accent' 
          : 'text-slate-400 group-hover:text-primary-foreground'
      )}>
        Комплексное снабжение
      </span>
    </div>
  </div>
);

export default SnabHubLogo;
