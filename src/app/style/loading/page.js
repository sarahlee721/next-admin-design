"use client";

import { useState, useEffect } from "react";

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

/* ── Spinner ── */
function Spinner({ size = 24, color = "var(--color-brand)", strokeWidth = 2.5 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth}
      style={{ animation: "spin 0.8s linear infinite", display: "block" }}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  );
}

/* ── Skeleton ── */
function Skeleton({ width = "100%", height = "16px", borderRadius = "8px" }) {
  return (
    <div className="skeleton" style={{ width, height, borderRadius }} />
  );
}

/* ── Progress Bar ── */
function ProgressBar({ value = 0, size = "default", color }) {
  const trackClass = size === "sm" ? "progress-track progress-track-sm"
    : size === "lg" ? "progress-track progress-track-lg"
    : "progress-track";
  return (
    <div className={trackClass}>
      <div
        className="progress-fill"
        style={{
          width: `${value}%`,
          background: color || "var(--color-brand)",
        }}
      />
    </div>
  );
}

/* ── Page ── */
export default function LoadingDemoPage() {
  const [progress, setProgress] = useState(65);

  // 애니메이션 progress
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((v) => {
        if (v >= 100) return 0;
        return v + 1;
      });
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ maxWidth: "720px" }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Loading</h1>
        <p>Progress, Spinner, Skeleton 로딩 패턴 데모입니다.</p>
      </div>

      {/* ══════════════════════════════
          PROGRESS
          ══════════════════════════════ */}
      <Section title="Progress — Size">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
              <span>Small</span><span>72%</span>
            </div>
            <ProgressBar value={72} size="sm" />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
              <span>Default</span><span>48%</span>
            </div>
            <ProgressBar value={48} />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
              <span>Large</span><span>85%</span>
            </div>
            <ProgressBar value={85} size="lg" />
          </div>
        </div>
      </Section>

      <Section title="Progress — Color">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Brand",   value: 65, color: "var(--color-brand)" },
            { label: "Success", value: 80, color: "var(--color-success)" },
            { label: "Warning", value: 45, color: "var(--color-warning)" },
            { label: "Danger",  value: 30, color: "var(--color-danger)" },
            { label: "Info",    value: 60, color: "var(--color-info)" },
          ].map(({ label, value, color }) => (
            <div key={label}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                <span>{label}</span><span>{value}%</span>
              </div>
              <ProgressBar value={value} color={color} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Progress — Animated">
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
            <span>업로드 중...</span>
            <span style={{ color: "var(--color-brand)", fontWeight: 600 }}>{progress}%</span>
          </div>
          <ProgressBar value={progress} size="lg" />
        </div>
      </Section>

      <Section title="Progress — In Card">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { label: "디자인 시스템 구축", value: 88, color: "var(--color-brand)" },
            { label: "API 연동",           value: 55, color: "var(--color-info)" },
            { label: "QA 테스트",          value: 22, color: "var(--color-warning)" },
          ].map(({ label, value, color }) => (
            <div key={label} className="card card-sm">
              <div className="card-body" style={{ padding: "1rem 1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontWeight: 500, fontSize: "0.875rem", color: "var(--color-text)" }}>{label}</span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color }}>{value}%</span>
                </div>
                <ProgressBar value={value} color={color} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════
          SPINNER
          ══════════════════════════════ */}
      <Section title="Spinner — Size">
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          {[16, 20, 24, 32, 40, 48].map((s) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <Spinner size={s} />
              <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>{s}px</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spinner — Color">
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Brand",   color: "var(--color-brand)" },
            { label: "Success", color: "var(--color-success)" },
            { label: "Warning", color: "var(--color-warning)" },
            { label: "Danger",  color: "var(--color-danger)" },
            { label: "Info",    color: "var(--color-info)" },
            { label: "Muted",   color: "var(--color-text-muted)" },
          ].map(({ label, color }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <Spinner size={24} color={color} />
              <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spinner — In Button">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <button className="btn btn-primary btn-md" disabled>
            <Spinner size={16} color="white" />
            저장 중...
          </button>
          <button className="btn btn-secondary btn-md" disabled>
            <Spinner size={16} color="var(--color-text-muted)" />
            불러오는 중
          </button>
          <button className="btn btn-danger btn-md" disabled>
            <Spinner size={16} color="white" />
            삭제 중...
          </button>
          <button className="btn btn-gray btn-md" disabled>
            <Spinner size={16} color="var(--color-text-muted)" />
            처리 중
          </button>
        </div>
      </Section>

      <Section title="Spinner — Overlay">
        <div style={{ position: "relative", height: "140px", borderRadius: "14px", border: "1px solid var(--color-border)", background: "var(--color-surface)", overflow: "hidden" }}>
          {/* 콘텐츠 */}
          <div style={{ padding: "1.25rem" }}>
            <div style={{ fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>데이터 로딩 중</div>
            <p style={{ fontSize: "0.875rem" }}>잠시만 기다려주세요.</p>
          </div>
          {/* 오버레이 */}
          <div style={{
            position: "absolute", inset: 0,
            background: "var(--color-surface)",   // ← 이 줄만 교체
            opacity: 0.85,                         // ← 추가
            backdropFilter: "blur(2px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "10px",
          }}>
            <Spinner size={32} />
            <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>불러오는 중...</span>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════
          SKELETON
          ══════════════════════════════ */}
      <Section title="Skeleton — Text">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Skeleton width="60%"  height="20px" />
          <Skeleton width="100%" height="14px" />
          <Skeleton width="90%"  height="14px" />
          <Skeleton width="75%"  height="14px" />
        </div>
      </Section>

      <Section title="Skeleton — Card">
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="card card-sm" style={{ width: "200px", padding: "1rem", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Skeleton width="100%" height="100px" borderRadius="10px" />
              <Skeleton width="70%"  height="16px" />
              <Skeleton width="100%" height="12px" />
              <Skeleton width="85%"  height="12px" />
              <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                <Skeleton width="60px" height="28px" borderRadius="8px" />
                <Skeleton width="60px" height="28px" borderRadius="8px" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skeleton — List">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Skeleton width="40px" height="40px" borderRadius="50%" />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
                <Skeleton width="40%" height="14px" />
                <Skeleton width="65%" height="12px" />
              </div>
              <Skeleton width="60px" height="24px" borderRadius="20px" />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skeleton — Table">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>이름</th><th>역할</th><th>상태</th><th>가입일</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i}>
                  <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Skeleton width="28px" height="28px" borderRadius="50%" />
                    <Skeleton width="80px" height="12px" />
                  </td>
                  <td><Skeleton width="60px" height="20px" borderRadius="20px" /></td>
                  <td><Skeleton width="50px" height="20px" borderRadius="20px" /></td>
                  <td><Skeleton width="70px" height="12px" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}