import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opluxo LLC | 照亮代码的未来",
  description: "Opluxo LLC - 自研操作系统内核 BrightS, D Struct Language, FH Clac",
  keywords: "操作系统, 编程语言, 数据可视化, 开源项目, Opluxo LLC",
  icons: {
    icon: "/assets/Pictures/OpenLight Logo.png",
  },
  openGraph: {
    title: "Opluxo LLC | 照亮代码的未来",
    description: "自研操作系统内核 BrightS、D-subtract 编程语言、FH Clac",
    images: ["/assets/Pictures/OpenLight Logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
