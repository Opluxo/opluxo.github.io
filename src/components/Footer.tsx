import { GithubLogo, HeartStraight } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-xs tracking-tight">
          &copy; 2022-2026 Opluxo LLC. All Rights Reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/OpenLight-Studio"
            target="_blank"
            className="text-text-secondary text-xs transition-colors duration-200 hover:text-foreground no-underline flex items-center gap-1"
          >
            <GithubLogo size={14} weight="fill" />
            GitHub
          </a>
          <a
            href="https://ifdian.net/a/OpenLight"
            target="_blank"
            className="text-text-secondary text-xs transition-colors duration-200 hover:text-foreground no-underline flex items-center gap-1"
          >
            <HeartStraight size={14} />
            赞助
          </a>
        </div>
        <p className="text-text-muted text-xs tracking-tight flex items-center gap-1">
          Designed with <HeartStraight size={12} className="text-accent" weight="fill" /> Light & Code.
        </p>
      </div>
    </footer>
  );
}
