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
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}

/* ── 아이콘 ── */
const IconInfo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IconWarning = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconError = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);
const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Alert 컴포넌트 ── */
function Alert({ type = "info", title, desc, closable = false, action }) {
  const config = {
    info:    { cls: "alert-info",    icon: <IconInfo /> },
    success: { cls: "alert-success", icon: <IconCheck /> },
    warning: { cls: "alert-warning", icon: <IconWarning /> },
    error:   { cls: "alert-error",   icon: <IconError /> },
  };
  const { cls, icon } = config[type];

  return (
    <div className={`alert ${cls}`} style={{ alignItems: "flex-start" }}>
      {icon}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div style={{ fontWeight: 600, marginBottom: desc ? "2px" : 0 }}>{title}</div>
        )}
        {desc && (
          <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>{desc}</div>
        )}
        {action && (
          <button
            className="btn btn-sm"
            style={{
              marginTop: "10px",
              background: "transparent",
              border: "1px solid currentColor",
              color: "inherit",
              opacity: 0.8,
              borderRadius: "6px",
              padding: "2px 10px",
              fontSize: "0.8125rem",
              cursor: "pointer",
            }}
          >
            {action}
          </button>
        )}
      </div>
      {closable && (
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", opacity: 0.6, padding: "0", display: "flex", flexShrink: 0 }}>
          <IconX />
        </button>
      )}
    </div>
  );
}

export default function AlertDemoPage() {
  return (
    <div style={{ maxWidth: "680px" }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Alert</h1>
        <p>globals.css의 <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", background: "var(--color-bg-subtle)", padding: "2px 6px", borderRadius: "4px" }}>.alert</code> 클래스 데모입니다.</p>
      </div>

      {/* ── Variants ── */}
      <Section title="Variants">
        <Alert type="info"    title="Heads up!" desc="You have 3 new messages waiting for your response." />
        <Alert type="success" title="Successfully deployed!" desc="Your application is now live at app.yourdomain.com" />
        <Alert type="warning" title="Storage almost full" desc="You're using 85% of your 100GB storage. Consider upgrading." />
        <Alert type="error"   title="Payment failed" desc="We couldn't process your card ending in 4242. Please update your payment method." />
      </Section>

      {/* ── Title Only ── */}
      <Section title="Title Only">
        <Alert type="info"    title="새 업데이트가 있습니다." />
        <Alert type="success" title="변경사항이 저장됐습니다." />
        <Alert type="warning" title="세션이 곧 만료됩니다." />
        <Alert type="error"   title="요청을 처리할 수 없습니다." />
      </Section>

      {/* ── With Close ── */}
      <Section title="With Close Button">
        <Alert type="info"    title="공지사항" desc="시스템 점검이 오늘 오후 11시에 예정되어 있습니다." closable />
        <Alert type="success" title="가입 완료!" desc="이메일 인증 후 모든 기능을 이용할 수 있습니다." closable />
        <Alert type="warning" title="비밀번호 만료 예정" desc="30일 후 비밀번호가 만료됩니다." closable />
        <Alert type="error"   title="연결 오류" desc="서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요." closable />
      </Section>

      {/* ── With Action ── */}
      <Section title="With Action">
        <Alert type="info"    title="새 버전 v3.0이 출시됐습니다." desc="지금 업데이트하고 새 기능을 확인해보세요." action="업데이트하기" />
        <Alert type="warning" title="저장소 용량이 부족합니다." desc="파일 업로드를 계속하려면 플랜을 업그레이드하세요." action="플랜 보기" />
        <Alert type="error"   title="인증이 만료됐습니다." desc="다시 로그인하면 계속 이용할 수 있습니다." action="로그인" />
      </Section>

      {/* ── Desc Only ── */}
      <Section title="Description Only">
        <Alert type="info"    desc="읽기 전용 모드로 열려 있습니다." />
        <Alert type="success" desc="백업이 성공적으로 완료됐습니다." />
        <Alert type="warning" desc="일부 항목이 저장되지 않았습니다." />
        <Alert type="error"   desc="파일 형식이 올바르지 않습니다." />
      </Section>

    </div>
  );
}