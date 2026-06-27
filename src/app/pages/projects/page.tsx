'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GithubLogo, Star, Folder, Users } from '@phosphor-icons/react';

const projects = [
  {
    tag: '操作系统', name: 'BrightS', license: 'GPL-3.0',
    desc: 'A unix-like system kernel. 从零构建的操作系统内核，专注于简化系统编程学习。',
    features: ['从零构建的微内核设计', 'Unix-like 架构', 'C 语言实现', 'x86_64 支持'],
    stats: ['⭐ 0 Star', '📂 1 Repository', '👥 1 Contributor'],
    github: 'https://github.com/OpenLight-Studio/BrightS',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    tag: '编程语言', name: 'D-subtract', license: 'MIT',
    desc: 'A computer language for teenager. 为青少年设计的入门级编程语言，使用 Rust 开发。',
    features: ['简洁易学的语法设计', 'Rust 实现', '完善的错误提示', '配套学习资源'],
    stats: ['⭐ 0 Star', '📂 1 Repository', '👥 1 Contributor'],
    github: 'https://github.com/OpenLight-Studio/D-subtract',
    color: 'from-purple-500/20 to-pink-500/20',
    iconBg: 'bg-purple-500/10 text-purple-400',
  },
  {
    tag: '数据可视化', name: 'Frequency Histogram Clac', license: 'Apache-2.0',
    desc: 'A clac to create a frequency histogram easily. 跨平台直方图生成器，使用 C++ 开发。',
    features: ['快速生成频率直方图', '跨平台支持', '轻量级高性能', 'C++ 实现'],
    stats: ['⭐ 2 Stars', '📂 1 Repository', '👥 1 Contributor'],
    github: 'https://github.com/OpenLight-Studio/Frequency_Histogram_Clac',
    color: 'from-green-500/20 to-emerald-500/20',
    iconBg: 'bg-green-500/10 text-green-400',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="核心项目" subtitle="从操作系统到编程语言，探索我们的开源项目" />

      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-5">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <div className="rounded-2xl bg-surface border border-border/30 overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1">
                <div className={`p-7 sm:p-8 bg-gradient-to-r ${project.color} border-b border-border/30`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${project.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-2xl font-bold font-heading">{project.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-surface/80 text-text-secondary rounded-full text-xs font-medium mb-2">
                        {project.tag}
                      </span>
                      <h2 className="text-2xl font-bold text-foreground tracking-tight mb-1">{project.name}</h2>
                      <span className="text-text-muted text-sm">{project.license}</span>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <p className="text-text-secondary mb-6 leading-relaxed">{project.desc}</p>

                  <h4 className="text-sm font-semibold text-foreground mb-3">特性</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-text-secondary text-sm pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stats.map((stat) => (
                      <span key={stat} className="px-3 py-1.5 bg-surface-elevated rounded-full text-xs text-text-secondary">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] no-underline"
                  >
                    <GithubLogo size={16} weight="fill" /> 查看源码
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
