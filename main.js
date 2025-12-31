// ================= NAV MENU =================
const navLinks = document.getElementById("nav-links");
const menuBtn = document.querySelector(".menu_btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-3-line";
});

// Close menu on link click (mobile)
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.className = "ri-menu-3-line";
});


// ================= SCROLL REVEAL CONFIG =================
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  easing: "ease-in-out",
  reset: false,
};


// ================= HEADER =================
ScrollReveal().reveal(".header_image", scrollRevealOption);

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".header_btn", {
  ...scrollRevealOption,
  delay: 600,
});


// ================= ABOUT =================
ScrollReveal().reveal(".about_image", scrollRevealOption);

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".about_btn", {
  ...scrollRevealOption,
  delay: 600,
});


// ================= PROJECTS =================
ScrollReveal().reveal(".projects_card", {
  ...scrollRevealOption,
  interval: 300,
});


// ================= TIMELINE =================
ScrollReveal().reveal(".timeline_item", {
  ...scrollRevealOption,
  interval: 300,
});


// ================= CONTACT =================
ScrollReveal().reveal(".contact_container .logo", scrollRevealOption);

ScrollReveal().reveal(".contact_container .section_header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".contact_container .section_description", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".contact_socials a", {
  ...scrollRevealOption,
  interval: 200,
});

// ================= SCROLL BLOOM EFFECT =================
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.body.style.backgroundPosition =
    `center ${scrollY * 0.1}px`;
});

// ================= PETAL BURST ON HOVER =================
document.querySelectorAll(
  ".projects_card, .timeline_item, .btn"
).forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    for (let i = 0; i < 3; i++) {
      const burst = document.createElement("span");
      burst.classList.add("burst");

      burst.style.left = Math.random() * 80 + "%";
      burst.style.top = Math.random() * 80 + "%";

      item.appendChild(burst);

      setTimeout(() => burst.remove(), 1000);
    }
  });
});

// ================= REMOVE INTRO AFTER LOAD =================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".sakura_intro")?.remove();
  }, 3000);
});

// ================= PETALS GATHER NEAR PROJECTS =================
document.querySelectorAll(".projects_card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    for (let i = 0; i < 6; i++) {
      const petal = document.createElement("span");
      petal.className = "project_petal";

      petal.style.left = Math.random() * window.innerWidth + "px";
      petal.style.top = Math.random() * window.innerHeight + "px";

      document.body.appendChild(petal);

      const rect = card.getBoundingClientRect();
      petal.style.transform = `translate(
        ${rect.left + rect.width / 2 - window.innerWidth / 2}px,
        ${rect.top + rect.height / 2 - window.innerHeight / 2}px
      )`;

      setTimeout(() => petal.remove(), 2000);
    }
  });
});

// ================= MOUSE FOLLOW PETALS =================
const mousePetals = document.querySelector(".mouse_petals");

document.addEventListener("mousemove", (e) => {
  const petal = document.createElement("span");
  petal.className = "mouse_petal";

  petal.style.left = e.clientX + "px";
  petal.style.top = e.clientY + "px";

  mousePetals.appendChild(petal);

  setTimeout(() => petal.remove(), 2000);
});

// ================= THEME TOGGLE =================
const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  icon.className = isDark ? "ri-sun-line" : "ri-moon-line";
});
