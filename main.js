// Preloader
const preloader = document.querySelector(".preloader");
// class -> preloader
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 3000);
});

// تغییر استایل نوبار هنگام اسکرول
// class -> .navbar
// class -> add > scrolled
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// منوی موبایل باز بستن
// var -> mobileMenu > .mobile-menu
// var -> navLinks > .nav-links
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
// class > active
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// بستن منوی موبایل هنگام کلیک خارج از منو
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
      navLinks.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  }
});
// بستن منوی موبایل هنگام تغییر سایز پنجره
window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});
//برای اینکه وقتی روی لینک‌های داخل منو کلیک شد منو بسته شود
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});
