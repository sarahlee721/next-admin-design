"use client";

import {
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ComposedChart,
  ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ReferenceLine,
} from "recharts";

/* ─── Design Tokens (globals.css 변수와 맞춤) ────────────────────── */
const C = {
  brand:   "#4f6ef7",
  success: "#3db87a",
  warning: "#f5a623",
  danger:  "#ef6b6b",
  info:    "#4aaee0",
  purple:  "#9b59b6",
  border:  "#e4e0db",
  textMuted: "#9a9085",
  textSub:   "#665e54",
  bg:      "#f9f8f7",
  bgSubtle:"#f1efed",
  surface: "#ffffff",
};

const PALETTE = [C.brand, C.success, C.warning, C.danger, C.info, C.purple];

/* ─── Sample Data ────────────────────────────────────────────────── */
const MONTHLY = [
  { month: "1월",  revenue: 3200, cost: 1800, profit: 1400, users: 840  },
  { month: "2월",  revenue: 4100, cost: 2100, profit: 2000, users: 1020 },
  { month: "3월",  revenue: 3800, cost: 1950, profit: 1850, users: 970  },
  { month: "4월",  revenue: 5200, cost: 2400, profit: 2800, users: 1340 },
  { month: "5월",  revenue: 4700, cost: 2200, profit: 2500, users: 1180 },
  { month: "6월",  revenue: 6100, cost: 2600, profit: 3500, users: 1560 },
  { month: "7월",  revenue: 5800, cost: 2500, profit: 3300, users: 1490 },
  { month: "8월",  revenue: 7200, cost: 2900, profit: 4300, users: 1820 },
  { month: "9월",  revenue: 6800, cost: 2750, profit: 4050, users: 1720 },
  { month: "10월", revenue: 8100, cost: 3100, profit: 5000, users: 2060 },
  { month: "11월", revenue: 7600, cost: 2980, profit: 4620, users: 1940 },
  { month: "12월", revenue: 9300, cost: 3400, profit: 5900, users: 2350 },
];

const CATEGORY = [
  { name: "노트북",   q1: 4200, q2: 5100, q3: 4800, q4: 6200 },
  { name: "스마트폰", q1: 7100, q2: 6800, q3: 7500, q4: 8900 },
  { name: "태블릿",  q1: 2100, q2: 2400, q3: 2200, q4: 3100 },
  { name: "음향기기", q1: 3300, q2: 3100, q3: 3600, q4: 4200 },
  { name: "웨어러블", q1: 1800, q2: 2200, q3: 2500, q4: 3400 },
];

const DONUT = [
  { name: "직접 방문",  value: 38, color: C.brand   },
  { name: "검색 유입",  value: 27, color: C.success  },
  { name: "소셜 미디어",value: 18, color: C.warning  },
  { name: "이메일",     value: 11, color: C.info     },
  { name: "기타",       value:  6, color: C.textMuted},
];

const RADAR_DATA = [
  { subject: "매출",     A: 88, B: 72 },
  { subject: "사용자",   A: 76, B: 85 },
  { subject: "전환율",   A: 65, B: 58 },
  { subject: "리텐션",   A: 82, B: 70 },
  { subject: "만족도",   A: 91, B: 78 },
  { subject: "NPS",      A: 74, B: 63 },
];

const SCATTER_DATA = Array.from({ length: 30 }, (_, i) => ({
  x: Math.round(20 + Math.random() * 80),
  y: Math.round(15 + Math.random() * 85),
  z: Math.round(100 + Math.random() * 400),
}));

const AREA_STACK = MONTHLY.map(m => ({
  month: m.month,
  신규:   Math.round(m.users * 0.38),
  재방문: Math.round(m.users * 0.42),
  전환:   Math.round(m.users * 0.20),
}));

/* ─── Shared Tooltip Style ───────────────────────────────────────── */
const tooltipStyle = {
  contentStyle: {
    background: "#272320",
    border: "none",
    borderRadius: 10,
    boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
    color: "#f1efed",
    fontSize: 12,
    padding: "8px 12px",
  },
  labelStyle:   { color: "#9a9085", fontSize: 11, marginBottom: 4 },
  itemStyle:    { color: "#f1efed" },
  cursor:       { fill: "rgba(79,110,247,0.06)" },
};

const axisStyle = { tick: { fill: C.textMuted, fontSize: 11 }, axisLine: false, tickLine: false };

/* ─── Card Wrapper ───────────────────────────────────────────────── */
const ChartCard = ({ title, desc, badge, children, span2 }) => (
  <div
    className="card"
    style={span2 ? { gridColumn: "span 2" } : undefined}
  >
    <div className="card-header">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.125rem" }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontSize: "1rem",
            fontWeight: 700, color: "var(--color-text)", margin: 0,
          }}>{title}</h3>
          {badge && <span className={`badge badge-${badge.color}`}>{badge.label}</span>}
        </div>
        {desc && <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>{desc}</p>}
      </div>
    </div>
    <div className="card-body" style={{ paddingTop: "1.25rem" }}>
      {children}
    </div>
  </div>
);

/* ─── KPI Strip ──────────────────────────────────────────────────── */
const KPI_DATA = [
  { label: "총 매출",    value: "₩72.1M", delta: "+18.4%", up: true,  color: C.brand   },
  { label: "총 사용자",  value: "17,290", delta: "+12.1%", up: true,  color: C.success  },
  { label: "평균 전환율",value: "4.2%",   delta: "+0.8%",  up: true,  color: C.warning  },
  { label: "이탈률",     value: "53.1%",  delta: "-6.3%",  up: false, color: C.info     },
];

const KpiStrip = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
    {KPI_DATA.map((k) => (
      <div key={k.label} className="card card-sm" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: k.color, borderRadius: "12px 12px 0 0" }} />
        <div className="card-body" style={{ padding: "1rem 1.25rem" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.375rem" }}>{k.label}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--color-text)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            {k.value}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.375rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={k.up ? C.success : C.danger} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points={k.up ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
            </svg>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: k.up ? C.success : C.danger }}>{k.delta}</span>
            <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>전월 대비</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   Charts
   ══════════════════════════════════════════════════════════════════ */

/* ① 라인 차트 — 매출 / 원가 / 순이익 추이 */
const LineChartBlock = () => (
  <ChartCard
    title="월별 매출 추이"
    desc="Revenue · Cost · Profit — 12개월"
    badge={{ label: "LINE", color: "brand" }}
    span2
  >
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={MONTHLY} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
        <XAxis dataKey="month" {...axisStyle} />
        <YAxis {...axisStyle} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
        <Tooltip {...tooltipStyle} formatter={v => [`₩${v.toLocaleString()}만`, ""]} />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12, color: C.textSub }} />
        <ReferenceLine y={5000} stroke={C.brand} strokeDasharray="4 4" opacity={0.4} />
        <Line type="monotone" dataKey="revenue" name="매출" stroke={C.brand}   strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: C.brand }} />
        <Line type="monotone" dataKey="cost"    name="원가" stroke={C.danger}  strokeWidth={2}   dot={false} activeDot={{ r: 5, fill: C.danger }} strokeDasharray="5 3" />
        <Line type="monotone" dataKey="profit"  name="순이익" stroke={C.success} strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: C.success }} />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
);

/* ② 그룹 바 차트 — 카테고리별 분기 매출 */
const BarChartBlock = () => (
  <ChartCard
    title="카테고리별 분기 매출"
    desc="Q1–Q4 그룹 비교"
    badge={{ label: "BAR", color: "success" }}
    span2
  >
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={CATEGORY} margin={{ top: 4, right: 16, left: 0, bottom: 0 }} barGap={3} barCategoryGap="28%">
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
        <XAxis dataKey="name" {...axisStyle} />
        <YAxis {...axisStyle} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
        <Tooltip {...tooltipStyle} formatter={v => [`₩${v.toLocaleString()}만`, ""]} />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12, color: C.textSub }} />
        <Bar dataKey="q1" name="Q1" fill={C.brand}   radius={[4,4,0,0]} />
        <Bar dataKey="q2" name="Q2" fill={C.info}    radius={[4,4,0,0]} />
        <Bar dataKey="q3" name="Q3" fill={C.success} radius={[4,4,0,0]} />
        <Bar dataKey="q4" name="Q4" fill={C.warning} radius={[4,4,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
);

/* ③ 스택 영역 차트 — 사용자 유형 */
const AreaChartBlock = () => (
  <ChartCard
    title="사용자 유입 유형"
    desc="신규 · 재방문 · 전환 — 누적 영역"
    badge={{ label: "AREA", color: "info" }}
    span2
  >
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={AREA_STACK} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
        <defs>
          {[["brand", C.brand], ["success", C.success], ["warning", C.warning]].map(([id, color]) => (
            <linearGradient key={id} id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={color} stopOpacity={0.35} />
              <stop offset="95%" stopColor={color} stopOpacity={0.03} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
        <XAxis dataKey="month" {...axisStyle} />
        <YAxis {...axisStyle} />
        <Tooltip {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12, color: C.textSub }} />
        <Area type="monotone" dataKey="신규"   stackId="1" stroke={C.brand}   strokeWidth={2} fill="url(#grad-brand)"   />
        <Area type="monotone" dataKey="재방문"  stackId="1" stroke={C.success} strokeWidth={2} fill="url(#grad-success)" />
        <Area type="monotone" dataKey="전환"   stackId="1" stroke={C.warning} strokeWidth={2} fill="url(#grad-warning)" />
      </AreaChart>
    </ResponsiveContainer>
  </ChartCard>
);

/* ④ 도넛 차트 — 트래픽 소스 */
const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.08) return null;
  const r = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={700}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DonutChartBlock = () => (
  <ChartCard
    title="트래픽 소스 비율"
    desc="채널별 유입 분포"
    badge={{ label: "PIE", color: "warning" }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <ResponsiveContainer width="55%" height={200}>
        <PieChart>
          <Pie
            data={DONUT} cx="50%" cy="50%"
            innerRadius={52} outerRadius={88}
            paddingAngle={3} dataKey="value"
            labelLine={false} label={renderCustomLabel}
          >
            {DONUT.map((d, i) => <Cell key={i} fill={d.color} stroke="none" />)}
          </Pie>
          <Tooltip
            contentStyle={tooltipStyle.contentStyle}
            formatter={v => [`${v}%`, ""]}
          />
        </PieChart>
      </ResponsiveContainer>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {DONUT.map((d) => (
          <div key={d.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: d.color, flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", color: "var(--color-text-sub)" }}>{d.name}</span>
            </div>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text)", fontVariantNumeric: "tabular-nums" }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  </ChartCard>
);

/* ⑤ 레이더 차트 — 성과 비교 */
const RadarChartBlock = () => (
  <ChartCard
    title="성과 지표 비교"
    desc="자사 vs 경쟁사 — 6개 항목"
    badge={{ label: "RADAR", color: "neutral" }}
  >
    <ResponsiveContainer width="100%" height={200}>
      <RadarChart cx="50%" cy="50%" outerRadius={80} data={RADAR_DATA}>
        <PolarGrid stroke={C.border} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: C.textMuted, fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar name="자사" dataKey="A" stroke={C.brand}   fill={C.brand}   fillOpacity={0.18} strokeWidth={2} />
        <Radar name="경쟁사" dataKey="B" stroke={C.danger} fill={C.danger} fillOpacity={0.12} strokeWidth={2} />
        <Legend wrapperStyle={{ fontSize: 12, color: C.textSub }} />
        <Tooltip contentStyle={tooltipStyle.contentStyle} />
      </RadarChart>
    </ResponsiveContainer>
  </ChartCard>
);

/* ⑥ 복합 차트 — 매출 바 + 사용자 라인 */
const ComposedChartBlock = () => (
  <ChartCard
    title="매출 & 사용자 복합"
    desc="Bar(매출) + Line(사용자) 이중 Y축"
    badge={{ label: "COMPOSED", color: "brand" }}
    span2
  >
    <ResponsiveContainer width="100%" height={260}>
      <ComposedChart data={MONTHLY} margin={{ top: 4, right: 24, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={C.brand} stopOpacity={0.9} />
            <stop offset="100%" stopColor={C.info}  stopOpacity={0.7} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} vertical={false} />
        <XAxis dataKey="month" {...axisStyle} />
        <YAxis yAxisId="left"  {...axisStyle} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
        <YAxis yAxisId="right" orientation="right" {...axisStyle} />
        <Tooltip {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12, color: C.textSub }} />
        <Bar yAxisId="left" dataKey="revenue" name="매출(만원)" fill="url(#barGrad)" radius={[5,5,0,0]} />
        <Line yAxisId="right" type="monotone" dataKey="users" name="사용자" stroke={C.warning} strokeWidth={2.5} dot={{ r: 3, fill: C.warning }} activeDot={{ r: 6 }} />
      </ComposedChart>
    </ResponsiveContainer>
  </ChartCard>
);

/* ⑦ 스캐터 차트 — 분포 */
const ScatterChartBlock = () => (
  <ChartCard
    title="사용자 행동 분포"
    desc="체류시간 vs 페이지뷰 산점도"
    badge={{ label: "SCATTER", color: "info" }}
    span2
  >
    <ResponsiveContainer width="100%" height={240}>
      <ScatterChart margin={{ top: 4, right: 24, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={C.border} />
        <XAxis type="number" dataKey="x" name="체류시간(초)" {...axisStyle} label={{ value: "체류시간(초)", position: "insideBottom", offset: -2, fill: C.textMuted, fontSize: 11 }} />
        <YAxis type="number" dataKey="y" name="페이지뷰" {...axisStyle} label={{ value: "페이지뷰", angle: -90, position: "insideLeft", fill: C.textMuted, fontSize: 11 }} />
        <Tooltip
          contentStyle={tooltipStyle.contentStyle}
          cursor={{ strokeDasharray: "4 4", stroke: C.border }}
          formatter={(v, name) => [v, name]}
        />
        <Scatter name="세션" data={SCATTER_DATA} fill={C.brand} opacity={0.65} />
      </ScatterChart>
    </ResponsiveContainer>
  </ChartCard>
);

/* ⑧ 수평 바 차트 — 월별 순이익 */
const HBarChartBlock = () => (
  <ChartCard
    title="월별 순이익 랭킹"
    desc="수평 바 — 높은 순 정렬"
    badge={{ label: "HBAR", color: "success" }}
  >
    {(() => {
      const sorted = [...MONTHLY].sort((a, b) => b.profit - a.profit);
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sorted} layout="vertical" margin={{ top: 0, right: 24, left: 8, bottom: 0 }} barSize={14}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.border} horizontal={false} />
            <XAxis type="number" {...axisStyle} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
            <YAxis type="category" dataKey="month" {...axisStyle} width={36} />
            <Tooltip {...tooltipStyle} formatter={v => [`₩${v.toLocaleString()}만`, "순이익"]} />
            <Bar dataKey="profit" radius={[0,6,6,0]}>
              {sorted.map((_, i) => (
                <Cell key={i} fill={`rgba(79,110,247,${1 - i * 0.065})`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    })()}
  </ChartCard>
);

/* ══════════════════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════════════════ */
export default function ChartStylePage() {
  return (
    <div style={{ maxWidth: 1200 }}>

      {/* 페이지 헤더 */}
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 800,
          color: "var(--color-text)", marginBottom: "0.375rem", letterSpacing: "-0.03em",
        }}>
          Charts
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem" }}>
          Recharts 기반 — globals.css 디자인 시스템 연동 차트 모음
        </p>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.875rem", flexWrap: "wrap" }}>
          {["Line","Bar","Area","Pie/Donut","Radar","Composed","Scatter","Horizontal Bar"].map(t => (
            <span key={t} className="badge badge-neutral">{t}</span>
          ))}
        </div>
      </div>

      {/* KPI */}
      <KpiStrip />

      {/* 차트 그리드 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
        <LineChartBlock />
        <BarChartBlock />
        <AreaChartBlock />
        <DonutChartBlock />
        <RadarChartBlock />
        <HBarChartBlock />
        <ComposedChartBlock />
        <ScatterChartBlock />
      </div>

      {/* 푸터 노트 */}
      <div className="alert alert-info" style={{ marginTop: "1.5rem" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <span style={{ fontSize: "0.8125rem" }}>
          이 페이지는 <strong>recharts</strong> 라이브러리를 사용합니다. 설치: <code style={{ fontFamily: "var(--font-mono)", background: "rgba(0,0,0,0.06)", borderRadius: 4, padding: "1px 5px" }}>npm install recharts</code>
        </span>
      </div>
    </div>
  );
}