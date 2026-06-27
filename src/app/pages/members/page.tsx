'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GithubLogo, Globe, Television } from '@phosphor-icons/react';

const members = [
  {
    name: 'Jason_CJ', handle: '@s12mcOvO',
    bio: '"Begin to do, not begin to say." 热爱技术探索与摄影，活跃于多个开源项目。参与 Solian 去中心化社交网络平台的开发，同时运营个人技术博客分享见解。',
    avatar: '/assets/Pictures/s12mcOvO.png',
    github: 'https://github.com/s12mcOvO',
    blog: 'http://s12mc.xyz',
    bilibili: 'https://space.bilibili.com/3493120769526189',
    role: '创始人 / 核心开发者',
  },
  {
    name: '等等个好人', handle: '@dengdeng2code',
    bio: '团队核心成员，专注于项目创意贡献。',
    avatar: '/assets/Pictures/dengdeng2code.jpg',
    github: 'https://github.com/dengdeng2code',
    role: '核心成员',
  },
  {
    name: 'Computer_漫画君', handle: '@Computer_Comic',
    bio: '团队核心成员，为项目注入创意与活力。',
    avatar: '/assets/Pictures/Computer_comic.jpg',
    github: 'https://github.com/Computer-Comic',
    role: '核心成员',
  },
  {
    name: '好心思能有什么小蓝呢', handle: '@XiaoLanawa',
    bio: '团队成员，正在学车的途中。运营个人博客记录生活点滴。',
    avatar: '/assets/Pictures/Xiaolan.jpg',
    github: 'https://github.com/XiaoLanawa',
    blog: 'http://xiaolanawa.top',
    role: '成员',
  },
];

export default function MembersPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="团队成员" subtitle="认识驱动 Opluxo 的人们" />

      <section className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {members.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center p-7 rounded-2xl bg-surface border border-border/30 card-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-22 h-22 rounded-full overflow-hidden mb-5 transition-transform duration-300 hover:scale-105 shadow-lg shadow-black/20">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={88}
                      height={88}
                    />
                  </div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                    {member.role}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-1">{member.name}</h3>
                  <span className="text-text-muted text-sm mb-4">{member.handle}</span>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <a
                      href={member.github}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-elevated text-text-secondary text-xs transition-all duration-200 hover:bg-accent hover:text-background no-underline"
                    >
                      <GithubLogo size={14} weight="fill" /> GitHub
                    </a>
                    {member.blog && (
                      <a
                        href={member.blog}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-elevated text-text-secondary text-xs transition-all duration-200 hover:bg-accent hover:text-background no-underline"
                      >
                        <Globe size={14} /> 博客
                      </a>
                    )}
                    {member.bilibili && (
                      <a
                        href={member.bilibili}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-elevated text-text-secondary text-xs transition-all duration-200 hover:bg-accent hover:text-background no-underline"
                      >
                        <Television size={14} /> B站
                      </a>
                    )}
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
