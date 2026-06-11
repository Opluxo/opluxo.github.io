'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GitHubIcon } from '@/components/icons';

const projects = [
  {
    tag: '操作系统', name: 'BrightS', license: 'GPL-3.0',
    desc: 'A unix-like system kernel. 从零构建的操作系统内核，专注于简化系统编程学习。',
    features: ['从零构建的微内核设计', 'Unix-like 架构', 'C 语言实现', 'x86_64 支持'],
    stats: ['⭐ 0 Star', '📂 1 Repository', '👥 1 Contributor'],
    icon: '💻',
    github: 'https://github.com/OpenLight-Studio/BrightS',
  },
  {
    tag: '编程语言', name: 'D-subtract', license: 'MIT',
    desc: 'A computer language for teenager. 为青少年设计的入门级编程语言，使用 Rust 开发。',
    features: ['简洁易学的语法设计', 'Rust 实现', '完善的错误提示', '配套学习资源'],
    stats: ['⭐ 0 Star', '📂 1 Repository', '👥 1 Contributor'],
    icon: '📝',
    github: 'https://github.com/OpenLight-Studio/D-subtract',
  },
  {
    tag: '数据可视化', name: 'Frequency Histogram Clac', license: 'Apache-2.0',
    desc: 'A clac to create a frequency histogram easily. 跨平台直方图生成器，使用 C++ 开发。',
    features: ['快速生成频率直方图', '跨平台支持', '轻量级高性能', 'C++ 实现'],
    stats: ['⭐ 2 Stars', '📂 1 Repository', '👥 1 Contributor'],
    icon: '📊',
    github: 'https://github.com/OpenLight-Studio/Frequency_Histogram_Clac',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="核心项目" subtitle="从操作系统到编程语言，探索我们的开源项目" />

      <section className="section section-gray">
        <div className="container">
          <div className="project-list">
            {projects.map((project, index) => (
              <FadeIn key={project.name} delay={index * 0.1}>
                <div className="project-card">
                  <div className="project-card-header">
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-meta">
                      <span className="project-tag">{project.tag}</span>
                      <h2 className="project-name">{project.name}</h2>
                      <span className="project-license">{project.license}</span>
                    </div>
                  </div>

                  <div className="project-body">
                    <p className="project-desc">{project.desc}</p>

                    <h4 className="project-feature-title">特性</h4>
                    <ul className="feature-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <div className="stat-tags">
                      {project.stats.map((stat) => (
                        <span key={stat} className="stat-tag">{stat}</span>
                      ))}
                    </div>

                    <a href={project.github} target="_blank" className="btn btn-primary btn-sm">
                      <GitHubIcon size={16} /> 查看源码
                    </a>
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
