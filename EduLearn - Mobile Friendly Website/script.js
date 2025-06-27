// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('nav ul');
if (navToggle && navUl) {
  navToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });
}

// Theme toggle with localStorage
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      themeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
}

// Newsletter form submission demo
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    newsletterForm.reset();
  });
}

// Course category filter
const filterButtons = document.querySelectorAll('.course-categories button');
const courses = document.querySelectorAll('.course');
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    courses.forEach((course) => {
      if (filter === 'All' || course.getAttribute('data-category') === filter) {
        course.style.display = '';
      } else {
        course.style.display = 'none';
      }
    });
    // Highlight active button
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
