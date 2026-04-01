"use client";

import { useState } from "react";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "1rem",
        fontWeight: 600,
        color: "var(--color-text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        marginBottom: "1rem",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid var(--color-border)",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

/* ── 아이콘 ── */
const IconHome     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/></svg>;
const IconLayout   = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
const IconSettings = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconUsers    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconChart    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
const IconChevron  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const IconSlash    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;

export default function NavigationDemoPage() {
  const [activeTab1, setActiveTab1]   = useState(0);
  const [activeTab2, setActiveTab2]   = useState(1);
  const [activeNav,  setActiveNav]    = useState("Dashboard");

  const tabs1 = ["Overview", "Analytics", "Reports", "Settings"];
  const tabs2 = ["전체", "진행 중", "완료", "보관됨"];
  const navItems = [
    { label: "Dashboard", icon: <IconHome /> },
    { label: "Analytics", icon: <IconChart /> },
    { label: "Users",     icon: <IconUsers /> },
    { label: "Layouts",   icon: <IconLayout /> },
    { label: "Settings",  icon: <IconSettings /> },
  ];

  return (
    <div style={{ maxWidth: "860px" }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Navigation</h1>
        <p>globals.css의 <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", background: "var(--color-bg-subtle)", padding: "2px 6px", borderRadius: "4px" }}>.tab</code>, <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", background: "var(--color-bg-subtle)", padding: "2px 6px", borderRadius: "4px" }}>.breadcrumb</code> 클래스 데모입니다.</p>
      </div>

      {/* ── Tabs (pill) ── */}
      <Section title="Tabs — Pill">
        <div className="tabs">
          {tabs1.map((t, i) => (
            <div key={t} className={`tab ${activeTab1 === i ? "active" : ""}`} onClick={() => setActiveTab1(i)}>
              {t}
            </div>
          ))}
        </div>
        <div style={{
          marginTop: "1rem",
          padding: "1.25rem",
          borderRadius: "12px",
          background: "var(--color-bg-subtle)",
          fontSize: "0.875rem",
          color: "var(--color-text-muted)",
        }}>
          현재 탭: <strong style={{ color: "var(--color-text)" }}>{tabs1[activeTab1]}</strong>
        </div>
      </Section>

      {/* ── Tabs (border) ── */}
      <Section title="Tabs — Border">
        <div className="tabs-border">
          {tabs2.map((t, i) => (
            <div key={t} className={`tab ${activeTab2 === i ? "active" : ""}`} onClick={() => setActiveTab2(i)}>
              {t}
              {i === 1 && <span className="badge badge-brand badge-sm" style={{ marginLeft: "6px" }}>3</span>}
            </div>
          ))}
        </div>
        <div style={{
          marginTop: "1rem",
          padding: "1.25rem",
          borderRadius: "12px",
          background: "var(--color-bg-subtle)",
          fontSize: "0.875rem",
          color: "var(--color-text-muted)",
        }}>
          현재 탭: <strong style={{ color: "var(--color-text)" }}>{tabs2[activeTab2]}</strong>
        </div>
      </Section>

      {/* ── Breadcrumb ── */}
      <Section title="Breadcrumb">
        {/* 기본 */}
        <nav className="breadcrumb" style={{ marginBottom: "0.75rem" }}>
          <span className="breadcrumb-item">Home</span>
          <IconSlash />
          <span className="breadcrumb-item">Settings</span>
          <IconSlash />
          <span className="breadcrumb-item current">Profile</span>
        </nav>

        {/* 깊은 depth */}
        <nav className="breadcrumb" style={{ marginBottom: "0.75rem" }}>
          <span className="breadcrumb-item">Dashboard</span>
          <IconSlash />
          <span className="breadcrumb-item">Users</span>
          <IconSlash />
          <span className="breadcrumb-item">김민준</span>
          <IconSlash />
          <span className="breadcrumb-item current">편집</span>
        </nav>

        {/* 아이콘 포함 */}
        <nav className="breadcrumb">
          <span className="breadcrumb-item" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <IconHome />홈
          </span>
          <IconSlash />
          <span className="breadcrumb-item" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <IconLayout />레이아웃
          </span>
          <IconSlash />
          <span className="breadcrumb-item current">컨테이너</span>
        </nav>
      </Section>

      {/* ── Vertical Nav ── */}
      <Section title="Vertical Nav">
        <div style={{
          width: "220px",
          padding: "8px",
          borderRadius: "14px",
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item nav-item--leaf ${activeNav === item.label ? "nav-item--active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <span className="nav-item-left">
                {item.icon}
                <span className="nav-item-label">{item.label}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Horizontal Nav (상단 바 스타일) ── */}
      <Section title="Horizontal Nav">
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "6px 8px",
          borderRadius: "12px",
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          width: "fit-content",
        }}>
          {navItems.slice(0, 4).map((item) => (
            <div
              key={item.label}
              className={`tab ${activeNav === item.label ? "active" : ""}`}
              onClick={() => setActiveNav(item.label)}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </Section>

      {/* ── Stepped Nav (스텝 인디케이터) ── */}
      <Section title="Step Indicator">
        {(() => {
          const steps = ["기본 정보", "계정 설정", "결제 수단", "완료"];
          const current = 2;
          return (
            <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
              {steps.map((step, i) => (
                <div key={step} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.8125rem", fontWeight: 600,
                      background: i < current
                        ? "var(--color-brand)"
                        : i === current
                        ? "var(--color-brand-light)"
                        : "var(--color-bg-subtle)",
                        color: i < current
                        ? "var(--color-text-inv)"   // 다크모드에선 #0e1117
                        : i === current
                        ? "var(--color-brand)"
                        : "var(--color-text-muted)",
                      border: i === current ? "2px solid var(--color-brand)" : "2px solid transparent",
                    }}>
                      {i < current ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      ) : i + 1}
                    </div>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: i === current ? 600 : 400,
                      color: i <= current ? "var(--color-text)" : "var(--color-text-muted)",
                      whiteSpace: "nowrap",
                    }}>
                      {step}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      width: "60px", height: "2px", marginBottom: "18px", marginLeft: "4px", marginRight: "4px",
                      background: i < current ? "var(--color-brand)" : "var(--color-border)",
                      transition: "background 0.3s",
                    }} />
                  )}
                </div>
              ))}
            </div>
          );
        })()}
      </Section>

      {/* ── Pagination ── */}
      <Section title="Pagination">
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {/* 이전 */}
          <button className="btn btn-secondary btn-sm btn-icon" style={{ borderRadius: "8px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {[1,2,3,"...",8,9,10].map((p, i) => (
            <button
              key={i}
              className={`btn btn-sm btn-icon ${p === 3 ? "btn-primary" : "btn-ghost"}`}
              style={{ borderRadius: "8px", minWidth: "32px" }}
              disabled={p === "..."}
            >
              {p}
            </button>
          ))}

          {/* 다음 */}
          <button className="btn btn-secondary btn-sm btn-icon" style={{ borderRadius: "8px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </Section>

    </div>
  );
}