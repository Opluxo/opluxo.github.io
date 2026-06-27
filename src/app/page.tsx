'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { FadeIn } from '@/components/MotionDiv';
import { PreviewIcon, ArrowRightIcon, GitHubIcon, HeartIcon, ChevronUpIcon } from '@/components/icons';
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
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar />

      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-orb" style={{ width: 600, height: 600, background: 'rgba(0,113,227,0.3)', top: -200, right: -100 }} />
          <div className="hero-orb" style={{ width: 450, height: 450, background: 'rgba(52,199,89,0.12)', bottom: -150, left: -100, animationDelay: '-7s' }} />
          <div className="hero-orb" style={{ width: 350, height: 350, background: 'rgba(191,90,242,0.15)', top: '40%', left: '30%', animationDelay: '-14s' }} />
        </div>

        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>成立于 2022 · 探索底层技术</span>
            </div>
          </motion.div>

          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}>
            We Build the <span className="highlight">Light</span><br />Behind Code.
          </motion.h1>

          <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
            透过代码，传递光亮
          </motion.p>

          <motion.p className="hero-typewriter" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
            {typedText}
          </motion.p>

          <motion.div className="hero-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
            <a href="/pages/projects" className="btn btn-primary">
              探索项目 <ArrowRightIcon size={18} />
            </a>
            <a href="/pages/join" className="btn btn-outline">加入我们</a>
          </motion.div>
        </div>

        <div className="scroll-indicator" onClick={scrollToSection}>
          <span />
        </div>
      </section>

      <section className="section section-gray preview-section">
        <div className="container">
          <SectionHeader title="探索 Opluxo" />
          <div className="grid-auto">
            {previewCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.1}>
                <a href={card.href} className="card card-hoverable">
                  <div className="card-icon icon-card-icon">
                    <PreviewIcon name={card.icon} />
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc" style={{ marginBottom: '1rem' }}>{card.desc}</p>
                  <span className="card-link-text">{card.link}</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray section-with-pattern">
        <div className="pattern-overlay" style={{ background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="section-content">
          <div className="container">
            <div className="grid-auto-sm">
              {statsData.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <div className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <SectionHeader title="技术栈" subtitle="我们使用这些技术构建项目" />
          <div className="grid-auto-xs">
            {techItems.map((tech, index) => (
              <FadeIn key={tech.name} delay={index * 0.1}>
                <div className="card text-center">
                  <h4 className="card-title">{tech.name}</h4>
                  <p className="card-desc">{tech.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <FadeIn>
          <div className="cta-content">
            <div className="container">
              <h2 className="cta-title">准备好加入我们了吗？</h2>
              <p className="cta-desc">
                无论你是初学者还是资深开发者，这里都有你的位置
              </p>
              <div className="cta-btns">
                <a href="https://github.com/OpenLight-Studio" target="_blank" className="btn cta-btn-light">
                  <GitHubIcon size={18} /> 访问 GitHub
                </a>
                <a href="https://ifdian.net/a/OpenLight" target="_blank" className="btn cta-btn-light">
                  <HeartIcon size={18} /> 爱发电赞助
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />

      <button className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop} aria-label="回到顶部">
        <ChevronUpIcon />
      </button>
    </>
  );
}
