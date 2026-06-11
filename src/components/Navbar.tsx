'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import { GitHubIcon } from './icons';

export function Navbar() {
  const pathname = usePathname() ?? '';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : 'nav-default'}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <div className="nav-logo-icon">OL</div>
            <span className="nav-logo-text">Opluxo</span>
          </a>

          <div className="nav-links-desktop">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/pages/about' && pathname.startsWith(link.href));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="https://github.com/OpenLight-Studio"
              target="_blank"
              className="nav-gh-btn"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`hamburger-btn ${mobileOpen ? 'hamburger-open' : ''}`}
            aria-label="菜单"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)} />
      )}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="mobile-menu-link" onClick={() => setMobileOpen(false)}>
            {link.name}
          </a>
        ))}
        <a href="https://github.com/OpenLight-Studio" target="_blank" className="mobile-menu-link" onClick={() => setMobileOpen(false)}>
          GitHub
        </a>
      </div>
    </>
  );
}
