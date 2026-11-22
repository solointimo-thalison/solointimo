import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { whatsappUrl } from '@/data/categories';
import type { ParisProduct } from '@/data/paris';

function ProductCard({ product }: { product: ParisProduct }) {
  const [photo, setPhoto] = useState(0);
  const image = (index: number) => `/images/paris/${product.ref}-${index + 1}.webp`;
  const message = `Olá, Solo Intimo! Gostaria de consultar a disponibilidade da peça ref. ${product.ref}, cor ${product.photos[photo].split(' — ')[0]}.`;

  return (
    <article className="paris-product" aria-labelledby={`produto-${product.ref}`}>
      <div>
        <figure>
          <img className="paris-photo" src={image(photo)} alt={`Ref. ${product.ref}: ${product.photos[photo]}`} width={1000} height={1500} loading="lazy" />
          <figcaption aria-live="polite">{product.photos[photo]}</figcaption>
        </figure>
        <div className="paris-thumbnails" role="group" aria-label={`Fotos da referência ${product.ref}`}>
          {product.photos.map((label, index) => (
            <button type="button" key={label} aria-label={label} aria-pressed={index === photo} onClick={() => setPhoto(index)}>
              <img src={image(index)} alt="" width={1000} height={1500} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      <div className="paris-details">
        <p className="eyebrow">REF. {product.ref}</p>
        <h2 id={`produto-${product.ref}`}>{product.title}</h2>
        <p>{product.description}</p>
        <h3>Diferenciais</h3>
        <ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <h3>Composição</h3>
        {product.composition.map((material) => <p key={material}>{material}</p>)}
        <a className="button button-wine" href={`${whatsappUrl}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
          Consultar disponibilidade <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function ParisCatalog({ title, products }: { title: string; products: ParisProduct[] }) {
  return (
    <>
      <SiteHeader />
      <main className="paris-catalog">
        <Link className="text-link" to="/#categorias">← Voltar às categorias</Link>
        <p className="eyebrow paris-label">LINHA PARIS</p>
        <h1>{title}</h1>
        {products.map((product) => <ProductCard key={product.ref} product={product} />)}
      </main>
      <SiteFooter />
    </>
  );
}
