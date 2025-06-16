/* 1. Custom cursor (skip if you don’t need it) */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate3d(${e.clientX - 9}px, ${e.clientY - 9}px, 0)`;
});

/* 2. Intersection Observer for fade‑in reveals */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach(el => observer.observe(el));

/* 3. Dynamic year in footer */
document.getElementById('year').textContent = new Date().getFullYear();
