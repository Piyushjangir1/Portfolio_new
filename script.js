// script.js - Reveal on scroll, active nav, mailto handler

document.addEventListener('DOMContentLoaded', () => {
  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('show');
    });
  }, { threshold: 0.15 });

  reveals.forEach(r => revealObserver.observe(r));

  // set active nav link based on pathname
  const navLinks = document.querySelectorAll('.nav-links a');
  const path = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // contact form -> mailto composer
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#c-name').value.trim();
      const email = document.querySelector('#c-email').value.trim();
      const msg = document.querySelector('#c-message').value.trim();
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
      // use personal email as receiver (you can change)
      const to = 'piyushjangir2007@gmail.com';
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
      // open default mail client
      window.location.href = mailto;
    });
  }

  // smooth scrolling for internal links (some older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
