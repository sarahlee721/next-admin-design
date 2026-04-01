// app/layout.js
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const syne   = Syne({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });

// 페이지 로드 시 localStorage → html.dark 적용 (깜빡임 방지)
const themeScript = `
  (function() {
    try {
      var t = localStorage.getItem('theme');
      if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        {/* suppressHydrationWarning 없이 script 직접 삽입 — FOUC 방지 */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}