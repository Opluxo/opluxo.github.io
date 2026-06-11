'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';

const aboutCards = [
  { icon: '🎯', title: '我们的使命', desc: '探索底层技术，简化编程学习，让每个人都能感受创造的乐趣。' },
  { icon: '🔬', title: '技术创新', desc: '从零构建操作系统内核，开发专用编程语言，创造独特的数据可视化工具。' },
  { icon: '🌍', title: '开源精神', desc: '所有项目开源分享，期待与全球开发者共同成长。' },
  { icon: '🤝', title: '社区协作', desc: '无论水平高低，欢迎每一位热爱技术的伙伴加入。' },
];

const values = [
  { icon: '💡', title: '创新', desc: '敢于尝试新技术，突破传统边界' },
  { icon: '🎨', title: '美学', desc: '追求代码与视觉的优雅统一' },
  { icon: '🔄', title: '迭代', desc: '小步快跑，持续改进' },
  { icon: '📚', title: '学习', desc: '保持好奇心，探索未知领域' },
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

      <section className="section section-dark">
        <div className="container">
          <div className="grid-auto grid-mb">
            {aboutCards.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.1}>
                <div className="card">
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center grid-mb-md">
            <h2 className="section-title">核心价值观</h2>
            <div className="section-line" />
          </div>

          <div className="grid-auto grid-mb">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="card text-center">
                  <div className="role-icon">{value.icon}</div>
                  <h4 className="card-title">{value.title}</h4>
                  <p className="card-desc">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center grid-mb-md">
            <h2 className="section-title">发展历程</h2>
            <div className="section-line" />
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <FadeIn key={item.date} delay={index * 0.1} x={-30}>
                <div className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
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
