// app/(dashboard)/page.js
 
export default function DashboardPage() {
  return (
    <div style={{ maxWidth: 1200 }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "8px" }}>
        Dashboard
      </h1>
      <p style={{ color: "var(--color-text-muted)" }}>
        Welcome back! Here&apos;s what&apos;s happening today.
      </p>
    </div>
  );
}
 