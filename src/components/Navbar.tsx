'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import { GithubLogo } from '@phosphor-icons/react';

export function Navbar() {
  const pathname = usePathname() ?? '';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
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
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 no-underline">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-emerald-400 flex items-center justify-center">
              <span className="text-background text-xs font-bold tracking-wide">OL</span>
            </div>
            <span className="font-heading text-base font-semibold text-foreground tracking-tight">
              Opluxo
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/pages/about' && pathname.startsWith(link.href));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-200 no-underline ${
                    isActive ? 'text-foreground' : 'text-text-secondary hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-accent" />
                  )}
                </a>
              );
            })}
            <a
              href="https://github.com/OpenLight-Studio"
              target="_blank"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated text-foreground text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-background no-underline"
              aria-label="GitHub"
            >
              <GithubLogo size={16} weight="fill" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer"
            aria-label="菜单"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed top-12 left-0 w-full z-40 glass-strong shadow-lg transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 text-foreground font-medium border-b border-border/30 transition-colors duration-200 hover:text-accent no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/OpenLight-Studio"
            target="_blank"
            className="py-3 text-foreground font-medium flex items-center gap-2 transition-colors duration-200 hover:text-accent no-underline"
            onClick={() => setMobileOpen(false)}
          >
            <GithubLogo size={16} weight="fill" />
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
