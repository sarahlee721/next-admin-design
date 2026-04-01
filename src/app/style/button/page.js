"use client";

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
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}

const IconPlus     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const IconTrash    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>;
const IconDownload = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const IconSettings = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const IconSend     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const IconCheck    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const IconInfo     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;

const Spinner = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    style={{ animation: "spin 0.8s linear infinite" }}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

export default function ButtonDemoPage() {
  return (
    <div style={{ maxWidth: "860px" }}>

      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Button</h1>
        <p>globals.css의 <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", background: "var(--color-bg-subtle)", padding: "2px 6px", borderRadius: "4px" }}>.btn</code> 클래스 데모입니다.</p>
      </div>

      {/* Variant */}
      <Section title="Variant">
        <button className="btn btn-primary   btn-md">Primary</button>
        <button className="btn btn-secondary btn-md">Secondary</button>
        <button className="btn btn-ghost     btn-md">Ghost</button>
        <button className="btn btn-outline   btn-md">Outline</button>
        <button className="btn btn-gray      btn-md">Gray</button>
        <button className="btn btn-dark      btn-md">Dark</button>
        <button className="btn btn-danger    btn-md">Danger</button>
        <button className="btn btn-success   btn-md">Success</button>
        <button className="btn btn-warning   btn-md">Warning</button>
        <button className="btn btn-info      btn-md">Info</button>
      </Section>

      {/* Size */}
      <Section title="Size">
        <button className="btn btn-primary btn-xs">XSmall</button>
        <button className="btn btn-primary btn-sm">Small</button>
        <button className="btn btn-primary btn-md">Medium</button>
        <button className="btn btn-primary btn-lg">Large</button>
        <button className="btn btn-primary btn-xl">XLarge</button>
        <button className="btn btn-primary btn-2xl">2XLarge</button>
      </Section>

      {/* With Icon */}
      <Section title="With Icon">
        <button className="btn btn-primary   btn-md"><IconPlus />새로 만들기</button>
        <button className="btn btn-secondary btn-md"><IconDownload />다운로드</button>
        <button className="btn btn-danger    btn-md"><IconTrash />삭제</button>
        <button className="btn btn-success   btn-md"><IconCheck />완료</button>
        <button className="btn btn-warning   btn-md"><IconInfo />경고</button>
        <button className="btn btn-gray      btn-md"><IconSettings />설정</button>
        <button className="btn btn-outline   btn-md">전송<IconSend /></button>
      </Section>

      {/* Icon Only */}
      <Section title="Icon Only">
        <button className="btn btn-primary   btn-icon btn-xs"><IconPlus /></button>
        <button className="btn btn-primary   btn-icon btn-sm"><IconPlus /></button>
        <button className="btn btn-primary   btn-icon btn-md"><IconPlus /></button>
        <button className="btn btn-primary   btn-icon btn-lg"><IconPlus /></button>
        <button className="btn btn-primary   btn-icon btn-xl"><IconPlus /></button>
        <div style={{ width: "1px", height: "32px", background: "var(--color-border)", margin: "0 4px" }} />
        <button className="btn btn-secondary btn-icon btn-md"><IconSettings /></button>
        <button className="btn btn-gray      btn-icon btn-md"><IconSettings /></button>
        <button className="btn btn-ghost     btn-icon btn-md"><IconSettings /></button>
        <button className="btn btn-danger    btn-icon btn-md"><IconTrash /></button>
        <button className="btn btn-success   btn-icon btn-md"><IconCheck /></button>
        <button className="btn btn-dark      btn-icon btn-md"><IconInfo /></button>
      </Section>

      {/* Disabled */}
      <Section title="Disabled">
        <button className="btn btn-primary   btn-md" disabled>Primary</button>
        <button className="btn btn-secondary btn-md" disabled>Secondary</button>
        <button className="btn btn-gray      btn-md" disabled>Gray</button>
        <button className="btn btn-ghost     btn-md" disabled>Ghost</button>
        <button className="btn btn-outline   btn-md" disabled>Outline</button>
        <button className="btn btn-danger    btn-md" disabled>Danger</button>
        <button className="btn btn-success   btn-md" disabled>Success</button>
      </Section>

      {/* Loading */}
      <Section title="Loading">
        <button className="btn btn-primary   btn-md" disabled><Spinner />처리 중...</button>
        <button className="btn btn-secondary btn-md" disabled><Spinner />저장 중...</button>
        <button className="btn btn-gray      btn-md" disabled><Spinner />대기 중</button>
        <button className="btn btn-danger    btn-md" disabled><Spinner />삭제 중...</button>
      </Section>

      {/* Full Width */}
      <Section title="Full Width">
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <button className="btn btn-primary   btn-md" style={{ width: "100%" }}>Full Width Primary</button>
          <button className="btn btn-secondary btn-md" style={{ width: "100%" }}>Full Width Secondary</button>
          <button className="btn btn-gray      btn-md" style={{ width: "100%" }}>Full Width Gray</button>
        </div>
      </Section>

      {/* Button Group */}
      <Section title="Button Group">
        <div style={{ display: "inline-flex", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--color-border-strong)" }}>
          {["전체", "활성", "비활성"].map((label, i) => (
            <button key={label} className="btn btn-ghost btn-sm" style={{
              borderRadius: 0,
              borderRight: i < 2 ? "1px solid var(--color-border-strong)" : "none",
              background: i === 0 ? "var(--color-brand-light)" : undefined,
              color: i === 0 ? "var(--color-brand)" : undefined,
              fontWeight: i === 0 ? 600 : undefined,
            }}>
              {label}
            </button>
          ))}
        </div>

        <div style={{ display: "inline-flex", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--color-border-strong)" }}>
          {["일간", "주간", "월간"].map((label, i) => (
            <button key={label} className="btn btn-ghost btn-sm" style={{
              borderRadius: 0,
              borderRight: i < 2 ? "1px solid var(--color-border-strong)" : "none",
              background: i === 1 ? "var(--color-bg-subtle)" : undefined,
              fontWeight: i === 1 ? 600 : undefined,
            }}>
              {label}
            </button>
          ))}
        </div>
      </Section>

      <style>{`
   @keyframes spin { to { transform: rotate(360deg); } }
  
  /* 다크모드 버튼 오버라이드 */

`}</style>
    </div>
  );
}