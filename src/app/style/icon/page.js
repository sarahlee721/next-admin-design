 "use client";

import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   아이콘 정의
   ═══════════════════════════════════════════════════════════════ */
const ICONS = {
  "Navigation": [
    { name: "Home",        svg: <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>, extra: <polyline points="9 21 9 12 15 12 15 21"/> },
    { name: "Menu",        svg: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></> },
    { name: "ChevronRight",svg: <polyline points="9 18 15 12 9 6"/> },
    { name: "ChevronLeft", svg: <polyline points="15 18 9 12 15 6"/> },
    { name: "ChevronDown", svg: <polyline points="6 9 12 15 18 9"/> },
    { name: "ChevronUp",   svg: <polyline points="18 15 12 9 6 15"/> },
    { name: "ArrowRight",  svg: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></> },
    { name: "ArrowLeft",   svg: <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></> },
    { name: "ArrowUp",     svg: <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></> },
    { name: "ArrowDown",   svg: <><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></> },
    { name: "ExternalLink",svg: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></> },
    { name: "MoreHorizontal", svg: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></> },
    { name: "MoreVertical",svg: <><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></> },
  ],
  "Actions": [
    { name: "Plus",        svg: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></> },
    { name: "Minus",       svg: <line x1="5" y1="12" x2="19" y2="12"/> },
    { name: "X",           svg: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> },
    { name: "Check",       svg: <polyline points="20 6 9 17 4 12"/> },
    { name: "Search",      svg: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></> },
    { name: "Edit",        svg: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></> },
    { name: "Trash",       svg: <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></> },
    { name: "Copy",        svg: <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></> },
    { name: "Download",    svg: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></> },
    { name: "Upload",      svg: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></> },
    { name: "Share",       svg: <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></> },
    { name: "Filter",      svg: <><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></> },
    { name: "Send",        svg: <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></> },
    { name: "RefreshCw",   svg: <><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></> },
  ],
  "Status & Feedback": [
    { name: "Info",        svg: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></> },
    { name: "AlertCircle", svg: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></> },
    { name: "AlertTriangle",svg:<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></> },
    { name: "CheckCircle", svg: <><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></> },
    { name: "XCircle",     svg: <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></> },
    { name: "Star",        svg: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> },
    { name: "Heart",       svg: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/> },
    { name: "Bookmark",    svg: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/> },
    { name: "Bell",        svg: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></> },
    { name: "Eye",         svg: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></> },
    { name: "EyeOff",      svg: <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></> },
    { name: "Lock",        svg: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></> },
    { name: "Unlock",      svg: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></> },
  ],
  "Media": [
    { name: "Image",       svg: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></> },
    { name: "Video",       svg: <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></> },
    { name: "Music",       svg: <><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></> },
    { name: "Mic",         svg: <><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></> },
    { name: "Camera",      svg: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></> },
    { name: "Play",        svg: <polygon points="5 3 19 12 5 21 5 3"/> },
    { name: "Pause",       svg: <><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></> },
    { name: "Volume2",     svg: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></> },
  ],
  "Files & Data": [
    { name: "File",        svg: <><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></> },
    { name: "FileText",    svg: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></> },
    { name: "Folder",      svg: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/> },
    { name: "Database",    svg: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></> },
    { name: "BarChart",    svg: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></> },
    { name: "PieChart",    svg: <><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></> },
    { name: "TrendingUp",  svg: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></> },
    { name: "Table",       svg: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="9" x2="9" y2="21"/><line x1="15" y1="9" x2="15" y2="21"/></> },
  ],
  "Users & People": [
    { name: "User",        svg: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
    { name: "Users",       svg: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
    { name: "UserPlus",    svg: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></> },
    { name: "UserCheck",   svg: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></> },
    { name: "UserX",       svg: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="23" y2="14"/><line x1="23" y1="8" x2="17" y2="14"/></> },
    { name: "Mail",        svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></> },
    { name: "MessageSquare",svg:<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></> },
    { name: "Phone",       svg: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/> },
  ],
  "System & Settings": [
    { name: "Settings",    svg: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></> },
    { name: "Sliders",     svg: <><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></> },
    { name: "Globe",       svg: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></> },
    { name: "Wifi",        svg: <><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></> },
    { name: "Cloud",       svg: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/> },
    { name: "Server",      svg: <><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></> },
    { name: "Code",        svg: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></> },
    { name: "Terminal",    svg: <><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></> },
    { name: "Package",     svg: <><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></> },
    { name: "Key",         svg: <><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></> },
    { name: "Tag",         svg: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></> },
    { name: "Layout",      svg: <><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></> },
  ],
};

/* ── Icon 렌더 ── */
function Icon({ svg, extra, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {svg}
      {extra}
    </svg>
  );
}

/* ── Icon Card ── */
function IconCard({ name, svg, extra, size, copied, onCopy }) {
  return (
    <div
      onClick={() => onCopy(name)}
      title={name}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "16px 8px",
        borderRadius: "12px",
        border: "1px solid var(--color-border)",
        background: copied ? "var(--color-brand-light)" : "var(--color-surface)",
        color: copied ? "var(--color-brand)" : "var(--color-text-sub)",
        cursor: "pointer",
        transition: "all 0.15s",
        width: "90px",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        if (!copied) {
          e.currentTarget.style.background = "var(--color-bg-subtle)";
          e.currentTarget.style.borderColor = "var(--color-brand)";
          e.currentTarget.style.color = "var(--color-brand)";
        }
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          e.currentTarget.style.background = "var(--color-surface)";
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.color = "var(--color-text-sub)";
        }
      }}
    >
      <Icon svg={svg} extra={extra} size={size} />
      <span style={{
        fontSize: "0.65rem",
        textAlign: "center",
        lineHeight: 1.3,
        color: copied ? "var(--color-brand)" : "var(--color-text-muted)",
        fontFamily: "var(--font-mono)",
        wordBreak: "break-all",
      }}>
        {copied ? "✓ 복사됨" : name}
      </span>
    </div>
  );
}

/* ── Page ── */
export default function IconDemoPage() {
  const [copied, setCopied]   = useState(null);
  const [size, setSize]       = useState(20);
  const [search, setSearch]   = useState("");

  const handleCopy = (name) => {
    const svgStr = `<${name} />`;
    navigator.clipboard?.writeText(svgStr);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  const filtered = search.trim().toLowerCase();

  return (
    <div style={{ maxWidth: "960px" }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Icons</h1>
        <p>Stroke 기반 SVG 아이콘 모음입니다. 클릭하면 이름이 복사됩니다.</p>
      </div>

      {/* 툴바 */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {/* 검색 */}
        <input
          className="input"
          placeholder="아이콘 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: "240px" }}
        />

        {/* 사이즈 토글 */}
        <div style={{ display: "inline-flex", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--color-border-strong)" }}>
          {[16, 20, 24, 32].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className="btn btn-ghost btn-sm"
              style={{
                borderRadius: 0,
                borderRight: s !== 32 ? "1px solid var(--color-border-strong)" : "none",
                background: size === s ? "var(--color-brand-light)" : undefined,
                color: size === s ? "var(--color-brand)" : undefined,
                fontWeight: size === s ? 600 : undefined,
                fontFamily: "var(--font-mono)",
                minWidth: "44px",
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
          총 {Object.values(ICONS).flat().filter(ic => !filtered || ic.name.toLowerCase().includes(filtered)).length}개
        </span>
      </div>

      {/* 카테고리별 아이콘 */}
      {Object.entries(ICONS).map(([category, icons]) => {
        const filteredIcons = icons.filter(ic => !filtered || ic.name.toLowerCase().includes(filtered));
        if (filteredIcons.length === 0) return null;
        return (
          <div key={category} style={{ marginBottom: "2.5rem" }}>
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
              {category}
              <span style={{ marginLeft: "8px", fontSize: "0.75rem", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
                ({filteredIcons.length})
              </span>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {filteredIcons.map((icon) => (
                <IconCard
                  key={icon.name}
                  {...icon}
                  size={size}
                  copied={copied === icon.name}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}