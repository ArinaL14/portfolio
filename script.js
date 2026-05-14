// Fade-in projects on scroll
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

projects.forEach(project => observer.observe(project));

// Active nav link tracking via scroll position
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  let currentId = '';

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Subtle sidebar accent shift based on scroll position
const sidebar = document.querySelector('.sidebar');
const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
  const progress = window.scrollY / totalHeight;
  const hue = 10 + (progress * 20); // subtle warm shift
  sidebar.style.borderRightColor = `hsl(${hue}, 8%, 16%)`;
});
