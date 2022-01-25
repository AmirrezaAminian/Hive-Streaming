"use strict";

// Sticky navbar menu when first section reaches
const header = document.querySelector(".header");
const navMenuContainer = document.querySelector(".sidebar");
const navbarHeight = navMenuContainer.getBoundingClientRect().height;
const navModals = document.querySelectorAll(".sidebar--has--content");

const stickyNavbar = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navMenuContainer.classList.add("sidebar--sticky");
    navModals.forEach((modal) => (modal.style.border = "1px solid #444"));
  } else {
    navMenuContainer.classList.remove("sidebar--sticky");
    navModals.forEach((modal) => (modal.style.border = "none"));
  }
};

const showCaseOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${navbarHeight}px`,
};

const showCaseObserver = new IntersectionObserver(stickyNavbar, showCaseOption);

showCaseObserver.observe(header);
