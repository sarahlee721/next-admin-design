"use client";

import { useState } from "react";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "1rem", fontWeight: 600,
        color: "var(--color-text-muted)",
        textTransform: "uppercase", letterSpacing: "0.08em",
        marginBottom: "1rem", paddingBottom: "0.5rem",
        borderBottom: "1px solid var(--color-border)",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

/* ── 아이콘 ── */
const IconSearch   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconUser     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconMail     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IconLock     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconEye      = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const IconEyeOff   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>;
const IconChevron  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const IconCalendar = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconCheck    = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

/* ── 커스텀 Checkbox ── */
function Checkbox({ checked, onChange, label, disabled }) {
  return (
    <label style={{
      display: "inline-flex", alignItems: "center", gap: "0.5rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      userSelect: "none",
    }}>
      <span
        onClick={() => !disabled && onChange(!checked)}
        className={`checkbox-box ${checked ? "checkbox-box--checked" : ""}`}
      >
        {checked && <IconCheck />}
      </span>
      <span style={{
        fontSize: "0.875rem",
        color: "var(--color-text)", // ← text-sub → text (더 밝게)
      }}>
        {label}
      </span>
    </label>
  );
}

/* ── 커스텀 Radio ── */
function Radio({ checked, onChange, label, name }) {
  return (
    <label style={{
      display: "inline-flex", alignItems: "center", gap: "0.5rem",
      cursor: "pointer", userSelect: "none",
    }}>
      <span
        onClick={onChange}
        style={{
          width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
          border: `2px solid ${checked ? "var(--color-brand)" : "var(--color-border-strong)"}`,
          background: "var(--color-surface)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all .15s",
        }}
      >
        {checked && (
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "var(--color-brand)",
            transition: "all .15s",
          }}/>
        )}
      </span>
      <span style={{ fontSize: "0.875rem", color: "var(--color-text-sub)" }}>{label}</span>
    </label>
  );
}

/* ── 커스텀 Toggle ── */
function Toggle({ checked, onChange, label }) {
  return (
    <label style={{ display:"flex", alignItems:"center", gap:"0.625rem", cursor:"pointer", userSelect:"none" }}>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`toggle ${checked ? "active" : ""}`}
        style={{ border: "none", flexShrink: 0 }}
      >
        <span className="toggle-thumb"/>
      </button>
      {label && <span style={{ fontSize:"0.875rem", color:"var(--color-text-sub)" }}>{label}</span>}
    </label>
  );
}

/* ── 아이콘 Input 래퍼 ── */
function InputWithIcon({ icon, suffix, children }) {
  return (
    <div style={{ position:"relative" }}>
      {icon && (
        <span style={{
          position:"absolute", left:"0.875rem", top:"50%",
          transform:"translateY(-50%)", color:"var(--color-text-muted)",
          display:"flex", alignItems:"center", pointerEvents:"none",
        }}>
          {icon}
        </span>
      )}
      {children}
      {suffix && (
        <span style={{
          position:"absolute", right:"0.875rem", top:"50%",
          transform:"translateY(-50%)", color:"var(--color-text-muted)",
          display:"flex", alignItems:"center",
        }}>
          {suffix}
        </span>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */
export default function FormStylePage() {
  /* 상태 */
  const [showPw, setShowPw]         = useState(false);
  const [checks, setChecks]         = useState({ a: true, b: false, c: false });
  const [radio, setRadio]           = useState("designer");
  const [toggles, setToggles]       = useState({ notify: true, marketing: false, dark: false });
  const [range, setRange]           = useState(65);
  const [select, setSelect]         = useState("");
  const [tags, setTags]             = useState(["React", "Next.js"]);
  const [tagInput, setTagInput]     = useState("");

  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };
  const removeTag = (t) => setTags(tags.filter(x => x !== t));

  return (
    <div style={{ maxWidth: 760 }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily:"var(--font-display)", fontSize:"1.75rem", fontWeight:800, color:"var(--color-text)", marginBottom:"0.375rem", letterSpacing:"-0.03em" }}>
          Form
        </h1>
        <p>globals.css 기반 폼 컴포넌트 모음</p>
      </div>

      {/* ══ 1. Input 크기 ══ */}
      <Section title="Input — Size">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          <div>
            <label className="label">Small</label>
            <input className="input input-sm" placeholder="input-sm" />
          </div>
          <div>
            <label className="label">Default</label>
            <input className="input" placeholder="input (default)" />
          </div>
          <div>
            <label className="label">Large</label>
            <input className="input input-lg" placeholder="input-lg" />
          </div>
        </div>
      </Section>

      {/* ══ 2. Input 아이콘 ══ */}
      <Section title="Input — With Icon">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          <div>
            <label className="label">검색</label>
            <InputWithIcon icon={<IconSearch />}>
              <input className="input" placeholder="검색어를 입력하세요" style={{ paddingLeft:"2.25rem" }} />
            </InputWithIcon>
          </div>
          <div>
            <label className="label">이름</label>
            <InputWithIcon icon={<IconUser />}>
              <input className="input" placeholder="홍길동" style={{ paddingLeft:"2.25rem" }} />
            </InputWithIcon>
          </div>
          <div>
            <label className="label">이메일</label>
            <InputWithIcon icon={<IconMail />} suffix={<span style={{ fontSize:"0.75rem", color:"var(--color-text-muted)" }}>@company.com</span>}>
              <input className="input" placeholder="username" style={{ paddingLeft:"2.25rem", paddingRight:"7rem" }} />
            </InputWithIcon>
          </div>
          <div>
            <label className="label">비밀번호</label>
            <InputWithIcon
              icon={<IconLock />}
              suffix={
                <button type="button" onClick={() => setShowPw(v => !v)}
                  style={{ background:"none", border:"none", cursor:"pointer", color:"var(--color-text-muted)", display:"flex", padding:0 }}>
                  {showPw ? <IconEyeOff /> : <IconEye />}
                </button>
              }
            >
              <input className="input" type={showPw ? "text" : "password"} placeholder="비밀번호" style={{ paddingLeft:"2.25rem", paddingRight:"2.5rem" }} />
            </InputWithIcon>
          </div>
          <div>
            <label className="label">날짜</label>
            <InputWithIcon icon={<IconCalendar />}>
              <input className="input" type="date" style={{ paddingLeft:"2.25rem" }} />
            </InputWithIcon>
          </div>
        </div>
      </Section>

      {/* ══ 3. Input 상태 ══ */}
      <Section title="Input — State">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          <div>
            <label className="label">기본</label>
            <input className="input" placeholder="기본 상태" />
          </div>
          <div>
            <label className="label">비활성화</label>
            <input className="input" placeholder="비활성화 상태" disabled style={{ opacity:0.5, cursor:"not-allowed" }} />
          </div>
          <div>
            <label className="label">읽기 전용</label>
            <input className="input" value="읽기 전용 값" readOnly style={{ cursor:"default" }} />
          </div>
          <div>
            <label className="label">에러</label>
            <input className="input input-error" placeholder="이메일 형식이 올바르지 않아요" />
            <span className="input-error-msg">올바른 이메일 주소를 입력해주세요.</span>
          </div>
          <div>
            <label className="label">힌트</label>
            <input className="input" placeholder="아이디" />
            <span className="input-hint">영문, 숫자 조합 6자 이상</span>
          </div>
        </div>
      </Section>

      {/* ══ 4. Textarea ══ */}
      <Section title="Textarea">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          <div>
            <label className="label">기본</label>
            <textarea className="textarea" placeholder="내용을 입력하세요..." />
          </div>
          <div>
            <label className="label">글자 수 표시</label>
            <div style={{ position:"relative" }}>
              <TextareaWithCount max={200} />
            </div>
          </div>
          <div>
            <label className="label">에러</label>
            <textarea className="textarea input-error" placeholder="내용 입력..." />
            <span className="input-error-msg">필수 입력 항목입니다.</span>
          </div>
        </div>
      </Section>

      {/* ══ 5. Select ══ */}
      <Section title="Select">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
          <div>
            <label className="label">기본 Select</label>
            <div style={{ position:"relative" }}>
              <select className="select" value={select} onChange={e => setSelect(e.target.value)}>
                <option value="">직무를 선택하세요</option>
                <option value="fe">프론트엔드 개발</option>
                <option value="be">백엔드 개발</option>
                <option value="design">디자인</option>
                <option value="pm">기획</option>
                <option value="data">데이터 분석</option>
              </select>
              <span style={{ position:"absolute", right:"0.875rem", top:"50%", transform:"translateY(-50%)", color:"var(--color-text-muted)", pointerEvents:"none" }}>
                <IconChevron />
              </span>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
            <div>
              <label className="label">국가</label>
              <div style={{ position:"relative" }}>
                <select className="select">
                  <option>🇰🇷 대한민국</option>
                  <option>🇺🇸 미국</option>
                  <option>🇯🇵 일본</option>
                </select>
                <span style={{ position:"absolute", right:"0.875rem", top:"50%", transform:"translateY(-50%)", color:"var(--color-text-muted)", pointerEvents:"none" }}><IconChevron /></span>
              </div>
            </div>
            <div>
              <label className="label">언어</label>
              <div style={{ position:"relative" }}>
                <select className="select">
                  <option>한국어</option>
                  <option>English</option>
                  <option>日本語</option>
                </select>
                <span style={{ position:"absolute", right:"0.875rem", top:"50%", transform:"translateY(-50%)", color:"var(--color-text-muted)", pointerEvents:"none" }}><IconChevron /></span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══ 6. Checkbox ══ */}
      <Section title="Checkbox">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.625rem" }}>
          <Checkbox checked={checks.a} onChange={v => setChecks(p => ({...p, a:v}))} label="이용약관에 동의합니다 (필수)" />
          <Checkbox checked={checks.b} onChange={v => setChecks(p => ({...p, b:v}))} label="개인정보 수집에 동의합니다 (필수)" />
          <Checkbox checked={checks.c} onChange={v => setChecks(p => ({...p, c:v}))} label="마케팅 정보 수신에 동의합니다 (선택)" />
          <Checkbox checked={false} onChange={() => {}} label="비활성화 항목" disabled />
        </div>
      </Section>

      {/* ══ 7. Radio ══ */}
      <Section title="Radio">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.625rem" }}>
          {[
            { value:"developer", label:"개발자" },
            { value:"designer",  label:"디자이너" },
            { value:"pm",        label:"기획자" },
            { value:"other",     label:"기타" },
          ].map(opt => (
            <Radio
              key={opt.value}
              checked={radio === opt.value}
              onChange={() => setRadio(opt.value)}
              label={opt.label}
            />
          ))}
        </div>
      </Section>

      {/* ══ 8. Toggle ══ */}
      <Section title="Toggle">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.875rem" }}>
          <Toggle checked={toggles.notify}    onChange={v => setToggles(p=>({...p,notify:v}))}    label="알림 받기" />
          <Toggle checked={toggles.marketing} onChange={v => setToggles(p=>({...p,marketing:v}))} label="마케팅 이메일 수신" />
          <Toggle checked={toggles.dark}      onChange={v => setToggles(p=>({...p,dark:v}))}      label="다크 모드" />
        </div>
      </Section>

      {/* ══ 9. Range ══ */}
      <Section title="Range Slider">
        <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem" }}>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.8125rem", color:"var(--color-text-muted)" }}>
            <span>예산 범위</span>
            <span style={{ fontWeight:600, color:"var(--color-brand)" }}>{range}%</span>
          </div>
          <input
            type="range" min={0} max={100} value={range}
            onChange={e => setRange(+e.target.value)}
            style={{ width:"100%", accentColor:"var(--color-brand)", cursor:"pointer", height:4 }}
          />
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.75rem", color:"var(--color-text-muted)" }}>
            <span>0%</span><span>50%</span><span>100%</span>
          </div>
        </div>
      </Section>

      {/* ══ 10. Tag Input ══ */}
      <Section title="Tag Input">
        <div>
          <label className="label">기술 스택</label>
          <div style={{
            display:"flex", flexWrap:"wrap", gap:"0.375rem", alignItems:"center",
            border:"1px solid var(--color-border-strong)", borderRadius:10,
            padding:"0.375rem 0.75rem", background:"var(--color-surface)",
            minHeight: 44,
            transition:"border-color .15s",
          }}
            onClick={e => e.currentTarget.querySelector("input")?.focus()}
          >
            {tags.map(t => (
              <span key={t} style={{
                display:"inline-flex", alignItems:"center", gap:"0.25rem",
                padding:"2px 8px", borderRadius:20,
                background:"var(--color-brand-light)", color:"var(--color-brand)",
                fontSize:"0.8125rem", fontWeight:500,
              }}>
                {t}
                <button type="button" onClick={() => removeTag(t)}
                  style={{ background:"none", border:"none", cursor:"pointer", color:"inherit", padding:0, display:"flex", lineHeight:1, opacity:0.7 }}>
                  ×
                </button>
              </span>
            ))}
            <input
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              onKeyDown={addTag}
              placeholder={tags.length === 0 ? "태그 입력 후 Enter" : ""}
              style={{
                border:"none", outline:"none", background:"transparent",
                fontSize:"0.875rem", color:"var(--color-text)",
                flex:1, minWidth:80, padding:"2px 0",
                fontFamily:"var(--font-body)",
              }}
            />
          </div>
          <span className="input-hint">Enter를 눌러 태그를 추가하세요</span>
        </div>
      </Section>

      {/* ══ 11. 전체 폼 예시 ══ */}
      <Section title="Form Example — 프로필 설정">
        <div className="card">
          <div className="card-header">
            <span style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:"1rem", color:"var(--color-text)" }}>기본 정보</span>
          </div>
          <div className="card-body" style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>

            {/* 이름 / 닉네임 */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
              <div>
                <label className="label">이름</label>
                <InputWithIcon icon={<IconUser />}>
                  <input className="input" defaultValue="홍길동" style={{ paddingLeft:"2.25rem" }} />
                </InputWithIcon>
              </div>
              <div>
                <label className="label">닉네임</label>
                <input className="input" defaultValue="gildong" />
              </div>
            </div>

            {/* 이메일 */}
            <div>
              <label className="label">이메일</label>
              <InputWithIcon icon={<IconMail />}>
                <input className="input" type="email" defaultValue="hong@example.com" style={{ paddingLeft:"2.25rem" }} />
              </InputWithIcon>
            </div>

            {/* 직무 */}
            <div>
              <label className="label">직무</label>
              <div style={{ position:"relative" }}>
                <select className="select" defaultValue="fe">
                  <option value="fe">프론트엔드 개발</option>
                  <option value="be">백엔드 개발</option>
                  <option value="design">디자인</option>
                  <option value="pm">기획</option>
                </select>
                <span style={{ position:"absolute", right:"0.875rem", top:"50%", transform:"translateY(-50%)", color:"var(--color-text-muted)", pointerEvents:"none" }}><IconChevron /></span>
              </div>
            </div>

            {/* 자기소개 */}
            <div>
              <label className="label">자기소개</label>
              <textarea className="textarea" defaultValue="안녕하세요. 프론트엔드 개발자입니다." />
            </div>

            {/* 알림 설정 */}
            <div style={{ display:"flex", flexDirection:"column", gap:"0.625rem", padding:"1rem", borderRadius:12, background:"var(--color-bg-subtle)" }}>
              <span style={{ fontSize:"0.8125rem", fontWeight:600, color:"var(--color-text)", marginBottom:"0.25rem" }}>알림 설정</span>
              <Toggle checked={toggles.notify}    onChange={v => setToggles(p=>({...p,notify:v}))}    label="이메일 알림" />
              <Toggle checked={toggles.marketing} onChange={v => setToggles(p=>({...p,marketing:v}))} label="마케팅 수신" />
            </div>

          </div>
          <div className="card-footer">
            <button className="btn btn-secondary btn-md">취소</button>
            <button className="btn btn-primary btn-md">저장</button>
          </div>
        </div>
      </Section>

    </div>
  );
}

/* ── 글자 수 Textarea ── */
function TextareaWithCount({ max = 200 }) {
  const [val, setVal] = useState("");
  const over = val.length > max;
  return (
    <div>
      <textarea
        className={`textarea ${over ? "input-error" : ""}`}
        placeholder="200자 이내로 입력해주세요"
        value={val}
        onChange={e => setVal(e.target.value)}
      />
      <div style={{ display:"flex", justifyContent:"flex-end", marginTop:"0.25rem" }}>
        <span style={{ fontSize:"0.75rem", color: over ? "var(--color-danger)" : "var(--color-text-muted)" }}>
          {val.length} / {max}
        </span>
      </div>
    </div>
  );
}