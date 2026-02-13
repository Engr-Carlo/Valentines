/* ═══════════════════════════════════════════════════════
   FLOATING HEARTS PARTICLE SYSTEM
   Canvas-based ambient particles
   ═══════════════════════════════════════════════════════ */

(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h;
  const particles = [];
  const PARTICLE_COUNT = 35;
  const EMOJIS = ['💖', '💗', '💕', '💝', '✨', '🌸', '💫', '🦋', '♥'];
  const COLORS = [
    'rgba(255, 107, 157, 0.6)',
    'rgba(238, 58, 123, 0.5)',
    'rgba(255, 158, 192, 0.7)',
    'rgba(253, 121, 168, 0.6)',
    'rgba(255, 194, 219, 0.8)',
  ];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * h;
    }

    reset() {
      this.x = Math.random() * w;
      this.y = h + 20;
      this.size = Math.random() * 18 + 8;
      this.speedY = Math.random() * 0.6 + 0.2;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1;
      this.wobbleAmplitude = Math.random() * 30 + 10;
      this.wobbleSpeed = Math.random() * 0.02 + 0.01;
      this.wobbleOffset = Math.random() * Math.PI * 2;
      this.useEmoji = Math.random() > 0.5;
      this.emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    update(time) {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(time * this.wobbleSpeed + this.wobbleOffset) * 0.3;
      this.rotation += this.rotationSpeed;

      if (this.y < -30) this.reset();
      if (this.x < -30) this.x = w + 30;
      if (this.x > w + 30) this.x = -30;
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;

      if (this.useEmoji) {
        ctx.font = `${this.size}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.emoji, 0, 0);
      } else {
        // Draw a heart shape
        const s = this.size * 0.5;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.5, s * 0.3, 0, s * 1.2);
        ctx.bezierCurveTo(s * 1.5, s * 0.3, s, -s * 0.5, 0, s * 0.3);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function init() {
    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  let time = 0;
  function animate() {
    ctx.clearRect(0, 0, w, h);
    time++;
    particles.forEach((p) => {
      p.update(time);
      p.draw(ctx);
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  init();
  animate();
})();
