// Lightbox for case study images
const overlay = document.createElement('div');
overlay.classList.add('lightbox-overlay');
const lightboxImg = document.createElement('img');
overlay.appendChild(lightboxImg);
document.body.appendChild(overlay);

// Open lightbox on image click
const clickableImages = document.querySelectorAll('.cs-finding-visual img, .cs-figure img');
clickableImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    overlay.classList.add('active');
  });
});

// Close on click anywhere on overlay
overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.classList.remove('active');
  }
});
