import { ParisCatalog } from '@/components/paris-catalog';
import { calcinhas } from '@/data/paris';

export function meta() {
  return [
    { title: 'Calcinhas da Linha Paris | Solo Intimo' },
    { name: 'description', content: 'Conheça os modelos de calcinhas em renda da Linha Paris na Solo Intimo.' },
  ];
}

export default function CalcinhasPage() {
  return <ParisCatalog title="Calcinhas" products={calcinhas} />;
}
