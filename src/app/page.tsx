'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn } from '@/components/MotionDiv';
import { ArrowRight, GithubLogo, HeartStraight, CaretUp } from '@phosphor-icons/react';
import { previewCards, statsData, techItems, typewriterTexts } from '@/data/site';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const typeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        setScrollProgress(scrollPercent);
        setShowScrollTop(window.scrollY > 600);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    let textIndex = 0, charIndex = 0, isDeleting = false;
    const type = () => {
      const currentText = typewriterTexts[textIndex];
      let typeSpeed = 100;
      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        charIndex--;
        typeSpeed = 50;
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        charIndex++;
        typeSpeed = 120;
      }
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true; typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        typeSpeed = 500;
      }
      typeTimerRef.current = setTimeout(type, typeSpeed);
    };
    typeTimerRef.current = setTimeout(type, 1000);
    return () => {
      if (typeTimerRef.current) clearTimeout(typeTimerRef.current);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = () => document.querySelector('.preview-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-accent via-emerald-400 to-cyan-400 z-[10001] transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute rounded-full blur-[80px] opacity-30"
            style={{
              width: 600,
              height: 600,
              background: 'rgba(34, 197, 94, 0.25)',
              top: -200,
              right: -100,
              animation: 'float 20s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full blur-[80px] opacity-15"
            style={{
              width: 450,
              height: 450,
              background: 'rgba(59, 130, 246, 0.2)',
              bottom: -150,
              left: -100,
              animation: 'float 20s ease-in-out infinite',
              animationDelay: '-7s',
            }}
          />
          <div
            className="absolute rounded-full blur-[80px] opacity-20"
            style={{
              width: 350,
              height: 350,
              background: 'rgba(139, 92, 246, 0.2)',
              top: '40%',
              left: '30%',
              animation: 'float 20s ease-in-out infinite',
              animationDelay: '-14s',
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/30 bg-surface/50 text-text-secondary text-sm backdrop-blur-sm mb-10">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]" />
              <span>成立于 2022 · 探索底层技术</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.05] tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We Build the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-cyan-400">
              Light
            </span>
            <br />
            Behind Code.
          </motion.h1>

          <motion.p
            className="text-text-secondary text-lg sm:text-xl mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            透过代码，传递光亮
          </motion.p>

          <motion.p
            className="text-text-muted text-sm font-mono mb-12 min-h-[1.6]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {typedText}
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/pages/projects"
              className="px-7 py-3 rounded-full bg-accent text-background font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] no-underline"
            >
              探索项目 <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="/pages/join"
              className="px-7 py-3 rounded-full border border-border/40 text-foreground font-medium text-sm transition-all duration-200 hover:bg-surface-elevated hover:border-border/60 hover:scale-[1.02] active:scale-[0.98] no-underline"
            >
              加入我们
            </a>
          </motion.div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer opacity-30 hover:opacity-50 transition-opacity duration-300"
          onClick={scrollToSection}
        >
          <div className="w-5 h-8 border-2 border-foreground/30 rounded-full relative">
            <div
              className="w-0.5 h-2 bg-foreground/50 rounded-full absolute top-2 left-1/2 -translate-x-1/2"
              style={{ animation: 'scroll-bounce 2.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/50 preview-section">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="探索 Opluxo" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {previewCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.1}>
                <a
                  href={card.href}
                  className="block p-7 rounded-2xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:border-accent/20 no-underline text-foreground"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{card.desc}</p>
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-1 transition-all duration-200 group-hover:gap-2">
                    {card.link}
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {statsData.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold font-heading mb-1 text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader title="技术栈" subtitle="我们使用这些技术构建项目" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techItems.map((tech, index) => (
              <FadeIn key={tech.name} delay={index * 0.1}>
                <div className="text-center p-5 rounded-2xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-sm font-semibold text-foreground mb-1">{tech.name}</h4>
                  <p className="text-text-muted text-xs">{tech.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-accent/20 via-background to-cyan-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        <FadeIn>
          <div className="text-center relative z-10 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              准备好加入我们了吗？
            </h2>
            <p className="text-text-secondary text-lg max-w-md mx-auto mb-10">
              无论你是初学者还是资深开发者，这里都有你的位置
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://github.com/OpenLight-Studio"
                target="_blank"
                className="px-7 py-3.5 rounded-full bg-foreground text-background font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-foreground/20 hover:scale-[1.02] active:scale-[0.98] no-underline"
              >
                <GithubLogo size={18} weight="fill" /> 访问 GitHub
              </a>
              <a
                href="https://ifdian.net/a/OpenLight"
                target="_blank"
                className="px-7 py-3.5 rounded-full border border-border/40 text-foreground font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 hover:bg-surface-elevated hover:border-border/60 hover:scale-[1.02] active:scale-[0.98] no-underline"
              >
                <HeartStraight size={18} /> 爱发电赞助
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />

      <button
        className={`fixed bottom-8 right-8 w-11 h-11 rounded-full glass border border-border/30 flex items-center justify-center cursor-pointer z-[9999] transition-all duration-300 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        } hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20`}
        onClick={scrollToTop}
        aria-label="回到顶部"
      >
        <CaretUp size={20} weight="bold" />
      </button>
    </>
  );
}
