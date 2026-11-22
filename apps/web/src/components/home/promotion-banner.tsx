import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

export function PromotionBanner() {
  return (
    <Link to="/calcinhas" className="promotion-banner">
      <img
        src="/images/black-friday-paris.png"
        alt="Black Friday. 3 calcinhas de renda. Válido apenas para a linha Paris."
        width={2057}
        height={765}
        fetchPriority="high"
      />
      <span>Ver calcinhas da linha Paris <ArrowUpRight size={16} aria-hidden="true" /></span>
    </Link>
  );
}
