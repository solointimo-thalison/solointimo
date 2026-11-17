import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/home/hero';
import { Showcase } from '@/components/home/showcase';
import { About } from '@/components/home/about';
import { Contact } from '@/components/home/contact';
import { SiteFooter } from '@/components/site-footer';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo({ matches, location }, {
    title: 'Solo Intimo — Conforto que veste você',
    description: 'Conheça a vitrine Solo Intimo: soutiens, calcinhas, cuecas, pijamas, pantufas, acessórios, moda praia e infantil. Fale conosco pelo WhatsApp.',
  });
}

export default function HomePage() {
  return <><SiteHeader /><main><Hero /><Showcase /><About /><Contact /></main><SiteFooter /></>;
}
