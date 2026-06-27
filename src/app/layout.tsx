import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://opluxo.github.io"),
  title: "Opluxo LLC | 照亮代码的未来",
  description: "Opluxo LLC — 开源技术工作室。自研操作系统内核 BrightS、D-subtract 编程语言、FH Clac 数据可视化工具。",
  keywords: "操作系统, 编程语言, 数据可视化, 开源项目, Opluxo LLC, BrightS, D-subtract",
  icons: {
    icon: "/assets/Pictures/OpenLight Logo.png",
  },
  openGraph: {
    title: "Opluxo LLC | 照亮代码的未来",
    description: "开源技术工作室 — 自研操作系统内核、编程语言与数据可视化工具",
    images: ["/assets/Pictures/OpenLight Logo.png"],
    type: "website",
    siteName: "Opluxo LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opluxo LLC | 照亮代码的未来",
    description: "开源技术工作室 — 自研操作系统内核、编程语言与数据可视化工具",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0F172A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
