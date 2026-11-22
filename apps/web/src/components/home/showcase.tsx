import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { categories, whatsappUrl } from '@/data/categories';

const categoryPages: Record<string, string> = {
  Calcinhas: '/calcinhas',
  Soutiens: '/soutiens',
};

export function Showcase() {
  return (
    <section id="categorias" className="showcase" aria-labelledby="categories-title">
      <div className="section-heading">
        <div><span className="eyebrow">UM UNIVERSO DE POSSIBILIDADES</span><h2 id="categories-title">Encontre o seu <em>essencial.</em></h2></div>
        <p>Do primeiro detalhe ao último toque de aconchego.<br />Conheça nossas categorias e converse com a gente.</p>
      </div>
      <div className="category-grid">
        {categories.map((category, index) => {
          const page = categoryPages[category.name];
          const image = (
            <>
              <img src={category.image} alt={category.alt} loading="lazy" />
              <span className="image-action">Conhecer a categoria <ArrowUpRight size={16} aria-hidden="true" /></span>
            </>
          );
          return (
            <section className="category" key={category.name} aria-labelledby={`category-${index}`}>
              {page ? (
                <Link to={page} className="category-image" aria-label={`Conhecer ${category.name}`}>{image}</Link>
              ) : (
                <a href={`${whatsappUrl}?text=${encodeURIComponent(`Olá, Solo Intimo! Gostaria de conhecer a categoria ${category.name}.`)}`} target="_blank" rel="noopener noreferrer" className="category-image" aria-label={`Conhecer ${category.name} pelo WhatsApp`}>{image}</a>
              )}
              <div className="category-title"><div><span className="eyebrow category-brand">{category.brand}</span><h3 id={`category-${index}`}>{category.name}</h3></div><span>0{index + 1}</span></div>
              <p>{category.text}</p>
            </section>
          );
        })}
      </div>
      <p className="editorial-note">Imagens editoriais ilustrativas. Consulte as opções disponíveis pelo WhatsApp.</p>
    </section>
  );
}
