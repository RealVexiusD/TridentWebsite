const features = document.querySelectorAll('.feature');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;
  features.forEach(feature => {
    const top = feature.getBoundingClientRect().top;
    if (top < trigger) {
      feature.style.transform = 'translateY(0)';
      feature.style.opacity = '1';
    }
  });
});

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speedY: Math.random() * 0.5 + 0.2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,204,0,0.7)';
    ctx.fill();
    p.y -= p.speedY;
    if (p.y < 0) p.y = canvas.height;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

