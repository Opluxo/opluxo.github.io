'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { Target, Flask, Globe, Handshake, Lightbulb, Palette, ArrowClockwise, Books } from '@phosphor-icons/react';

const aboutCards = [
  { icon: Target, title: '我们的使命', desc: '探索底层技术，简化编程学习，让每个人都能感受创造的乐趣。' },
  { icon: Flask, title: '技术创新', desc: '从零构建操作系统内核，开发专用编程语言，创造独特的数据可视化工具。' },
  { icon: Globe, title: '开源精神', desc: '所有项目开源分享，期待与全球开发者共同成长。' },
  { icon: Handshake, title: '社区协作', desc: '无论水平高低，欢迎每一位热爱技术的伙伴加入。' },
];

const values = [
  { icon: Lightbulb, title: '创新', desc: '敢于尝试新技术，突破传统边界' },
  { icon: Palette, title: '美学', desc: '追求代码与视觉的优雅统一' },
  { icon: ArrowClockwise, title: '迭代', desc: '小步快跑，持续改进' },
  { icon: Books, title: '学习', desc: '保持好奇心，探索未知领域' },
];

const timeline = [
  { date: '2022.12', title: 'Opluxo LLC 成立', desc: '组织在 GitHub 上创建，开始探索底层技术' },
  { date: 'BrightS', title: 'BrightS 内核项目启动', desc: '基于 UNIX V6 设计理念的 x86_64 UEFI 内核' },
  { date: 'D--', title: 'D Substract (D--) 编程语言', desc: '专为青少年设计的编程语言' },
  { date: 'FH Clac', title: 'Frequency Histogram Clac 发布', desc: '跨平台直方图生成器' },
  { date: '官网', title: '官方网站上线', desc: 'Opluxo LLC 官方网站部署至 GitHub Pages' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="关于 Opluxo" subtitle="成立于 2022，探索底层技术的开源工作室" />

      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.1}>
                <div className="p-7 rounded-2xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <card.icon size={24} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-16 mb-12">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">核心价值观</h2>
            <div className="w-8 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="text-center p-7 rounded-2xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
                    <value.icon size={24} weight="duotone" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-16 mb-12">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">发展历程</h2>
            <div className="w-8 h-0.5 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-emerald-400 to-cyan-400 opacity-30" />
            {timeline.map((item, index) => (
              <FadeIn key={item.date} delay={index * 0.1} x={-20}>
                <div className="relative pl-12 pb-7">
                  <div className="absolute left-2 top-1.5 w-3 h-3 bg-accent rounded-full border-[3px] border-background shadow-[0_0_0_2px_rgba(34,197,94,0.15)] transition-transform duration-300 hover:scale-125" />
                  <div className="p-5 rounded-xl bg-surface border border-border/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:border-border/50">
                    <span className="inline-block px-3 py-1 bg-surface-elevated text-text-secondary rounded-full text-xs font-medium mb-2">
                      {item.date}
                    </span>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
