import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TemplateHub - 프리미엄 템플릿 포탈",
  description: "성공적인 온라인 브랜딩의 시작. 각 분야별 최고의 전문가들이 설계한 12가지 독보적인 디자인을 지금 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
