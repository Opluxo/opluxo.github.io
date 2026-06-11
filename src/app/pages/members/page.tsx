'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { FadeIn } from '@/components/MotionDiv';
import { GitHubIcon, GlobeIcon, BilibiliIcon } from '@/components/icons';

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
    name: '等等个好人',
    handle: '@dengdeng2code',
    bio: '团队核心成员，专注于项目创意贡献。',
    avatar: '/assets/Pictures/dengdeng2code.jpg',
    github: 'https://github.com/dengdeng2code',
    role: '核心成员',
  },
  {
    name: 'Computer_漫画君',
    handle: '@Computer_Comic',
    bio: '团队核心成员，为项目注入创意与活力。',
    avatar: '/assets/Pictures/Computer_comic.jpg',
    github: 'https://github.com/Computer-Comic',
    role: '核心成员',
  },
  {
    name: '好心思能有什么小蓝呢',
    handle: '@XiaoLanawa',
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

      <section className="section section-gray">
        <div className="container">
          <div className="members-grid">
            {members.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="card member-card">
                  <div className="member-avatar-wrap">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="member-avatar"
                      loading="lazy"
                      width={100}
                      height={100}
                    />
                  </div>
                  <span className="member-role">{member.role}</span>
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-handle">{member.handle}</span>
                  <p className="card-desc member-bio">{member.bio}</p>
                  <div className="member-links">
                    <a href={member.github} target="_blank" className="member-link-btn">
                      <GitHubIcon size={16} /> GitHub
                    </a>
                    {member.blog && (
                      <a href={member.blog} target="_blank" className="member-link-btn">
                        <GlobeIcon size={16} /> 博客
                      </a>
                    )}
                    {member.bilibili && (
                      <a href={member.bilibili} target="_blank" className="member-link-btn">
                        <BilibiliIcon size={16} /> B站
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
