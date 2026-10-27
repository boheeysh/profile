// 프로필 이메일 (예시 주소)
const EMAIL = "boheeysh@naver.com";

const header = document.querySelector(".site-header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelectorAll(".nav-link");

/* ---------- 1. 메뉴 클릭 시 해당 영역으로 이동 ---------- */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
  window.scrollTo({ top: id === "home" ? 0 : top, behavior: "smooth" });
  history.replaceState(null, "", "#" + id);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href").slice(1);
    if (!id) return;
    event.preventDefault();
    scrollToSection(id);
    closeMenu();
  });
});

// 스크롤 위치에 따라 현재 메뉴 강조
function setActive(id) {
  navLinks.forEach((link) => {
    const active = link.dataset.section === id;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

const sections = [...navLinks].map((link) => document.getElementById(link.dataset.section));

function updateActiveOnScroll() {
  const offset = header.offsetHeight + window.innerHeight * 0.3;
  let current = sections[0].id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= offset) current = section.id;
  });
  // 페이지 맨 아래에 도달하면 마지막 섹션 강조
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
    current = sections[sections.length - 1].id;
  }
  setActive(current);
}

window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
updateActiveOnScroll();

/* ---------- 모바일 햄버거 메뉴 ---------- */
function closeMenu() {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "메뉴 열기");
  menuToggle.querySelector(".material-symbols-outlined").textContent = "menu";
}

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  menuToggle.querySelector(".material-symbols-outlined").textContent = open ? "close" : "menu";
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) closeMenu();
});

/* ---------- 2. 프로젝트 카드 클릭 시 관련 링크로 이동 ---------- */
document.querySelectorAll(".project-card").forEach((card) => {
  const open = () => window.open(card.dataset.href, "_blank", "noopener");

  card.addEventListener("click", (event) => {
    // 카드 안의 '영상 보기' / '상세 보기' 링크는 각자의 주소로 이동
    if (event.target.closest("a")) return;
    open();
  });

  card.addEventListener("keydown", (event) => {
    if (event.target !== card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

/* ---------- 3. 이메일 클릭 시 메일 작성창 열기 ---------- */
// 이메일 링크는 mailto: 로 기본 메일 앱을 엽니다 (index.html 참고).
// 문의 폼도 입력한 내용을 채운 메일 작성창을 엽니다.
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = event.target.elements;
  const name = fields.name.value.trim();
  const from = fields.email.value.trim();
  const message = fields.message.value.trim();

  const subject = `[포트폴리오 문의] ${name}님의 메시지`;
  const body = `${message}\n\n---\n보낸 사람: ${name}\n회신 주소: ${from}`;

  window.location.href =
    `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* ---------- 기타 ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
