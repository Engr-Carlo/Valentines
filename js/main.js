/* ═══════════════════════════════════════════════════════
   VALENTINE'S DAY — MAIN LOGIC
   All interactive features for the static website
   ═══════════════════════════════════════════════════════ */

// ─── CONFIGURATION ───
const CONFIG = {
  password: 'iloveyou',
  valentineDate: new Date('2026-02-14T00:00:00'),
  
  // ═══ PHOTO GALLERY ═══
  // Add your photos here! Put image files in the images/ folder
  // then list them below with captions
  photos: [
    // Example:
    { src: 'images/photo1.jpg', caption: '' },
    { src: 'images/photo2.jpg', caption: '' },
    { src: 'images/photo3.jpg', caption: '' },
    { src: 'images/photo4.jpg', caption: '' },
    { src: 'images/photo5.jpg', caption: '' },
    { src: 'images/photo6.jpg', caption: '' },
    { src: 'images/photo7.jpg', caption: '' },
    { src: 'images/photo8.jpg', caption: '' },
    { src: 'images/photo9.jpg', caption: '' },
    { src: 'images/photo10.jpg', caption: '' },
    { src: 'images/photo11.jpg', caption: '' },
    { src: 'images/photo12.jpg', caption: '' },
    { src: 'images/photo13.jpg', caption: '' },
    { src: 'images/photo14.jpg', caption: '' },
    { src: 'images/photo15.jpg', caption: '' },
    { src: 'images/photo16.jpg', caption: '' },
    { src: 'images/photo17.jpg', caption: '' },
    { src: 'images/photo18.jpg', caption: '' },
    { src: 'images/photo19.jpg', caption: '' },
    { src: 'images/photo20.jpg', caption: '' },
    { src: 'images/photo21.jpg', caption: '' },
    { src: 'images/photo22.jpg', caption: '' },
    { src: 'images/photo23.jpg', caption: '' },
    { src: 'images/photo24.jpg', caption: '' },

  ],

  // ═══ REASONS I LOVE YOU ═══
  reasons: [
    'Your smile makes my entire world light up ☀️',
    'The way you laugh at my terrible jokes 😂',
    'How you always know exactly what to say 💬',
    'Your kindness to everyone you meet 🤗',
    'The way you scrunch your nose when you\'re thinking 💭',
    'How passionate you are about the things you love 🔥',
    'Your incredible strength and resilience 💪',
    'The way you hold my hand like it\'s the most natural thing 🤝',
    'How you make ordinary moments feel extraordinary ✨',
    'Your beautiful eyes that I could get lost in forever 👀',
    'The way you care for the people around you 💗',
    'How you make me want to be a better person every day 🌟',
    'Your voice — it\'s my favorite sound in the world 🎵',
    'The way you fit perfectly in my arms 🫂',
    'Because you chose me, and I\'d choose you a million times over 💝',
  ],

  // ═══ LOVE LETTER ═══
  loveLetter: `My Dearest Love,

From the moment you came into my life, everything changed. Colors became more vivid. Music sounded sweeter. Even the simplest moments turned into treasures, just because you were there.

I want you to know that you are the most incredible person I have ever known. Your heart is pure gold, your spirit is unbreakable, and your love — your love is the greatest gift I have ever received.

Every day with you feels like a dream I never want to wake up from. You make me laugh until my stomach hurts, you comfort me when the world feels heavy, and you inspire me to reach for things I never thought possible.

I don't just love you — I adore you. I am in awe of you. I am grateful for you. And I promise you, for as long as I breathe, I will spend every day making sure you know just how special you are.

Happy Valentine's Day, my everything. 💕`,

  // ═══ SCRATCH CARD SURPRISES ═══
  surprises: [
    { emoji: '🍫', text: 'You deserve a chocolate date! I\'m treating you to your favorite dessert! 🍰' },
    { emoji: '💆‍♀️', text: 'A relaxing spa day, just for you! You deserve to be pampered, my queen! 👑' },
    { emoji: '🌹', text: '100 kisses today! I\'m starting right now! 😘😘😘' },
    { emoji: '🎬', text: 'Movie marathon night with cuddles! You pick every single movie! 🍿' },
    { emoji: '📸', text: 'A photoshoot date! Let\'s capture more beautiful memories together! 📷' },
    { emoji: '💌', text: 'I\'ll write you a new love letter every month this year! 365 days of love! ✉️' },
  ],

  // ═══ TIMELINE ═══
  // Customize these with your real dates!
  timeline: [
    { date: 'The Day We Met', emoji: '💫', title: 'Our Story Began', desc: 'The universe conspired to bring us together, and my life was never the same.' },
    { date: 'First Conversation', emoji: '💬', title: 'First Words', desc: 'From that first hello, I knew there was something magical about you.' },
    { date: 'First Date', emoji: '🌹', title: 'Our First Date', desc: 'Nervous, excited, and already falling — the best night of my life.' },
    { date: 'First "I Love You"', emoji: '💖', title: 'Three Magic Words', desc: 'The moment I said it, I knew it was the truest thing I\'d ever spoken.' },
    { date: 'February 14, 2026', emoji: '💝', title: 'This Valentine\'s Day', desc: 'Another year of loving you, and I fall deeper every single day.' },
  ],

  // ═══ I LOVE YOU IN LANGUAGES ═══
  languages: [
    { text: 'I Love You', lang: 'English' },
    { text: 'Mahal Kita', lang: 'Filipino' },
    { text: 'Je t\'aime', lang: 'French' },
    { text: '愛してる', lang: 'Japanese' },
    { text: '사랑해', lang: 'Korean' },
    { text: 'Te Amo', lang: 'Spanish' },
    { text: 'Ich liebe dich', lang: 'German' },
    { text: 'Ti amo', lang: 'Italian' },
    { text: 'Я тебя люблю', lang: 'Russian' },
    { text: '我爱你', lang: 'Chinese' },
    { text: 'أحبك', lang: 'Arabic' },
    { text: 'Σ\'αγαπώ', lang: 'Greek' },
    { text: 'Eu te amo', lang: 'Portuguese' },
    { text: 'Seni seviyorum', lang: 'Turkish' },
    { text: 'Ik hou van je', lang: 'Dutch' },
    { text: 'Kocham cię', lang: 'Polish' },
    { text: 'ฉันรักคุณ', lang: 'Thai' },
    { text: 'Anh yêu em', lang: 'Vietnamese' },
  ],

  // ─── "No" button messages ───
  noMessages: [
    'Are you sure? 🥺',
    'Please reconsider... 💔',
    'My heart is breaking... 😢',
    'I\'ll do anything! 😭',
    'Pretty please? 🙏',
    'I\'ll cry for real... 😿',
    'You can\'t catch me anyway! 🏃‍♂️',
    'Last chance to say yes! 💕',
    'I know you want to say yes! 😏',
    'The Yes button is right there! ➡️',
  ],

  // ═══ NEW FEATURES ═══

  // Spin Wheel Prizes
  wheelPrizes: [
    { emoji: '💝', text: '1000 hugs and kisses, redeemable anytime!', color: '#ff6b9d' },
    { emoji: '🍕', text: 'Pizza date night - any toppings you want!', color: '#fd79a8' },
    { emoji: '🎬', text: 'Movie marathon - you pick every single one!', color: '#fab1be' },
    { emoji: '🎮', text: 'Game night where I let you win! (maybe 😏)', color: '#ff9ec0' },
    { emoji: '🌅', text: 'Sunrise/sunset date at your favorite spot!', color: '#ffc2db' },
    { emoji: '💆‍♀️', text: 'Full spa day - you deserve to be pampered!', color: '#ffe8f0' },
    { emoji: '🎨', text: 'Art/craft date - let\'s create something together!', color: '#ff8a80' },
    { emoji: '🏖️', text: 'Beach/nature adventure - just us and the waves!', color: '#ff6348' },
  ],

  // Fortune Cookie Messages
  fortuneMessages: [
    'You are the most beautiful person in the world, inside and out. Never forget that! 💖',
    'Every moment with you is a gift I treasure. You make my life complete! 🎁',
    'You are my greatest blessing, my sweetest love, my everything! 💝',
    'Your smile lights up my entire world. You are absolutely gorgeous! 😍',
    'I fall more in love with you every single day. You are precious to me! 💕',
    'You deserve all the happiness in the world, and I promise to give you mine! ☀️',
    'You are loved beyond measure, cherished beyond words, and needed beyond belief! 💗',
    'In you, I\'ve found my soulmate, my best friend, my forever! 💫',
    'You are the answer to every prayer, the love of my life! 🙏',
    'With you, I am home. You are my safe place, my comfort, my joy! 🏡',
    'You are absolutely perfect just the way you are. I love everything about you! ✨',
    'My love for you grows stronger with each passing second! 💞',
  ],

  // Virtual Gift Box Surprises
  giftBoxes: [
    { emoji: '💝', text: 'A thousand kisses just for you! You deserve all the love in the world! 💋', color: '#ff6b9d' },
    { emoji: '🌹', text: 'You\'re more beautiful than any flower. You take my breath away! 😍', color: '#ff69b4' },
    { emoji: '💕', text: 'Forever and always, you\'ll be the love of my life! I cherish you! 💖', color: '#fd79a8' },
    { emoji: '✨', text: 'You make every day magical! Thank you for being you! 🌟', color: '#fab1be' },
    { emoji: '🎁', text: 'Every moment with you is a precious gift I treasure! 💗', color: '#ffc2db' },
    { emoji: '💫', text: 'You\'re my dream come true, my answered prayer, my everything! 🙏', color: '#ff9ec0' }
  ],

  // Daily Affirmations
  affirmations: [
    'You are the most beautiful person, inside and out. Never forget that. 💖',
    'Your smile is the first thing I think about when I wake up. Keep shining! ✨',
    'You make every day better just by existing. Thank you for being you. 🌟',
    'In a world full of chaos, you are my peace. I love you endlessly. 🕊️',
    'Your kindness, strength, and beauty inspire me daily. You\'re incredible! 💪',
    'I fall more in love with you every single day. You\'re my everything. 💕',
    'You deserve all the love and happiness in this world. I\'ll spend forever making sure you feel it. 🌺',
  ]
};

// ─── GLOBAL STATE ───
let currentScreen = 'password';
let noAttempts = 0;
let reasonsRevealed = 0;
let lightboxIndex = 0;
let languageIndex = 0;
let typewriterStarted = false;
let musicPlaying = false;

// ═══════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initCursorTrail();
  initPasswordScreen();
  initMusicToggle();

  // Check if already unlocked
  if (sessionStorage.getItem('valentineUnlocked')) {
    skipToMain();
  }
});

// ═══════════════════════════════════════
// CURSOR HEART TRAIL
// ═══════════════════════════════════════
function initCursorTrail() {
  const heartEmojis = ['💖', '💗', '💕', '✨', '🌸', '💝'];
  let lastTime = 0;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 80) return;
    lastTime = now;

    const heart = document.createElement('span');
    heart.className = 'cursor-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.setProperty('--dx', (Math.random() - 0.5) * 60 + 'px');
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  });
}

// ═══════════════════════════════════════
// MUSIC TOGGLE
// ═══════════════════════════════════════
function initMusicToggle() {
  const btn = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-music');

  btn.addEventListener('click', () => {
    if (musicPlaying) {
      audio.pause();
      btn.classList.remove('playing');
    } else {
      audio.play().catch(() => {});
      btn.classList.add('playing');
    }
    musicPlaying = !musicPlaying;
  });
}

// ═══════════════════════════════════════
// PASSWORD SCREEN
// ═══════════════════════════════════════
function initPasswordScreen() {
  const input = document.getElementById('password-input');
  const submit = document.getElementById('password-submit');
  const error = document.getElementById('password-error');

  function tryPassword() {
    const val = input.value.trim().toLowerCase();
    if (val === CONFIG.password) {
      transitionTo('envelope');
    } else {
      error.textContent = 'That\'s not it, try again my love... 💔';
      input.parentElement.classList.add('shake');
      setTimeout(() => input.parentElement.classList.remove('shake'), 500);
      input.value = '';
      input.focus();
    }
  }

  submit.addEventListener('click', tryPassword);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryPassword();
  });
  input.focus();
}

// ═══════════════════════════════════════
// SCREEN TRANSITIONS
// ═══════════════════════════════════════
function transitionTo(screen) {
  // Deactivate current
  const current = document.querySelector('.fullscreen.active');
  if (current) {
    current.classList.remove('active');
  }

  setTimeout(() => {
    const next = document.getElementById(screen + '-screen');
    if (next) {
      next.classList.add('active');
      currentScreen = screen;
      onScreenEnter(screen);
    }
  }, 400);
}

function onScreenEnter(screen) {
  switch (screen) {
    case 'envelope':
      initEnvelope();
      break;
    case 'question':
      initQuestion();
      break;
    case 'celebration':
      Confetti.init();
      setTimeout(() => Confetti.celebration(), 300);
      initCelebration();
      break;
  }
}

// ═══════════════════════════════════════
// ENVELOPE
// ═══════════════════════════════════════
function initEnvelope() {
  const envelope = document.getElementById('envelope');
  let opened = false;

  envelope.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    envelope.classList.add('opened');

    setTimeout(() => {
      transitionTo('question');
    }, 2500);
  });
}

// ═══════════════════════════════════════
// THE QUESTION (Will you be my Valentine?)
// ═══════════════════════════════════════
function initQuestion() {
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');
  const noMessage = document.getElementById('no-message');

  btnYes.addEventListener('click', () => {
    transitionTo('celebration');
  });

  // The "No" button runs away!
  btnNo.addEventListener('mouseenter', runAwayNo);
  btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    runAwayNo();
  });

  function runAwayNo() {
    const wrapper = document.querySelector('.question-wrapper');
    const wrapperRect = wrapper.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Random position within the question wrapper area
    const maxX = wrapperRect.width - btnRect.width - 20;
    const maxY = wrapperRect.height - btnRect.height - 20;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    btnNo.style.position = 'relative';
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
    btnNo.style.transition = 'all 0.15s ease';

    // Show escalating message
    if (noAttempts < CONFIG.noMessages.length) {
      noMessage.textContent = CONFIG.noMessages[noAttempts];
    }
    noAttempts++;

    // After many attempts, grow the Yes button
    if (noAttempts > 3) {
      const scale = 1 + (noAttempts - 3) * 0.15;
      btnYes.style.transform = `scale(${Math.min(scale, 2)})`;
    }

    // After lots of attempts, shrink the No button
    if (noAttempts > 6) {
      const shrink = 1 - (noAttempts - 6) * 0.1;
      btnNo.style.fontSize = Math.max(shrink, 0.5) + 'rem';
      if (shrink <= 0.3) {
        btnNo.style.opacity = '0';
        btnNo.style.pointerEvents = 'none';
        noMessage.textContent = 'The No button disappeared! Guess it\'s Yes! 😏💖';
      }
    }
  }
}

// ═══════════════════════════════════════
// CELEBRATION
// ═══════════════════════════════════════
function initCelebration() {
  const btn = document.getElementById('btn-explore');
  btn.addEventListener('click', () => {
    sessionStorage.setItem('valentineUnlocked', 'true');
    Confetti.stop();

    // Hide all fullscreen overlays
    document.querySelectorAll('.fullscreen').forEach((s) => {
      s.classList.remove('active');
      s.style.display = 'none';
    });

    // Show main content
    showMainContent();
  });
}

function skipToMain() {
  document.querySelectorAll('.fullscreen').forEach((s) => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  showMainContent();
}

function showMainContent() {
  const main = document.getElementById('main-content');
  main.classList.remove('hidden');
  main.style.display = 'block';

  // Try playing music
  const audio = document.getElementById('bg-music');
  audio.play().then(() => {
    musicPlaying = true;
    document.getElementById('music-toggle').classList.add('playing');
  }).catch(() => {});

  // Initialize all main sections
  initSoundSystem();
  initNavbar();
  initCountdown();
  initGallery();
  initReasons();
  initSpinWheel();
  initFortuneCookies();
  initGiftBoxes();
  initCrystalAffirmation();
  initLoveLetter();
  initScratchCards();
  initTimeline();
  initLanguages();
  initTreasureHunt();
  initScrollReveal();
}

// ═══════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    links.classList.toggle('open');
  });

  // Close mobile menu on link click
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      links.classList.remove('open');
    });
  });

  // Active link highlight
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((s) => {
      const top = s.offsetTop - 150;
      if (window.scrollY >= top) current = s.id;
    });
    links.querySelectorAll('a').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
}

// ═══════════════════════════════════════
// COUNTDOWN
// ═══════════════════════════════════════
function initCountdown() {
  function update() {
    const now = new Date();
    const valentineDate = new Date('2026-02-14');
    const valentineStart = new Date(valentineDate.getFullYear(), valentineDate.getMonth(), valentineDate.getDate(), 0, 0, 0);
    const valentineEnd = new Date(valentineDate.getFullYear(), valentineDate.getMonth(), valentineDate.getDate(), 23, 59, 59);

    const msgEl = document.getElementById('countdown-message');

    // Check if it's Valentine's Day
    if (now >= valentineStart && now <= valentineEnd) {
      // It's Valentine's Day! Count down how much time is left in the day
      const diff = valentineEnd - now;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('cd-minutes').textContent = String(mins).padStart(2, '0');
      document.getElementById('cd-seconds').textContent = String(secs).padStart(2, '0');
      msgEl.textContent = '💖 Enjoy every moment of our special day! 💖';
    } else if (now > valentineEnd) {
      // Valentine's Day has ended
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-minutes').textContent = '00';
      document.getElementById('cd-seconds').textContent = '00';
      msgEl.textContent = '💕 Until next Valentine\'s Day, my love! 💕';
    } else {
      // Before Valentine's Day - shouldn't normally happen but just in case
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-minutes').textContent = '00';
      document.getElementById('cd-seconds').textContent = '00';
      msgEl.textContent = '💖 Happy Valentine\'s Day, My Love! 💖';
    }
  }

  update();
  setInterval(update, 1000);
}

// ═══════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════
function initGallery() {
  const grid = document.getElementById('gallery-grid');

  if (CONFIG.photos.length === 0) {
    grid.innerHTML = `
      <div class="gallery-empty">
        <div class="gallery-empty-icon">📸</div>
        <p class="gallery-empty-text">
          Add your photos to make this gallery come alive! 💕<br><br>
          1. Put your photo files in the <code>images/</code> folder<br>
          2. Open <code>js/main.js</code><br>
          3. Add them to the <code>photos</code> array in CONFIG<br><br>
          Example:<br>
          <code>{ src: 'images/photo1.jpg', caption: 'Our first date 💕' }</code>
        </p>
      </div>
    `;
    return;
  }

  CONFIG.photos.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption || ''}" loading="lazy" />
      <div class="gallery-item-caption">${photo.caption || ''}</div>
    `;
    item.addEventListener('click', () => openLightbox(i));
    grid.appendChild(item);
  });

  initLightbox();
}

// ─── LIGHTBOX ───
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + CONFIG.photos.length) % CONFIG.photos.length;
  updateLightbox();
}

function updateLightbox() {
  const photo = CONFIG.photos[lightboxIndex];
  document.getElementById('lightbox-img').src = photo.src;
  document.getElementById('lightbox-caption').textContent = photo.caption || '';
  document.getElementById('lightbox-counter').textContent = `${lightboxIndex + 1} / ${CONFIG.photos.length}`;
}

// ═══════════════════════════════════════
// REASONS I LOVE YOU
// ═══════════════════════════════════════
function initReasons() {
  const grid = document.getElementById('reasons-grid');
  const totalEl = document.getElementById('reasons-total');
  const revealedEl = document.getElementById('reasons-revealed');

  totalEl.textContent = CONFIG.reasons.length;
  reasonsRevealed = 0;

  const icons = ['💖', '💗', '💝', '💕', '✨', '🌸', '🦋', '💫', '🌹', '💐', '🥰', '😍', '💘', '💓', '💞'];

  CONFIG.reasons.forEach((reason, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card reveal';
    card.innerHTML = `
      <span class="reason-card-number">#${i + 1}</span>
      <span class="reason-card-icon">${icons[i % icons.length]}</span>
      <p class="reason-card-text">${reason}</p>
    `;
    card.addEventListener('click', () => {
      if (!card.classList.contains('revealed')) {
        card.classList.add('revealed');
        reasonsRevealed++;
        revealedEl.textContent = reasonsRevealed;

        // Little celebration when all revealed
        if (reasonsRevealed === CONFIG.reasons.length) {
          Confetti.init();
          Confetti.burst(50);
        }
      }
    });
    grid.appendChild(card);
  });
}

// ═══════════════════════════════════════
// LOVE LETTER (TYPEWRITER EFFECT)
// ═══════════════════════════════════════
function initLoveLetter() {
  const container = document.getElementById('typewriter-text');
  const text = CONFIG.loveLetter;
  let charIndex = 0;

  // Use Intersection Observer to start when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !typewriterStarted) {
          typewriterStarted = true;
          startTypewriter();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(document.getElementById('love-letter'));

  function startTypewriter() {
    container.innerHTML = '<span class="typewriter-cursor"></span>';

    function type() {
      if (charIndex < text.length) {
        const cursor = container.querySelector('.typewriter-cursor');
        const char = text[charIndex];

        if (char === '\n') {
          cursor.insertAdjacentHTML('beforebegin', '<br>');
        } else {
          cursor.insertAdjacentText('beforebegin', char);
        }

        charIndex++;
        const delay = char === '.' || char === ',' || char === '\n' ? 80 : 25;
        setTimeout(type, delay);
      } else {
        // Remove cursor after done
        setTimeout(() => {
          const cursor = container.querySelector('.typewriter-cursor');
          if (cursor) cursor.remove();
        }, 3000);
      }
    }

    type();
  }
}

// ═══════════════════════════════════════
// SCRATCH CARDS
// ═══════════════════════════════════════
function initScratchCards() {
  const grid = document.getElementById('scratch-grid');

  CONFIG.surprises.forEach((surprise) => {
    const card = document.createElement('div');
    card.className = 'scratch-card reveal';

    const content = document.createElement('div');
    content.className = 'scratch-card-content';
    content.innerHTML = `
      <div>
        <div class="scratch-card-emoji">${surprise.emoji}</div>
        <p>${surprise.text}</p>
      </div>
    `;

    const canvas = document.createElement('canvas');
    card.appendChild(content);
    card.appendChild(canvas);
    grid.appendChild(card);

    // Initialize scratch canvas after it's in the DOM
    requestAnimationFrame(() => initScratchCanvas(canvas, card));
  });
}

function initScratchCanvas(canvas, card) {
  const rect = card.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  const ctx = canvas.getContext('2d');

  // Draw the cover
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#ffc2db');
  gradient.addColorStop(0.5, '#ff9ec0');
  gradient.addColorStop(1, '#ff6b9d');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add "Scratch Me!" text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.font = '700 20px Quicksand, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('✨ Scratch Me! ✨', canvas.width / 2, canvas.height / 2);

  // Add sparkle pattern
  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 3 + 1, 0, Math.PI * 2);
    ctx.fill();
  }

  let drawing = false;
  let totalPixels = canvas.width * canvas.height;

  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    // Check percentage scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clearedPixels = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) clearedPixels++;
    }
    if (clearedPixels / totalPixels > 0.45) {
      canvas.style.opacity = '0';
      canvas.style.transition = 'opacity 0.5s ease';
      setTimeout(() => canvas.remove(), 500);
    }
  }

  function getPos(e) {
    const r = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    return { x: touch.clientX - r.left, y: touch.clientY - r.top };
  }

  canvas.addEventListener('mousedown', (e) => { drawing = true; const p = getPos(e); scratch(p.x, p.y); });
  canvas.addEventListener('mousemove', (e) => { if (drawing) { const p = getPos(e); scratch(p.x, p.y); } });
  canvas.addEventListener('mouseup', () => { drawing = false; });
  canvas.addEventListener('mouseleave', () => { drawing = false; });

  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); drawing = true; const p = getPos(e); scratch(p.x, p.y); });
  canvas.addEventListener('touchmove', (e) => { e.preventDefault(); if (drawing) { const p = getPos(e); scratch(p.x, p.y); } });
  canvas.addEventListener('touchend', () => { drawing = false; });
}

// ═══════════════════════════════════════
// TIMELINE
// ═══════════════════════════════════════
function initTimeline() {
  const container = document.getElementById('timeline-container');

  CONFIG.timeline.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-emoji">${item.emoji}</div>
        <div class="timeline-date">${item.date}</div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    container.appendChild(el);
  });

  // Animate on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  container.querySelectorAll('.timeline-item').forEach((item) => {
    observer.observe(item);
  });
}

// ═══════════════════════════════════════
// I LOVE YOU IN LANGUAGES
// ═══════════════════════════════════════
function initLanguages() {
  const textEl = document.getElementById('language-text');
  const nameEl = document.getElementById('language-name');

  function showLanguage() {
    const lang = CONFIG.languages[languageIndex];

    textEl.style.opacity = '0';
    textEl.style.transform = 'translateY(20px)';
    nameEl.style.opacity = '0';

    setTimeout(() => {
      textEl.textContent = lang.text;
      nameEl.textContent = lang.lang;
      textEl.style.opacity = '1';
      textEl.style.transform = 'translateY(0)';
      nameEl.style.opacity = '1';
    }, 400);

    languageIndex = (languageIndex + 1) % CONFIG.languages.length;
  }

  showLanguage();
  setInterval(showLanguage, 3000);
}

// ═══════════════════════════════════════
// SCROLL REVEAL ANIMATION
// ═══════════════════════════════════════
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Also make section titles animate
  document.querySelectorAll('.section-title, .section-subtitle').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ═══════════════════════════════════════
// SOUND EFFECTS SYSTEM
// ═══════════════════════════════════════
const Sounds = {
  enabled: true,
  sounds: {},

  init() {
    // Preload sounds if they exist
    const soundFiles = ['click', 'success', 'pop', 'whoosh', 'heart', 'sparkle', 'bell'];
    soundFiles.forEach(name => {
      const audio = new Audio(`sounds/${name}.mp3`);
      audio.volume = 0.3;
      this.sounds[name] = audio;
      // Silently fail if file doesn't exist
      audio.onerror = () => { this.sounds[name] = null; };
    });
  },

  play(name) {
    if (!this.enabled || !this.sounds[name]) return;
    this.sounds[name].currentTime = 0;
    this.sounds[name].play().catch(() => {});
  },

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
};

function initSoundSystem() {
  Sounds.init();
}

// ═══════════════════════════════════════
// SPIN THE WHEEL
// ═══════════════════════════════════════
function initSpinWheel() {
  const canvas = document.getElementById('wheel-canvas');
  const ctx = canvas.getContext('2d');
  const spinBtn = document.getElementById('spin-button');
  const resultEl = document.getElementById('wheel-result');
  const resultEmojiEl = document.getElementById('wheel-result-emoji');
  const resultTextEl = document.getElementById('wheel-result-text');
  const spinAgainBtn = document.getElementById('wheel-spin-again');

  let rotation = 0;
  let spinning = false;
  const prizes = CONFIG.wheelPrizes;
  const sliceAngle = (Math.PI * 2) / prizes.length;

  function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10;

    prizes.forEach((prize, i) => {
      const angle = rotation + i * sliceAngle;
      
      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = prize.color;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw emoji
      const textAngle = angle + sliceAngle / 2;
      const textX = centerX + Math.cos(textAngle) * (radius * 0.7);
      const textY = centerY + Math.sin(textAngle) * (radius * 0.7);
      ctx.font = '32px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(prize.emoji, textX, textY);
    });

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#ff6b9d';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw pointer at top
    ctx.beginPath();
    ctx.moveTo(centerX, 10);
    ctx.lineTo(centerX - 15, 40);
    ctx.lineTo(centerX + 15, 40);
    ctx.closePath();
    ctx.fillStyle = '#ff6b9d';
    ctx.fill();
  }

  function spin() {
    if (spinning) return;
    spinning = true;
    spinBtn.disabled = true;
    spinBtn.classList.add('spinning');
    Sounds.play('whoosh');

    const winningIndex = Math.floor(Math.random() * prizes.length);
    const targetRotation = (Math.PI * 2 * 5) + (winningIndex * sliceAngle) + (sliceAngle / 2);
    const duration = 3000;
    const start = Date.now();
    const startRotation = rotation;

    function animate() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      rotation = startRotation + targetRotation * eased;
      drawWheel();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        showResult(winningIndex);
        spinning = false;
        spinBtn.disabled = false;
        spinBtn.classList.remove('spinning');
      }
    }

    animate();
  }

  function showResult(index) {
    const prize = prizes[index];
    resultEmojiEl.textContent = prize.emoji;
    resultTextEl.textContent = prize.text;
    resultEl.classList.remove('hidden');
    Sounds.play('bell');
    Confetti.init();
    Confetti.burst(40);
  }

  spinBtn.addEventListener('click', spin);
  spinAgainBtn.addEventListener('click', () => {
    resultEl.classList.add('hidden');
    Sounds.play('click');
  });

  drawWheel();
}

// ═══════════════════════════════════════
// FORTUNE COOKIES
// ═══════════════════════════════════════
function initFortuneCookies() {
  const grid = document.getElementById('cookies-grid');

  CONFIG.fortuneMessages.forEach(message => {
    const cookie = document.createElement('div');
    cookie.className = 'fortune-cookie';
    cookie.innerHTML = `
      <div class="cookie-emoji">🥠</div>
      <div class="fortune-text">${message}</div>
    `;
    cookie.addEventListener('click', () => {
      if (!cookie.classList.contains('opened')) {
        cookie.classList.add('opened');
        Sounds.play('pop');
      }
    });
    grid.appendChild(cookie);
  });
}

// ═══════════════════════════════════════
// VIRTUAL GIFT BOXES
// ═══════════════════════════════════════
function initGiftBoxes() {
  const grid = document.getElementById('gifts-grid');

  CONFIG.giftBoxes.forEach(gift => {
    const box = document.createElement('div');
    box.className = 'gift-box';
    box.innerHTML = `
      <div class="gift-box-wrap" style="background: linear-gradient(135deg, ${gift.color}, ${gift.color}dd);">
        <div class="gift-bow">🎀</div>
        <div class="gift-content">
          <div class="gift-emoji">${gift.emoji}</div>
          <p class="gift-text">${gift.text}</p>
        </div>
      </div>
    `;
    box.addEventListener('click', () => {
      if (!box.classList.contains('opened')) {
        box.classList.add('opened');
        Sounds.play('success');
        Confetti.init();
        Confetti.burst(25);
      }
    });
    grid.appendChild(box);
  });
}

// ═══════════════════════════════════════
// CRYSTAL AFFIRMATION
// ═══════════════════════════════════════
function initCrystalAffirmation() {
  const crystal = document.getElementById('crystal');
  const messageEl = document.getElementById('affirmation-message');
  const textEl = document.getElementById('affirmation-text');
  const dateEl = document.getElementById('affirmation-date');

  crystal.addEventListener('click', () => {
    const randomAffirmation = CONFIG.affirmations[Math.floor(Math.random() * CONFIG.affirmations.length)];
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    textEl.textContent = randomAffirmation;
    dateEl.textContent = `Today, ${dateStr}`;
    messageEl.classList.remove('hidden');
    Sounds.play('sparkle');
    
    // Animate crystal
    crystal.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
      crystal.style.transform = '';
    }, 600);
  });
}

// ═══════════════════════════════════════
// TREASURE HUNT
// ═══════════════════════════════════════
function initTreasureHunt() {
  const trigger = document.getElementById('treasure-hunt-trigger');
  const btn = document.getElementById('treasure-btn');
  const modal = document.getElementById('treasure-modal');
  const closeBtn = document.getElementById('treasure-close');
  const chest = document.getElementById('treasure-chest');
  const reveal = document.getElementById('treasure-reveal');

  // Show treasure button after scrolling 50% of page
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 50) {
      trigger.classList.add('visible');
    }
  });

  btn.addEventListener('click', () => {
    modal.classList.add('active');
    Sounds.play('whoosh');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  chest.addEventListener('click', () => {
    if (!chest.classList.contains('opened')) {
      chest.classList.add('opened');
      reveal.classList.remove('hidden');
      Sounds.play('success');
      Confetti.init();
      Confetti.celebration();
    }
  });
}
