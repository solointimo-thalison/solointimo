import { ParisCatalog } from '@/components/paris-catalog';
import { soutiens } from '@/data/paris';

export function meta() {
  return [
    { title: 'Soutiens da Linha Paris | Solo Intimo' },
    { name: 'description', content: 'Conheça os modelos de soutiens em renda da Linha Paris na Solo Intimo.' },
  ];
}

export default function SoutiensPage() {
  return <ParisCatalog title="Soutiens" products={soutiens} />;
}
