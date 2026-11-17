import { useState } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { brandLogo, whatsappUrl } from '@/data/categories';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a href="#inicio" className="brand-logo" aria-label="Solo Intimo — início"><img src={brandLogo} alt="Solo Intimo — Realizando Você!!!" /></a>
    <nav aria-label="Navegação principal" className={open ? 'main-nav is-open' : 'main-nav'}>
      <a href="#categorias" onClick={() => setOpen(false)}>Categorias</a>
      <a href="#sobre" onClick={() => setOpen(false)}>Sobre a loja</a>
      <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
    </nav>
    <a className="header-contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Vamos conversar <ArrowUpRight size={16} /></a>
    <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}
