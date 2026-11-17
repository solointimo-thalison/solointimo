import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { categories, whatsappUrl } from '@/data/categories';

export function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-heading"><span className="eyebrow">SOLO INTIMO · PARA TODA A FAMÍLIA</span><h1 id="hero-title">O conforto de ser <em>você.</em></h1><p>Moda íntima, aconchego e delicadeza.<br />Descubra um universo de cuidado para o seu dia a dia.</p>
      <div className="hero-actions"><a className="button button-wine" href="#categorias">Conheça as categorias <ArrowDown size={17} /></a><a className="text-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Fale pelo WhatsApp <ArrowUpRight size={17} /></a></div>
    </div>
    <div className="hero-stage"><div className="stage-rail"><span>ESSENCIAL É SE SENTIR BEM</span><span>01 — SOLO INTIMO</span></div><div className="hero-photo"><img src={categories[0].image} alt={categories[0].alt} fetchPriority="high" /><div className="photo-note">Delicadeza em cada detalhe.</div></div><div className="hero-photo secondary"><img src={categories[3].image} alt={categories[3].alt} fetchPriority="high" /><div className="photo-note">Seu momento de conforto.</div></div><div className="stage-bottom"><span>MODA ÍNTIMA & BEM-ESTAR</span><a href="#categorias">Explore a vitrine <ArrowDown size={14} /></a></div></div>
  </section>;
}
