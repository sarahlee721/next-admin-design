"use client";

import { useState } from "react";

/* ─── 닫기 아이콘 ── */
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconAlert = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const IconTrash = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ─── Modal 컴포넌트 ── */
function Modal({ open, onClose, size = "modal-md", children }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className={`modal ${size}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

/* ─── 데모 섹션 래퍼 ── */
function DemoSection({ title, children }) {
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Page ── */
export default function ModalDemoPage() {
  const [modal, setModal] = useState(null);

  const open  = (id) => setModal(id);
  const close = ()   => setModal(null);

  return (
    <div style={{ maxWidth: "860px" }}>

      {/* 헤더 */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>
          Modal
        </h1>
        <p>globals.css의 <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", background: "var(--color-bg-subtle)", padding: "2px 6px", borderRadius: "4px" }}>.modal</code> 클래스 데모입니다.</p>
      </div>

      {/* ── 사이즈 ── */}
      <DemoSection title="Size">
        <button className="btn btn-secondary btn-md" onClick={() => open("sm")}>Small</button>
        <button className="btn btn-secondary btn-md" onClick={() => open("md")}>Medium (default)</button>
        <button className="btn btn-secondary btn-md" onClick={() => open("lg")}>Large</button>
        <button className="btn btn-secondary btn-md" onClick={() => open("xl")}>XL</button>
      </DemoSection>

      {/* ── 용도별 ── */}
      <DemoSection title="Examples">
        <button className="btn btn-primary btn-md" onClick={() => open("confirm")}>확인 다이얼로그</button>
        <button className="btn btn-danger btn-md"  onClick={() => open("delete")}>삭제 확인</button>
        <button className="btn btn-secondary btn-md" onClick={() => open("form")}>폼 입력</button>
        <button className="btn btn-secondary btn-md" onClick={() => open("success")}>성공 메시지</button>
      </DemoSection>

      {/* ════════════════════════════════
          모달들
          ════════════════════════════════ */}

      {/* sm */}
      <Modal open={modal === "sm"} onClose={close} size="modal-sm">
        <div className="modal-header">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)" }}>Small Modal</div>
            <p style={{ fontSize: "0.875rem", marginTop: "2px" }}>modal-sm · max-w-sm</p>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={close}><IconX /></button>
        </div>
        <div className="modal-body">
          <p>작은 사이즈 모달입니다. 간단한 메시지나 단일 액션에 적합해요.</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary btn-md" onClick={close}>닫기</button>
        </div>
      </Modal>

      {/* md */}
      <Modal open={modal === "md"} onClose={close} size="modal-md">
        <div className="modal-header">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)" }}>Medium Modal</div>
            <p style={{ fontSize: "0.875rem", marginTop: "2px" }}>modal-md · max-w-md (기본값)</p>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={close}><IconX /></button>
        </div>
        <div className="modal-body">
          <p>기본 사이즈 모달입니다. 대부분의 일반적인 용도에 적합해요.</p>
          <div style={{ marginTop: "1rem", padding: "1rem", borderRadius: "0.75rem", background: "var(--color-bg-subtle)" }}>
            <p style={{ fontSize: "0.875rem" }}>모달 내부에 다양한 콘텐츠를 자유롭게 넣을 수 있습니다.</p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary btn-md" onClick={close}>취소</button>
          <button className="btn btn-primary btn-md" onClick={close}>확인</button>
        </div>
      </Modal>

      {/* lg */}
      <Modal open={modal === "lg"} onClose={close} size="modal-lg">
        <div className="modal-header">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)" }}>Large Modal</div>
            <p style={{ fontSize: "0.875rem", marginTop: "2px" }}>modal-lg · max-w-2xl</p>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={close}><IconX /></button>
        </div>
        <div className="modal-body">
          <p>넓은 사이즈 모달입니다. 긴 텍스트나 목록, 복잡한 UI를 담기에 적합해요.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1rem" }}>
            {["항목 A", "항목 B", "항목 C", "항목 D"].map((v) => (
              <div key={v} className="card" style={{ padding: "1rem" }}>
                <div style={{ fontWeight: 600, color: "var(--color-text)", marginBottom: "4px" }}>{v}</div>
                <p style={{ fontSize: "0.875rem" }}>카드 형태의 콘텐츠 예시</p>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary btn-md" onClick={close}>취소</button>
          <button className="btn btn-primary btn-md" onClick={close}>저장</button>
        </div>
      </Modal>

      {/* xl */}
      <Modal open={modal === "xl"} onClose={close} size="modal-xl">
        <div className="modal-header">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)" }}>XL Modal</div>
            <p style={{ fontSize: "0.875rem", marginTop: "2px" }}>modal-xl · max-w-4xl</p>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={close}><IconX /></button>
        </div>
        <div className="modal-body">
          <p>가장 넓은 모달입니다. 테이블, 대시보드 등 넓은 공간이 필요한 콘텐츠에 사용하세요.</p>
          <div className="table-wrapper" style={{ marginTop: "1rem" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>역할</th>
                  <th>상태</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "김민준", role: "Admin", status: "활성", date: "2024-01-12" },
                  { name: "이서연", role: "Editor", status: "활성", date: "2024-02-03" },
                  { name: "박도윤", role: "Viewer", status: "비활성", date: "2024-03-21" },
                ].map((row) => (
                  <tr key={row.name}>
                    <td style={{ fontWeight: 500, color: "var(--color-text)" }}>{row.name}</td>
                    <td><span className="badge badge-brand">{row.role}</span></td>
                    <td>
                      <span className={`badge ${row.status === "활성" ? "badge-success" : "badge-neutral"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary btn-md" onClick={close}>닫기</button>
        </div>
      </Modal>

      {/* 확인 다이얼로그 */}
      <Modal open={modal === "confirm"} onClose={close} size="modal-sm">
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "var(--color-brand)" }}><IconAlert /></span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)" }}>
              변경사항 저장
            </div>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={close}><IconX /></button>
        </div>
        <div className="modal-body">
          <p>저장하지 않은 변경사항이 있습니다. 계속 진행하시겠습니까?</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary btn-md" onClick={close}>취소</button>
          <button className="btn btn-primary btn-md" onClick={close}>저장하고 계속</button>
        </div>
      </Modal>

      {/* 삭제 확인 */}
      <Modal open={modal === "delete"} onClose={close} size="modal-sm">
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#ef4444" }}><IconTrash /></span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)" }}>
              삭제 확인
            </div>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={close}><IconX /></button>
        </div>
        <div className="modal-body">
          <div className="alert alert-error">
            <span>이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.</span>
          </div>
          <p style={{ marginTop: "0.75rem" }}>정말로 <strong style={{ color: "var(--color-text)" }}>프로젝트 Alpha</strong>를 삭제하시겠습니까?</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary btn-md" onClick={close}>취소</button>
          <button className="btn btn-danger btn-md" onClick={close}>삭제</button>
        </div>
      </Modal>

      {/* 폼 입력 */}
      <Modal open={modal === "form"} onClose={close} size="modal-md">
        <div className="modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "var(--color-brand)" }}><IconUser /></span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--color-text)" }}>
              새 사용자 추가
            </div>
          </div>
          <button className="btn btn-ghost btn-icon btn-sm" onClick={close}><IconX /></button>
        </div>
        <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label className="label">이름</label>
            <input className="input" placeholder="홍길동" />
          </div>
          <div>
            <label className="label">이메일</label>
            <input className="input" type="email" placeholder="hong@example.com" />
            <span className="input-hint">로그인에 사용될 이메일 주소입니다.</span>
          </div>
          <div>
            <label className="label">역할</label>
            <select className="select">
              <option>Viewer</option>
              <option>Editor</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary btn-md" onClick={close}>취소</button>
          <button className="btn btn-primary btn-md" onClick={close}>사용자 추가</button>
        </div>
      </Modal>

      {/* 성공 */}
      <Modal open={modal === "success"} onClose={close} size="modal-sm">
        <div className="modal-body" style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "50%",
            background: "#dcfce7", color: "#16a34a",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 1rem",
          }}>
            <IconCheck />
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>
            저장 완료!
          </div>
          <p>변경사항이 성공적으로 저장되었습니다.</p>
        </div>
        <div className="modal-footer" style={{ justifyContent: "center" }}>
          <button className="btn btn-primary btn-md" onClick={close}>확인</button>
        </div>
      </Modal>

    </div>
  );
}