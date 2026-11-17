import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '@/data/categories';

export function About() {
  return <section id="sobre" className="about" aria-labelledby="about-title"><div className="about-label"><span className="eyebrow">SOBRE A SOLO INTIMO</span><img className="about-mark" src="https://horizons-cdn.hostinger.com/be4ff0db-d4e2-41df-9407-2dbd2d4a9905/04029ab3bf4def98192b30b6f3945355.jpg" alt="" /><span className="eyebrow">PERTO DE VOCÊ, NO SEU DIA A DIA</span></div><div className="about-copy"><h2 id="about-title">Mais que vestir.<br /><em>Sentir-se bem.</em></h2><p>A Solo Intimo é um convite ao conforto. Um espaço para conhecer a moda íntima e encontrar inspiração para cuidar de você e de toda a família.</p><p>Da delicadeza da lingerie ao aconchego dos pijamas, nossa vitrine reúne categorias para diferentes momentos da vida. Explore, descubra e fale com a gente para conhecer as opções disponíveis.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">Conheça a loja pelo WhatsApp <ArrowUpRight size={18} /></a></div></section>;
}
