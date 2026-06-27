'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GithubLogo, HeartStraight, Gear, Pen, ChartLine, BookOpen } from '@phosphor-icons/react';

const roles = [
  {
    icon: Gear, title: '系统开发者',
    desc: '参与 BrightS 内核开发，需要了解操作系统原理和 C/C++ 编程。',
    skills: ['C / C++', '操作系统', 'x86_64', 'Assembly'],
  },
  {
    icon: Pen, title: '语言设计师',
    desc: '参与 D-- 编程语言的设计与实现，对编译器/解释器有兴趣。',
    skills: ['编译原理', 'LLVM', 'Go / Rust', '形式语言'],
  },
  {
    icon: ChartLine, title: '前端开发者',
    desc: '负责 FH Clac 和官网的 UI/UX 开发。',
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX'],
  },
  {
    icon: BookOpen, title: '文档编写者',
    desc: '撰写项目文档、教程和博客文章。',
    skills: ['Markdown', '技术写作', '翻译', '整理'],
  },
];

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="加入我们" subtitle="与志同道合的开发者一起创造未来" />

      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-14">
            <p className="text-text-secondary text-lg leading-relaxed">
              无论你是初学者还是资深开发者，这里都有你的位置。我们欢迎所有热爱技术、愿意学习和贡献的人加入。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {roles.map((role, index) => (
              <FadeIn key={role.title} delay={index * 0.1}>
                <div className="p-7 rounded-2xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <role.icon size={24} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{role.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{role.desc}</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <li key={skill} className="px-3 py-1 bg-surface-elevated rounded-full text-xs text-text-secondary">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center p-14 rounded-3xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
              <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">准备好加入了吗？</h2>
              <p className="text-text-secondary text-base mb-8">通过以下方式联系我们，开始你的开源之旅</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://qm.qq.com/cgi-bin/qm/qr?k=8Y0nZ-6A5O4p3P3pT1vK9I2w5R4yA8V"
                  target="_blank"
                  className="px-7 py-3.5 rounded-full bg-[#12b7f5] text-white font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#12b7f5]/25 hover:scale-[1.02] active:scale-[0.98] no-underline"
                >
                  加入 QQ 群
                </a>
                <a
                  href="https://github.com/OpenLight-Studio"
                  target="_blank"
                  className="px-7 py-3.5 rounded-full bg-foreground text-background font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-foreground/20 hover:scale-[1.02] active:scale-[0.98] no-underline"
                >
                  <GithubLogo size={18} weight="fill" /> GitHub
                </a>
                <a
                  href="https://ifdian.net/a/OpenLight"
                  target="_blank"
                  className="px-7 py-3.5 rounded-full border border-border/40 text-foreground font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 hover:bg-surface-elevated hover:border-border/60 hover:scale-[1.02] active:scale-[0.98] no-underline"
                >
                  <HeartStraight size={18} /> 赞助我们
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
