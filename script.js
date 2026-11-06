document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Dark / Light Mode Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });

  // Scroll Animations
  const animatedElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));

  // Contact Form Validation
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    document.getElementById('form-success').textContent = '';

    if (nameInput.value.trim() === '') {
      document.getElementById('name-error').textContent = 'Name is required.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      document.getElementById('email-error').textContent = 'Enter a valid email address.';
      isValid = false;
    }

    if (messageInput.value.trim().length < 10) {
      document.getElementById('message-error').textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }

    if (isValid) {
      document.getElementById('form-success').textContent = 'Thank you! Your message has been sent.';
      form.reset();
    }
  });

});
                          
