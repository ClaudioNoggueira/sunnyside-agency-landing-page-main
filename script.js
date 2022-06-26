const mobileNavButtonEl = document.querySelector(".mobile-nav-button");
mobileNavButtonEl.addEventListener(`click`, () => {
  const headerEl = document.querySelector("header");
  headerEl.classList.toggle("nav-open");
});
