import { Truck, Hammer } from 'lucide-react';
import Section from './Section';

const supplyItems = [
  { title: "Стройматериалы:", desc: "кирпич, блоки, бетон, сухие смеси, утеплители, металлопрокат." },
  { title: "Электроинструмент:", desc: "профессиональное оборудование Bosch, Makita, Dewalt и расходники." },
  { title: "ГСМ и Масла:", desc: "моторные, гидравлические, трансмиссионные масла, смазки (бочки и канистры)." },
  { title: "Сельхоз продукция:", desc: "удобрения, корма, агрохимия, укрывные материалы." },
  { title: "Спецодежда и СИЗ:", desc: "полная экипировка для рабочих." }
];

const constructionItems = [
  "Ремонт квартир, домов и коммерческих помещений.",
  "Монтаж инженерных систем (электрика, сантехника).",
  "Кровельные и фасадные работы.",
  "Благоустройство территории."
];

const ServicesSection = () => {
  return (
    <Section id="services" variant="dark" diagonal="top">
      <div className="text-center mb-16 pt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Наши направления</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Ключевой профиль — комплексное снабжение предприятий и частных лиц</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Supply Column - Primary Focus */}
        <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-brand-primary shadow-brand-primary transform md:-translate-y-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-brand-primary rounded-lg text-primary-foreground">
              <Truck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground">Комплексное снабжение</h3>
              <span className="text-brand-primary text-sm font-bold uppercase tracking-wider">Основное направление</span>
            </div>
          </div>
          <ul className="space-y-4 text-slate-300 text-lg">
            {supplyItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>{item.title}</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Construction Column - Secondary Focus */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-slate-700 rounded-lg text-primary-foreground">
              <Hammer size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground">Строительство и Ремонт</h3>
              <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Дополнительный сервис</span>
            </div>
          </div>
          <ul className="space-y-4 text-slate-400">
            {constructionItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-slate-500 rounded-full flex-shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-slate-700/30 rounded-lg text-sm text-slate-400 border border-slate-700">
            <p>Мы используем собственные материалы, что гарантирует качество и соблюдение сроков при выполнении работ.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
