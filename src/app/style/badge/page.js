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
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.625rem" }}>
        {children}
      </div>
    </div>
  );
}

export default function BadgeDemoPage() {
  return (
    <div style={{ maxWidth: "860px" }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Badge</h1>
        <p>globals.css의 <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", background: "var(--color-bg-subtle)", padding: "2px 6px", borderRadius: "4px" }}>.badge</code> 클래스 데모입니다.</p>
      </div>

      {/* ── Color ── */}
      <Section title="Color">
        <span className="badge badge-brand">Brand</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-error">Error</span>
        <span className="badge badge-info">Info</span>
        <span className="badge badge-neutral">Neutral</span>
      </Section>

      {/* ── Size ── */}
      <Section title="Size">
        <span className="badge badge-sm badge-brand">Small</span>
        <span className="badge badge-brand">Default</span>
        <span className="badge badge-lg badge-brand">Large</span>
      </Section>

      {/* ── With Dot ── */}
      <Section title="With Dot">
        <span className="badge badge-dot badge-brand">Brand</span>
        <span className="badge badge-dot badge-success">Success</span>
        <span className="badge badge-dot badge-warning">Warning</span>
        <span className="badge badge-dot badge-error">Error</span>
        <span className="badge badge-dot badge-info">Info</span>
        <span className="badge badge-dot badge-neutral">Neutral</span>
      </Section>

      {/* ── In Context ── */}
      <Section title="In Context — 텍스트와 함께">
        <span style={{ color: "var(--color-text-sub)", fontSize: "0.875rem" }}>
          상태: <span className="badge badge-success badge-dot">활성</span>
        </span>
        <span style={{ color: "var(--color-text-sub)", fontSize: "0.875rem" }}>
          권한: <span className="badge badge-brand">Admin</span>
        </span>
        <span style={{ color: "var(--color-text-sub)", fontSize: "0.875rem" }}>
          버전: <span className="badge badge-neutral">v2.1.0</span>
        </span>
        <span style={{ color: "var(--color-text-sub)", fontSize: "0.875rem" }}>
          알림: <span className="badge badge-error">긴급</span>
        </span>
      </Section>

      {/* ── In Table (예시) ── */}
      <Section title="In Table">
        <div className="table-wrapper" style={{ width: "100%" }}>
          <table className="table">
            <thead>
              <tr>
                <th>이름</th>
                <th>역할</th>
                <th>상태</th>
                <th>플랜</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "김민준", role: "Admin",  status: "active",   plan: "Pro" },
                { name: "이서연", role: "Editor", status: "active",   plan: "Free" },
                { name: "박도윤", role: "Viewer", status: "inactive", plan: "Pro" },
                { name: "최지아", role: "Editor", status: "pending",  plan: "Team" },
              ].map((row) => (
                <tr key={row.name}>
                  <td style={{ fontWeight: 500, color: "var(--color-text)" }}>{row.name}</td>
                  <td>
                    <span className={`badge ${
                      row.role === "Admin"  ? "badge-error" :
                      row.role === "Editor" ? "badge-brand" : "badge-neutral"
                    }`}>
                      {row.role}
                    </span>
                  </td>
                  <td>
                    <span className={`badge badge-dot ${
                      row.status === "active"   ? "badge-success" :
                      row.status === "pending"  ? "badge-warning" : "badge-neutral"
                    }`}>
                      {row.status === "active" ? "활성" : row.status === "pending" ? "대기" : "비활성"}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${
                      row.plan === "Pro"  ? "badge-info" :
                      row.plan === "Team" ? "badge-brand" : "badge-neutral"
                    }`}>
                      {row.plan}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── In Card ── */}
      <Section title="In Card">
        {[
          { title: "서버 점검 완료",   desc: "모든 서비스가 정상 운영 중입니다.",  badge: "badge-success", label: "완료",  dot: true },
          { title: "결제 오류 발생",   desc: "일부 결제 수단에서 오류가 감지됐어요.", badge: "badge-error",   label: "긴급",  dot: true },
          { title: "업데이트 예정",    desc: "v3.0.0 배포가 곧 시작됩니다.",       badge: "badge-warning", label: "예정",  dot: true },
          { title: "새 기능 출시",     desc: "AI 자동완성 기능이 추가됐습니다.",    badge: "badge-brand",   label: "New",   dot: false },
        ].map((item) => (
          <div key={item.title} className="card card-sm" style={{ width: "260px" }}>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem", color: "var(--color-text)" }}>
                  {item.title}
                </span>
                <span className={`badge ${item.dot ? "badge-dot" : ""} ${item.badge}`}>{item.label}</span>
              </div>
              <p style={{ fontSize: "0.8125rem", margin: 0 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </Section>

    </div>
  );
}