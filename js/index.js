// ===== Typewriter (lightweight, no external dependency) =====
const change = document.querySelector("#change");
if (change) {
  const words = ["Game", "Web"];
  let w = 0;
  let i = 0;
  let deleting = false;
  const delay = 120; // typing speed
  const pause = 2000; // pause between words

  function typeTick() {
    const word = words[w];
    // prefer positive condition to avoid negated condition warnings
    if (deleting) {
      change.textContent = word.slice(0, i - 1);
      i--;
      if (i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
      }
    } else {
      change.textContent = word.slice(0, i + 1);
      i++;
      if (i === word.length) {
        // finished typing, pause then delete
        setTimeout(() => {
          deleting = true;
          setTimeout(typeTick, delay);
        }, pause);
        return;
      }
    }
    setTimeout(typeTick, delay);
  }

  // start
  typeTick();
}
// ===== Footer Jahr Auto-Update ===== \\
document.querySelector('.footer-right').textContent = `© ${new Date().getFullYear()} Dennis De Col | All rights reserved.`;

// ===== Burger-Menü =====
const navToggle = document.querySelector('.navbar-toggle');
const navEl = document.querySelector('.navbar');
if (navToggle && navEl) {
  navToggle.addEventListener('click', () => {
    const open = navEl.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Menü schließt sich, wenn man einen Link antippt
  navEl.querySelectorAll('.navbar-middle a').forEach((a) =>
      a.addEventListener('click', () => {
        navEl.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      })
  );
}