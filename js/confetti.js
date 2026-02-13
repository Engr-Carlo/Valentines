/* ═══════════════════════════════════════════════════════
   CONFETTI CELEBRATION EFFECT
   Canvas-based confetti with hearts and shapes
   ═══════════════════════════════════════════════════════ */

const Confetti = (function () {
  let canvas, ctx;
  let pieces = [];
  let animationId = null;
  let running = false;

  const COLORS = [
    '#ff6b9d', '#ee3a7b', '#ff9ec0', '#fd79a8', '#fab1be',
    '#f9ca24', '#ff6348', '#ff4757', '#ff8a80', '#ffc2db',
    '#e84393', '#d63031', '#ff7675', '#ffb8d4'
  ];

  const SHAPES = ['circle', 'square', 'heart', 'star'];

  class Piece {
    constructor() {
      this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
      this.y = -20;
      this.size = Math.random() * 12 + 6;
      this.speedY = Math.random() * 3 + 2;
      this.speedX = (Math.random() - 0.5) * 4;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 10;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      this.gravity = 0.05;
      this.opacity = 1;
      this.fadeSpeed = Math.random() * 0.005 + 0.002;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.speedY += this.gravity;
      this.speedX *= 0.99;
      this.rotation += this.rotationSpeed;
      this.opacity -= this.fadeSpeed;
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;

      switch (this.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
          break;
        case 'heart':
          const s = this.size * 0.4;
          ctx.beginPath();
          ctx.moveTo(0, s * 0.3);
          ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.5, s * 0.3, 0, s * 1.2);
          ctx.bezierCurveTo(s * 1.5, s * 0.3, s, -s * 0.5, 0, s * 0.3);
          ctx.fill();
          break;
        case 'star':
          this.drawStar(ctx, 0, 0, 5, this.size / 2, this.size / 4);
          break;
      }

      ctx.restore();
    }

    drawStar(ctx, cx, cy, spikes, outerR, innerR) {
      let rot = (Math.PI / 2) * 3;
      const step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerR);
      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
        rot += step;
        ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
        rot += step;
      }
      ctx.closePath();
      ctx.fill();
    }
  }

  function init() {
    canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
  }

  function animate() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces = pieces.filter((p) => p.opacity > 0 && p.y < canvas.height + 50);
    pieces.forEach((p) => {
      p.update();
      p.draw(ctx);
    });
    if (pieces.length > 0) {
      animationId = requestAnimationFrame(animate);
    } else {
      running = false;
    }
  }

  function burst(count = 100) {
    if (!canvas) init();
    for (let i = 0; i < count; i++) {
      const p = new Piece();
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height * 0.3;
      p.speedY = Math.random() * 2 + 1;
      p.speedX = (Math.random() - 0.5) * 8;
      pieces.push(p);
    }
    if (!running) {
      running = true;
      animate();
    }
  }

  function celebration() {
    burst(80);
    setTimeout(() => burst(60), 400);
    setTimeout(() => burst(50), 800);
    setTimeout(() => burst(40), 1200);
    setTimeout(() => burst(30), 1600);
  }

  function stop() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    pieces = [];
    running = false;
    if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return { init, burst, celebration, stop };
})();
