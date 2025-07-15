// script.js | PrimeMathPrep | Minimal JS for UI/UX

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form validation (no backend)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('input, textarea').forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ff006e';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });
      if (valid) {
        form.reset();
        alert('Thank you! Your message has been received.');
      }
    });
  }
});
