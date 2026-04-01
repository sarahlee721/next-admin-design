"use client";

import { useState } from "react";

/* ─── Sample Data ───────────────────────────────────────────────── */
const USERS = [
  { id: 1, name: "Kim Jisoo",    email: "jisoo@example.com",  role: "Admin",   status: "active",   joined: "2024-01-12", sales: 4820000 },
  { id: 2, name: "Lee Minho",    email: "minho@example.com",  role: "Editor",  status: "active",   joined: "2024-03-05", sales: 2310000 },
  { id: 3, name: "Park Sooyeon", email: "soo@example.com",    role: "Viewer",  status: "inactive", joined: "2024-04-20", sales: 980000  },
  { id: 4, name: "Choi Yuna",    email: "yuna@example.com",   role: "Editor",  status: "active",   joined: "2024-06-01", sales: 3540000 },
  { id: 5, name: "Jung Hoon",    email: "hoon@example.com",   role: "Viewer",  status: "pending",  joined: "2024-08-15", sales: 1760000 },
];

const ORDERS = [
  { id: "#ORD-001", product: "MacBook Pro 14",  qty: 1,  price: 2499000, status: "delivered", date: "2025-03-01" },
  { id: "#ORD-002", product: "iPhone 15 Pro",   qty: 2,  price: 1399000, status: "shipped",   date: "2025-03-10" },
  { id: "#ORD-003", product: "AirPods Pro",     qty: 5,  price: 329000,  status: "pending",   date: "2025-03-18" },
  { id: "#ORD-004", product: "iPad Air",        qty: 1,  price: 899000,  status: "cancelled", date: "2025-03-20" },
  { id: "#ORD-005", product: "Apple Watch S9",  qty: 3,  price: 499000,  status: "delivered", date: "2025-03-22" },
];

const STATS = [
  { metric: "총 매출",     q1: "₩12.4M", q2: "₩15.2M", q3: "₩18.7M", q4: "₩22.1M", total: "₩68.4M",  trend: "up" },
  { metric: "신규 사용자", q1: "1,240",  q2: "1,890",  q3: "2,340",  q4: "3,010",  total: "8,480",    trend: "up" },
  { metric: "전환율",      q1: "3.2%",   q2: "3.8%",   q3: "4.1%",   q4: "4.7%",   total: "3.95%",    trend: "up" },
  { metric: "이탈률",      q1: "62%",    q2: "58%",    q3: "54%",    q4: "49%",    total: "55.75%",   trend: "down" },
  { metric: "평균 세션",   q1: "2m 10s", q2: "2m 34s", q3: "3m 02s", q4: "3m 41s", total: "2m 52s",   trend: "up" },
];

/* ─── Helpers ────────────────────────────────────────────────────── */
const fmt = (n) => n?.toLocaleString("ko-KR") + "원";

const StatusBadge = ({ status }) => {
  const map = {
    active:    "badge-success",
    inactive:  "badge-neutral",
    pending:   "badge-warning",
    delivered: "badge-success",
    shipped:   "badge-info",
    cancelled: "badge-error",
  };
  const label = {
    active: "활성", inactive: "비활성", pending: "대기중",
    delivered: "배송완료", shipped: "배송중", cancelled: "취소",
  };
  return <span className={`badge badge-dot ${map[status] ?? "badge-neutral"}`}>{label[status] ?? status}</span>;
};

const RoleBadge = ({ role }) => {
  const map = { Admin: "badge-brand", Editor: "badge-info", Viewer: "badge-neutral" };
  return <span className={`badge ${map[role] ?? "badge-neutral"}`}>{role}</span>;
};

const TrendIcon = ({ trend }) =>
  trend === "up" ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-success)", display:"inline" }}>
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-danger)", display:"inline" }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );

/* ─── Section Header ─────────────────────────────────────────────── */
const SectionTitle = ({ num, title, desc }) => (
  <div style={{ marginBottom: "1rem" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.25rem" }}>
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 24, height: 24, borderRadius: "50%",
        background: "#4361ee", color: "#fff",
        fontSize: "0.6875rem", fontWeight: 700,
      }}>{num}</span>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 700, color: "var(--color-text)", margin: 0 }}>{title}</h2>
    </div>
    {desc && <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: "0 0 0 2rem" }}>{desc}</p>}
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   ① 기본 테이블
   ══════════════════════════════════════════════════════════════════ */
function BasicTable() {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>이름</th><th>이메일</th><th>역할</th><th>상태</th><th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {USERS.map((u) => (
            <tr key={u.id}>
              <td style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>#{u.id}</td>
              <td style={{ fontWeight: 500, color: "var(--color-text)" }}>{u.name}</td>
              <td>{u.email}</td>
              <td><RoleBadge role={u.role} /></td>
              <td><StatusBadge status={u.status} /></td>
              <td>{u.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ② 아바타 + 정렬 테이블
   ══════════════════════════════════════════════════════════════════ */
function AvatarSortTable() {
  const [sortKey, setSortKey] = useState("sales");
  const [sortDir, setSortDir] = useState("desc");

  const sorted = [...USERS].sort((a, b) => {
    const va = a[sortKey], vb = b[sortKey];
    return sortDir === "asc" ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
  });

  const handleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("desc"); }
  };

  const SortIcon = ({ col }) => {
    const active = sortKey === col;
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        style={{ opacity: active ? 1 : 0.3, marginLeft: 4, display: "inline", verticalAlign: "middle",
          transform: active && sortDir === "asc" ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    );
  };

  const COLORS = ["#4f6ef7","#3db87a","#f5a623","#ef6b6b","#9b59b6"];
  const initials = (name) => name.split(" ").map(w => w[0]).join("").slice(0,2);

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>사용자</th>
            <th onClick={() => handleSort("role")} style={{ cursor: "pointer", userSelect: "none" }}>역할<SortIcon col="role"/></th>
            <th onClick={() => handleSort("status")} style={{ cursor: "pointer", userSelect: "none" }}>상태<SortIcon col="status"/></th>
            <th onClick={() => handleSort("sales")} style={{ cursor: "pointer", userSelect: "none" }}>매출<SortIcon col="sales"/></th>
            <th onClick={() => handleSort("joined")} style={{ cursor: "pointer", userSelect: "none" }}>가입일<SortIcon col="joined"/></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((u, i) => (
            <tr key={u.id}>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: COLORS[i % COLORS.length] + "22",
                    color: COLORS[i % COLORS.length],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "0.75rem", flexShrink: 0,
                    border: `1.5px solid ${COLORS[i % COLORS.length]}44`,
                  }}>
                    {initials(u.name)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-text)" }}>{u.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{u.email}</div>
                  </div>
                </div>
              </td>
              <td><RoleBadge role={u.role} /></td>
              <td><StatusBadge status={u.status} /></td>
              <td style={{ fontWeight: 600, color: "var(--color-text)", fontVariantNumeric: "tabular-nums" }}>{fmt(u.sales)}</td>
              <td>{u.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ③ 체크박스 선택 테이블
   ══════════════════════════════════════════════════════════════════ */
function CheckboxTable() {
  const [selected, setSelected] = useState(new Set());
  const allSelected = selected.size === ORDERS.length;

  const toggle = (id) => setSelected((s) => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(ORDERS.map((o) => o.id)));

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      {/* 툴바 */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0.875rem 1.25rem",
        borderBottom: "1px solid var(--color-border)",
        background: selected.size > 0 ? "var(--color-brand-light)" : "var(--color-bg-subtle)",
        transition: "background .2s",
      }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-text)" }}>
          {selected.size > 0 ? `${selected.size}개 선택됨` : "주문 목록"}
        </div>
        {selected.size > 0 && (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button className="btn btn-sm btn-danger">삭제</button>
            <button className="btn btn-sm btn-secondary">내보내기</button>
          </div>
        )}
      </div>

      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <input type="checkbox" checked={allSelected} onChange={toggleAll}
                style={{ accentColor: "var(--color-brand)", cursor: "pointer" }}/>
            </th>
            <th>주문번호</th><th>상품명</th><th>수량</th><th>단가</th><th>합계</th><th>상태</th><th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {ORDERS.map((o) => (
            <tr
                key={o.id}
                onClick={() => toggle(o.id)}
                data-selected={selected.has(o.id) ? "true" : "false"}
                style={{ cursor: "pointer", transition: "background .15s" }}
              >
              <td onClick={(e) => e.stopPropagation()}>
                <input type="checkbox" checked={selected.has(o.id)} onChange={() => toggle(o.id)}
                  style={{ accentColor: "var(--color-brand)", cursor: "pointer" }}/>
              </td>
              <td style={{ fontWeight: 600, color: "var(--color-brand)", fontSize: "0.8125rem" }}>{o.id}</td>
              <td style={{ fontWeight: 500, color: "var(--color-text)" }}>{o.product}</td>
              <td style={{ textAlign: "center" }}>{o.qty}</td>
              <td style={{ fontVariantNumeric: "tabular-nums" }}>{fmt(o.price)}</td>
              <td style={{ fontWeight: 700, color: "var(--color-text)", fontVariantNumeric: "tabular-nums" }}>{fmt(o.price * o.qty)}</td>
              <td><StatusBadge status={o.status} /></td>
              <td>{o.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ④ 스트라이프 + 고정 헤더 (스크롤)
   ══════════════════════════════════════════════════════════════════ */
function StripedScrollTable() {
  return (
    <div style={{ border: "1px solid var(--color-border)", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ overflowX: "auto", overflowY: "auto", maxHeight: 260 }}>
        <table className="table" style={{ minWidth: 700 }}>
          <thead style={{ position: "sticky", top: 0, zIndex: 1 }}>
            <tr>
              <th>분기별 지표</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>연간 합계</th><th>추세</th>
            </tr>
          </thead>
          <tbody>
            {STATS.map((s, i) => (
              <tr key={s.metric} style={{ background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-bg-subtle)" }}>
                <td style={{ fontWeight: 600, color: "var(--color-text)" }}>{s.metric}</td>
                {[s.q1, s.q2, s.q3, s.q4].map((v, j) => (
                  <td key={j} style={{ fontVariantNumeric: "tabular-nums", textAlign: "right" }}>{v}</td>
                ))}
                <td style={{ fontWeight: 700, color: "var(--color-brand)", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{s.total}</td>
                <td style={{ textAlign: "center" }}>
                  <TrendIcon trend={s.trend} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ background: "var(--color-bg-subtle)", borderTop: "2px solid var(--color-border-strong)" }}>
              <td style={{ fontWeight: 700, color: "var(--color-text)", fontSize: "0.8125rem" }} colSpan={7}>
                * 분기별 실적 요약표 — 2024년 기준
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ⑤ 인라인 편집 테이블
   ══════════════════════════════════════════════════════════════════ */
function InlineEditTable() {
  const [data, setData] = useState(USERS.map(u => ({ ...u })));
  const [editing, setEditing] = useState(null); // { id, key }
  const [editVal, setEditVal] = useState("");

  const startEdit = (id, key, val) => { setEditing({ id, key }); setEditVal(val); };
  const commitEdit = () => {
    if (!editing) return;
    setData(d => d.map(u => u.id === editing.id ? { ...u, [editing.key]: editVal } : u));
    setEditing(null);
  };

  const EditCell = ({ id, colKey, val }) => {
    const isEditing = editing?.id === id && editing?.key === colKey;
    return isEditing ? (
      <input
        className="input input-sm"
        value={editVal}
        autoFocus
        onChange={e => setEditVal(e.target.value)}
        onBlur={commitEdit}
        onKeyDown={e => e.key === "Enter" && commitEdit()}
        style={{ width: "100%", minWidth: 80 }}
      />
    ) : (
      <span
        onDoubleClick={() => startEdit(id, colKey, val)}
        style={{ cursor: "text", display: "block", padding: "2px 4px", borderRadius: 4,
          transition: "background .15s" }}
        title="더블클릭하여 편집"
      >
        {val}
      </span>
    );
  };

  return (
    <>
      <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
        💡 이름·이메일 셀을 더블클릭하면 바로 편집할 수 있습니다.
      </p>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr><th>ID</th><th>이름</th><th>이메일</th><th>역할</th><th>상태</th></tr>
          </thead>
          <tbody>
            {data.map(u => (
              <tr key={u.id}>
                <td style={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }}>#{u.id}</td>
                <td><EditCell id={u.id} colKey="name" val={u.name} /></td>
                <td><EditCell id={u.id} colKey="email" val={u.email} /></td>
                <td>
                  <select
                    className="select"
                    value={u.role}
                    onChange={e => setData(d => d.map(r => r.id === u.id ? { ...r, role: e.target.value } : r))}
                    style={{ height: 30, padding: "0 1.5rem 0 0.5rem", fontSize: "0.8125rem" }}
                  >
                    {["Admin","Editor","Viewer"].map(r => <option key={r}>{r}</option>)}
                  </select>
                </td>
                <td><StatusBadge status={u.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ⑥ 프로그레스 바 포함 테이블
   ══════════════════════════════════════════════════════════════════ */
const PERF = [
  { name: "MacBook Pro", category: "노트북",  sales: 4820, target: 6000, color: "var(--color-brand)" },
  { name: "iPhone 15",   category: "스마트폰", sales: 7540, target: 8000, color: "var(--color-success)" },
  { name: "iPad Air",    category: "태블릿",  sales: 2100, target: 5000, color: "var(--color-warning)" },
  { name: "AirPods Pro", category: "음향기기", sales: 3210, target: 3500, color: "var(--color-info)" },
  { name: "Apple Watch", category: "웨어러블", sales: 1640, target: 4000, color: "var(--color-danger)" },
];

function ProgressTable() {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr><th>제품명</th><th>카테고리</th><th>판매량</th><th>목표</th><th style={{ minWidth: 160 }}>달성률</th></tr>
        </thead>
        <tbody>
          {PERF.map((p) => {
            const pct = Math.round((p.sales / p.target) * 100);
            return (
              <tr key={p.name}>
                <td style={{ fontWeight: 600, color: "var(--color-text)" }}>{p.name}</td>
                <td><span className="badge badge-neutral">{p.category}</span></td>
                <td style={{ fontVariantNumeric: "tabular-nums" }}>{p.sales.toLocaleString()}</td>
                <td style={{ fontVariantNumeric: "tabular-nums", color: "var(--color-text-muted)" }}>{p.target.toLocaleString()}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div className="progress-track" style={{ flex: 1 }}>
                      <div className="progress-fill" style={{ width: `${Math.min(pct, 100)}%`, background: p.color, transition: "width 0.6s ease" }} />
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: pct >= 100 ? "var(--color-success)" : "var(--color-text-muted)", minWidth: 36, textAlign: "right" }}>
                      {pct}%
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ⑦ 스켈레톤 로딩 테이블
   ══════════════════════════════════════════════════════════════════ */
function SkeletonTable() {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr><th>이름</th><th>이메일</th><th>역할</th><th>상태</th><th>가입일</th></tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              {[120, 180, 60, 70, 90].map((w, j) => (
                <td key={j}>
                  <div className="skeleton" style={{ height: 14, width: w, borderRadius: 6 }} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════════════════ */
export default function TableStylePage() {
  const sections = [
    { num: 1, title: "기본 테이블",               desc: ".table .table-wrapper — 기본 스타일, 호버 효과",           component: <BasicTable /> },
    { num: 2, title: "아바타 + 정렬 테이블",       desc: "컬럼 헤더 클릭으로 오름/내림차순 정렬",                     component: <AvatarSortTable /> },
    { num: 3, title: "체크박스 선택 테이블",       desc: "행 선택 시 툴바 액션 표시, 전체 선택 지원",                  component: <CheckboxTable /> },
    { num: 4, title: "스트라이프 + 스크롤 테이블", desc: "짝수/홀수 행 색상 구분, 헤더 고정 후 세로 스크롤",           component: <StripedScrollTable /> },
    { num: 5, title: "인라인 편집 테이블",         desc: "더블클릭으로 셀 편집, 드롭다운 역할 변경",                   component: <InlineEditTable /> },
    { num: 6, title: "프로그레스 바 테이블",       desc: "목표 대비 실적을 시각적으로 표현",                           component: <ProgressTable /> },
    { num: 7, title: "스켈레톤 로딩 테이블",       desc: "데이터 로딩 중 shimmer 플레이스홀더 표시",                   component: <SkeletonTable /> },
  ];

  return (
    <div style={{ maxWidth: 1100 }}>
      {/* 페이지 헤더 */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 800, color: "var(--color-text)", marginBottom: "0.375rem", letterSpacing: "-0.03em" }}>
          Table
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem" }}>
          globals.css 기반 다양한 테이블 패턴 모음
        </p>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
          {["기본", "정렬", "선택", "스트라이프", "인라인 편집", "프로그레스", "스켈레톤"].map(t => (
            <span key={t} className="badge badge-neutral">{t}</span>
          ))}
        </div>
      </div>

      {/* 섹션들 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {sections.map((s) => (
          <div key={s.num} className="card">
            <div className="card-header">
              <SectionTitle num={s.num} title={s.title} desc={s.desc} />
            </div>
            <div className="card-body">
              {s.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}