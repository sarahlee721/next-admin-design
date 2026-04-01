"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Icons ──────────────────────────────────────────────────────── */
const IconHome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    <polyline points="9 21 9 12 15 12 15 21"/>
  </svg>
);
const IconLayout = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" rx="1"/>
    <rect x="14" y="3" width="7" height="5" rx="1"/>
    <rect x="14" y="12" width="7" height="9" rx="1"/>
    <rect x="3" y="16" width="7" height="5" rx="1"/>
  </svg>
);
const IconStore = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/>
    <path d="M3 9l2.5-5h13L21 9"/>
    <line x1="12" y1="9" x2="12" y2="21"/>
  </svg>
);
const IconStyle = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
  </svg>
);
const IconChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconChevronRight2 = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconSun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  </svg>
);
const IconMoon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

/* ─── Logo ───────────────────────────────────────────────────────── */
const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M8 4C8 4 4 8 4 14C4 17.3 5.7 20.2 8.3 22L16 28L23.7 22C26.3 20.2 28 17.3 28 14C28 8 24 4 24 4C21 6 18.8 8.5 16 8.5C13.2 8.5 11 6 8 4Z" fill="var(--color-brand)" fillOpacity="0.9"/>
    <path d="M16 8.5C18.8 8.5 21 6 24 4C24 4 26 6.5 27 10C24.5 11 21.5 11.5 16 11.5C10.5 11.5 7.5 11 5 10C6 6.5 8 4 8 4C11 6 13.2 8.5 16 8.5Z" fill="var(--color-brand)"/>
  </svg>
);

/* ─── Breakpoints ────────────────────────────────────────────────── */
const MOBILE_BP = 640;   // 모바일: 오버레이 드로어
const TABLET_BP = 1024;  // 태블릿: 아이콘만 (collapsed)

/* ─── Nav Config ─────────────────────────────────────────────────── */
const NAV_ITEMS = [
  {
    label: "First",
    href: "/dashboard",
    icon: <IconHome />,
    badge: 5,
  },
  {
    label: "Second",
    icon: <IconLayout />,
    children: [
      { label: "one",   href: "/second/one" },
      { label: "two",   href: "/second/two" },
      { label: "three", href: "/second/three" },
    ],
  },
  {
    label: "Third",
    icon: <IconStore />,
    children: [
      { label: "one",   href: "/third/one" },
      { label: "two",   href: "/third/two" },
      { label: "three", href: "/third/three" },
    ],
  },
  {
    label: "Style",
    icon: <IconStyle />,
    children: [
      { label: "modal",       href: "/style/modal" },
      { label: "button",      href: "/style/button" },
      { label: "badge",       href: "/style/badge" },
      { label: "alert",       href: "/style/alert" },
      { label: "navigation",  href: "/style/navigation" },
      { label: "loading",     href: "/style/loading" },
      { label: "icon",        href: "/style/icon" },
      { label: "table",       href: "/style/table" },
      { label: "chart",       href: "/style/chart" },
      { label: "form",       href: "/style/form" },
    ],
  },
];

/* ─── Sidebar ────────────────────────────────────────────────────── */
export default function Sidebar() {
  const pathname = usePathname();

  // ── 반응형 상태 ──────────────────────────────────────────────────
  const [isMobile, setIsMobile]       = useState(false); // < 640px → 오버레이 드로어
  const [mobileOpen, setMobileOpen]   = useState(false); // 모바일 드로어 열림 여부
  const [collapsed, setCollapsed]     = useState(false); // 태블릿 아이콘-전용 모드

  // 화면 크기 감지 → 자동 collapse / 모바일 전환
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < MOBILE_BP) {
        setIsMobile(true);
        setCollapsed(false); // 모바일은 드로어가 따로 처리하므로 collapsed 불필요
        setMobileOpen(false);
      } else {
        setIsMobile(false);
        setCollapsed(w < TABLET_BP);
      }
    };
    handleResize(); // 최초 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 라우트 변경 시 모바일 드로어 자동 닫기
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ── 다크모드 ─────────────────────────────────────────────────────
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // ── 서브메뉴 열림 상태 ───────────────────────────────────────────
  const [openMenus, setOpenMenus] = useState(() => {
    const initial = {};
    NAV_ITEMS.forEach((item) => {
      if (item.children?.some((c) => c.href === pathname)) {
        initial[item.label] = true;
      }
    });
    return initial;
  });

  const toggleMenu     = (label) => setOpenMenus((p) => ({ ...p, [label]: !p[label] }));
  const isActive       = (href)  => href === pathname;
  const hasActiveChild = (children) => children?.some((c) => c.href === pathname);

  // ── 접힌 상태에서 자식 있는 아이템 클릭 → 펼치기 ─────────────────
  const handleCollapsedItemClick = (item) => {
    if (item.children) {
      // 펼쳐서 서브메뉴를 보여줌
      setCollapsed(false);
      setOpenMenus((p) => ({ ...p, [item.label]: true }));
    }
    // href만 있는 경우는 <Link>가 처리하므로 별도 처리 불필요
  };

  /* ── 아이템 내부 렌더 ── */
  const ItemInner = ({ item }) => (
    <>
      <span className="nav-item-left">
        {item.icon}
        <span className="nav-item-label">{item.label}</span>
      </span>
      <span className="nav-item-right">
        {item.badge && <span className="nav-badge">{item.badge}</span>}
        {item.children && (
          <span className={`nav-chevron ${openMenus[item.label] ? "nav-chevron--open" : ""}`}>
            <IconChevronRight />
          </span>
        )}
      </span>
    </>
  );

  /* ── 사이드바 본체 ── */
  const sidebarBody = (
    <aside className={`sidebar ${collapsed && !isMobile ? "sidebar--collapsed" : "sidebar--expanded"}`}>

      {/* 로고 헤더 */}
      <div className={`sidebar-header ${collapsed && !isMobile ? "sidebar-header--collapsed" : "sidebar-header--expanded"}`}>
        <Logo />
        {(!collapsed || isMobile) && <span className="sidebar-logo-text">Sneat</span>}
      </div>

      {/* 접기/펼치기 토글 — 모바일에서는 숨김 */}
      {!isMobile && (
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? "사이드바 펼치기" : "사이드바 접기"}
        >
          {collapsed ? <IconChevronRight2 /> : <IconChevronLeft />}
        </button>
      )}

      {/* 네비게이션 */}
      <nav className={`sidebar-nav ${collapsed && !isMobile ? "sidebar-nav--collapsed" : "sidebar-nav--expanded"}`}>
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href) || hasActiveChild(item.children);
          const open   = openMenus[item.label];
          const isCollapsedMode = collapsed && !isMobile;

          return (
            <div key={item.label}>
              {/* ── 접힌 상태 ── */}
              {isCollapsedMode ? (
                item.href ? (
                  /* [수정] href 있는 아이템 → Link로 감싸서 실제 이동 */
                  <Link
                    href={item.href}
                    className={`nav-item--collapsed ${active ? "nav-item--active" : ""}`}
                    title={item.label}
                  >
                    {item.icon}
                    {item.badge && <span className="nav-badge--dot">{item.badge}</span>}
                  </Link>
                ) : (
                  /* [수정] children 있는 아이템 → 클릭 시 사이드바 펼치기 */
                  <div
                    className={`nav-item--collapsed ${active ? "nav-item--active" : ""}`}
                    title={item.label}
                    onClick={() => handleCollapsedItemClick(item)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.icon}
                    {item.badge && <span className="nav-badge--dot">{item.badge}</span>}
                  </div>
                )
              ) : (
                /* ── 펼친 상태 ── */
                item.href ? (
                  <Link
                    href={item.href}
                    className={`nav-item nav-item--leaf ${active ? "nav-item--active" : ""}`}
                  >
                    <ItemInner item={item} />
                  </Link>
                ) : (
                  <div
                    onClick={() => toggleMenu(item.label)}
                    className={`nav-item ${active ? "nav-item--active" : ""}`}
                  >
                    <ItemInner item={item} />
                  </div>
                )
              )}

              {/* 서브메뉴 */}
              {!isCollapsedMode && item.children && (
                <div
                  className="nav-submenu"
                  style={{ maxHeight: open ? `${item.children.length * 43 + 15}px` : "0px" }}
                >
                  <div className="nav-submenu-inner">
                    {item.children.map((child, idx) => (
                      <Link
                        key={`${item.label}-${idx}`}
                        href={child.href}
                        className={`nav-sub-item ${isActive(child.href) ? "nav-sub-item--active" : ""}`}
                      >
                        <span className="nav-sub-dot" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* 다크모드 토글 */}
      <div style={{
        padding: collapsed && !isMobile ? "0.75rem 0" : "0.75rem",
        borderTop: "1px solid var(--color-border)",
        display: "flex",
        justifyContent: collapsed && !isMobile ? "center" : "flex-start",
      }}>
        {collapsed && !isMobile ? (
          <button
            onClick={toggleDark}
            title={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 40, height: 40, borderRadius: 10, border: "none",
              cursor: "pointer", transition: "all .15s",
              background: "transparent",
              color: "var(--color-text-muted)",
            }}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
        ) : (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            width: "100%", padding: "0 0.25rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <span style={{ color: "var(--color-text-muted)" }}>
                {dark ? <IconMoon /> : <IconSun />}
              </span>
              <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-text-sub)" }}>
                {dark ? "다크 모드" : "라이트 모드"}
              </span>
            </div>
            <button
              onClick={toggleDark}
              className={`toggle ${dark ? "active" : ""}`}
              aria-label="테마 전환"
              style={{ flexShrink: 0, border: "none" }}
            >
              <span className="toggle-thumb" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );

  /* ── 모바일: 오버레이 드로어 ── */
  if (isMobile) {
    return (
      <>
        {/* 상단 햄버거 버튼 (모바일 전용) */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="메뉴 열기"
          style={{
            position: "fixed", top: 12, left: 12, zIndex: 60,
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 40, height: 40, borderRadius: 10,
            background: "var(--color-sidebar)", border: "1px solid var(--color-border)",
            color: "var(--color-text-sub)", cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <IconMenu />
        </button>

        {/* 오버레이 배경 */}
        {mobileOpen && (
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 70,
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(2px)",
              animation: "fadeIn .2s ease",
            }}
          />
        )}

        {/* 드로어 */}
        <div style={{
          position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 80,
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {/* 닫기 버튼 */}
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="메뉴 닫기"
            style={{
              position: "absolute", top: 12, right: -48, zIndex: 81,
              display: mobileOpen ? "flex" : "none",
              alignItems: "center", justifyContent: "center",
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)", border: "none",
              color: "#fff", cursor: "pointer", fontSize: 18,
            }}
          >
            ✕
          </button>
          {sidebarBody}
        </div>

        <style>{`
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        `}</style>
      </>
    );
  }

  /* ── 데스크톱/태블릿: 일반 사이드바 ── */
  return sidebarBody;
}