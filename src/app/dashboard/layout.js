// app/()/layout.js
"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";

const MOBILE_BP = 640;

export default function DashboardLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BP);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div 
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "var(--color-bg)",
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          overflow: "auto",
          /* 모바일: 햄버거 버튼(40px + gap 12px + 여유) 만큼 상단 패딩 확보 */
          padding: isMobile ? "70px 25px 25px" : "4rem 4.5rem",
          minWidth: 0,
        }}
      >
        {children}
      </main>
    </div>
  );
}


