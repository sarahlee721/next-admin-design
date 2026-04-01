// app/(auth)/login/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const [showPw, setShowPw]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm]       = useState({ id: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: 실제 API 연결 시 이 setTimeout 교체
    setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  const canSubmit = !loading && form.id && form.password;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes spin { to { transform: rotate(360deg); } }

        .login-wrap {
          display: flex;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── 왼쪽 패널 ── */
        .login-left {
          width: 45%;
          background: #2563EB;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .login-left-deco1 {
          position: absolute; bottom: -140px; right: -140px;
          width: 420px; height: 420px; border-radius: 50%;
          background: rgba(255,255,255,0.05); pointer-events: none;
        }
        .login-left-deco2 {
          position: absolute; top: -80px; left: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(255,255,255,0.04); pointer-events: none;
        }
        .login-logo-box {
          width: 100px; height: 100px; border-radius: 26px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255,255,255,0.25);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.75rem;
        }
        .login-company-name {
          font-family: 'Syne', sans-serif;
          font-size: 2.125rem; font-weight: 800;
          color: white; letter-spacing: -0.03em;
          margin-bottom: 0.5rem; line-height: 1.1;
          text-align: center;
        }
        .login-company-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.8125rem; letter-spacing: 0.08em;
          text-transform: uppercase; font-weight: 500;
          text-align: center;
        }

        /* ── 오른쪽 패널 ── */
        .login-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 2rem;
          background: #ffffff;
        }
        .login-form-inner {
          width: 100%;
          max-width: 360px;
        }
        .login-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.625rem; font-weight: 700;
          color: #111827; letter-spacing: -0.025em;
          margin-bottom: 0.375rem;
        }
        .login-subtitle {
          font-size: 0.875rem; color: #9CA3AF;
          margin-bottom: 2rem;
        }
        .login-label {
          display: block; font-size: 0.8125rem;
          font-weight: 500; color: #374151;
          margin-bottom: 0.375rem;
        }
        .login-input {
          width: 100%; height: 44px;
          padding: 0 0.875rem;
          border: 1.5px solid #E5E7EB; border-radius: 10px;
          font-size: 0.9rem; color: #111827;
          outline: none; transition: border-color .15s;
          font-family: inherit; background: #fff;
        }
        .login-input:focus { border-color: #2563EB; }
        .login-input--pw   { padding-right: 2.75rem; }

        .login-btn {
          width: 100%; height: 46px;
          border: none; border-radius: 10px;
          font-size: 0.9375rem; font-weight: 600;
          color: white; font-family: inherit;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: background .15s;
          margin-top: 1.5rem;
        }
        .login-btn--active   { background: #2563EB; cursor: pointer; }
        .login-btn--active:hover { background: #1D4ED8; }
        .login-btn--disabled { background: #BFDBFE; cursor: not-allowed; }

        .pw-toggle {
          position: absolute; right: 0.75rem; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; padding: 0;
          cursor: pointer; color: #9CA3AF;
          display: flex; align-items: center;
        }

        /* ── 모바일: 왼쪽 패널 → 상단 배너로 전환 ── */
        @media (max-width: 640px) {
          .login-wrap     { flex-direction: column; min-height: 100vh; }

          .login-left {
            width: 100%; padding: 2rem 1.5rem;
            flex-direction: row; gap: 1rem;
            justify-content: center; align-items: center;
            min-height: unset;
          }
          .login-left-deco1,
          .login-left-deco2 { display: none; }

          .login-logo-box {
            width: 52px; height: 52px; border-radius: 14px;
            margin: 0; flex-shrink: 0;
          }
          .login-logo-box svg { width: 28px; height: 28px; }

          .login-company-name { font-size: 1.375rem; margin-bottom: 0; }
          .login-company-sub  { display: none; }

          .login-right  { align-items: flex-start; padding: 2rem 1.5rem; }
          .login-title  { font-size: 1.375rem; }
        }

        /* ── 태블릿: 왼쪽 패널 좁게 ── */
        @media (min-width: 641px) and (max-width: 1024px) {
          .login-left { width: 38%; padding: 2rem; }
          .login-company-name { font-size: 1.625rem; }
        }
      `}</style>

      <div className="login-wrap">

        {/* ── 왼쪽 (모바일에서 상단 배너) ── */}
        <div className="login-left">
          <div className="login-left-deco1"/>
          <div className="login-left-deco2"/>

          <div style={{ zIndex: 1, textAlign: "center" }}>
            {/* 로고 — <img src="/logo.png"> 로 교체 가능 */}
            <div className="login-logo-box">
              <svg width="54" height="54" viewBox="0 0 32 32" fill="none">
                <path d="M8 4C8 4 4 8 4 14C4 17.3 5.7 20.2 8.3 22L16 28L23.7 22C26.3 20.2 28 17.3 28 14C28 8 24 4 24 4C21 6 18.8 8.5 16 8.5C13.2 8.5 11 6 8 4Z" fill="white" fillOpacity="0.9"/>
                <path d="M16 8.5C18.8 8.5 21 6 24 4C24 4 26 6.5 27 10C24.5 11 21.5 11.5 16 11.5C10.5 11.5 7.5 11 5 10C6 6.5 8 4 8 4C11 6 13.2 8.5 16 8.5Z" fill="white"/>
              </svg>
            </div>
            {/* ↓ 회사명 교체 */}
            <h1 className="login-company-name">회사 이름</h1>
            <p className="login-company-sub">Management System</p>
          </div>
        </div>

        {/* ── 오른쪽: 폼 ── */}
        <div className="login-right">
          <div className="login-form-inner">
            <h2 className="login-title">로그인</h2>
            <p className="login-subtitle">계정 정보를 입력해주세요.</p>

            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>

              {/* 아이디 */}
              <div>
                <label className="login-label">아이디</label>
                <input
                  className="login-input"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={form.id}
                  onChange={e => setForm({ ...form, id: e.target.value })}
                  autoComplete="username"
                  required
                />
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="login-label">비밀번호</label>
                <div style={{ position:"relative" }}>
                  <input
                    className="login-input login-input--pw"
                    type={showPw ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="pw-toggle"
                    onClick={() => setShowPw(v => !v)}
                    aria-label={showPw ? "숨기기" : "보기"}
                  >
                    {showPw ? <IconEyeOff /> : <IconEye />}
                  </button>
                </div>
              </div>

              {/* 로그인 버튼 */}
              <button
                type="submit"
                disabled={!canSubmit}
                className={`login-btn ${canSubmit ? "login-btn--active" : "login-btn--disabled"}`}
              >
                {loading ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                      style={{ animation:"spin .8s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    로그인 중...
                  </>
                ) : "로그인"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </>
  );
}