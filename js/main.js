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
    // { src: 'images/photo1.jpg', caption: 'Our first date 💕' },
    // { src: 'images/photo2.jpg', caption: 'That sunset we watched 🌅' },
    // { src: 'images/photo3.jpg', caption: 'Your beautiful smile 😊' },
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

  // Memory Game Cards (emojis to match)
  memoryEmojis: ['💖', '💝', '💗', '💕', '✨', '🌸', '💫', '🌹'],

  // Love Quiz Questions
  quizQuestions: [
    {
      question: 'What\'s the first thing I noticed about you?',
      options: ['Your smile', 'Your eyes', 'Your laugh', 'Your kindness'],
      correct: 0,
      message: 'Your smile lit up the entire room! ✨'
    },
    {
      question: 'What\'s our song? (The one that makes me think of you)',
      options: ['A love ballad', 'An upbeat pop song', 'A romantic classic', 'Our own special tune'],
      correct: 3,
      message: 'Every song becomes our song when I\'m with you! 🎵'
    },
    {
      question: 'What do I love most about spending time with you?',
      options: ['The adventures', 'The quiet moments', 'The laughter', 'Everything'],
      correct: 3,
      message: 'Every single second with you is my favorite! 💕'
    },
    {
      question: 'How do you make me feel?',
      options: ['Happy', 'Loved', 'Complete', 'All of the above'],
      correct: 3,
      message: 'You make me feel like I can conquer the world! 🌟'
    },
    {
      question: 'What\'s my favorite thing to do with you?',
      options: ['Talk for hours', 'Just exist together', 'Make you smile', 'All of these!'],
      correct: 3,
      message: 'As long as I\'m with you, I\'m doing my favorite thing! 💖'
    }
  ],

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
    'You are about to be kissed... right now! 💋',
    'A romantic adventure awaits you this week! 🗺️',
    'Someone is thinking about you every second... it\'s me! 💭',
    'You will receive an unexpected compliment today... You\'re GORGEOUS! 😍',
    'Love and laughter will fill your day! 🎉',
    'A cozy cuddle session is in your near future! 🫂',
    'Your smile will brighten someone\'s day... mine! ☀️',
    'Sweet surprises are headed your way! 🎁',
    'You are more loved than you could ever know! 💕',
    'Good vibes and warm hugs surround you always! 🤗'
  ],

  // Virtual Gift Box Surprises
  giftBoxes: [
    { emoji: '☕', text: 'Coffee/tea date - your favorite drink on me!', color: '#d4a574' },
    { emoji: '📚', text: 'Bookstore date - I\'ll buy you any book you want!', color: '#8b7355' },
    { emoji: '🎵', text: 'Concert/live music - let\'s make memories!', color: '#9b59b6' },
    { emoji: '🍰', text: 'Dessert tasting tour - all the sweets!', color: '#f8b4d9' },
    { emoji: '🎭', text: 'Theater/show date - fancy night out!', color: '#e74c3c' },
    { emoji: '🌺', text: 'Flower picking/garden stroll - peaceful and romantic!', color: '#ff69b4' }
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
  initMemoryGame();
  initLoveQuiz();
  initSpinWheel();
  initFortuneCookies();
  initGiftBoxes();
  initCrystalAffirmation();
  initLoveLetter();
  initScratchCards();
  initTimeline();
  initLanguages();
  initTreasureHunt();
  initKonamiCode();
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
    const target = new Date(CONFIG.valentineDate);

    // If Valentine's has passed this year, it's the day or past
    const diff = target - now;

    const msgEl = document.getElementById('countdown-message');

    if (diff <= 0) {
      // It's Valentine's Day or later!
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-minutes').textContent = '00';
      document.getElementById('cd-seconds').textContent = '00';
      msgEl.textContent = '💖 Happy Valentine\'s Day, My Love! 💖';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-seconds').textContent = String(secs).padStart(2, '0');
    msgEl.textContent = days === 0 ? '💕 Almost here!' : '';
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
// MEMORY GAME
// ═══════════════════════════════════════
function initMemoryGame() {
  const grid = document.getElementById('memory-grid');
  const movesEl = document.getElementById('game-moves');
  const matchesEl = document.getElementById('game-matches');
  const resetBtn = document.getElementById('game-reset');
  const completeEl = document.getElementById('game-complete-message');
  const completeTextEl = document.getElementById('complete-message-text');
  const nextBtn = document.getElementById('game-next-surprise');

  let cards = [];
  let flippedCards = [];
  let moves = 0;
  let matches = 0;
  let canFlip = true;

  function createCards() {
    const emojis = [...CONFIG.memoryEmojis, ...CONFIG.memoryEmojis];
    emojis.sort(() => Math.random() - 0.5);

    grid.innerHTML = '';
    cards = [];
    
    emojis.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.emoji = emoji;
      card.dataset.index = index;
      card.innerHTML = `
        <div class="memory-card-face memory-card-front">❓</div>
        <div class="memory-card-face memory-card-back">${emoji}</div>
      `;
      card.addEventListener('click', () => flipCard(card));
      grid.appendChild(card);
      cards.push(card);
    });
  }

  function flipCard(card) {
    if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    flippedCards.push(card);
    Sounds.play('pop');

    if (flippedCards.length === 2) {
      canFlip = false;
      moves++;
      movesEl.textContent = moves;
      checkMatch();
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const match = card1.dataset.emoji === card2.dataset.emoji;

    setTimeout(() => {
      if (match) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matches++;
        matchesEl.textContent = `${matches}/${CONFIG.memoryEmojis.length}`;
        Sounds.play('success');

        if (matches === CONFIG.memoryEmojis.length) {
          setTimeout(gameComplete, 500);
        }
      } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
      }
      flippedCards = [];
      canFlip = true;
    }, 800);
  }

  function gameComplete() {
    const messages = [
      'Wow! You found all our memories! 🎉 Just like how you found your way into my heart — perfectly! 💕',
      'You matched everything perfectly... just like we do! 💖 We\'re a perfect match in every way!',
      'Amazing memory! Though I bet you can\'t remember the exact moment you made me fall in love... because it was EVERY moment! 😍'
    ];
    completeTextEl.textContent = messages[Math.floor(Math.random() * messages.length)];
    completeEl.classList.remove('hidden');
    Confetti.init();
    Confetti.burst(60);
    Sounds.play('success');
  }

  function reset() {
    moves = 0;
    matches = 0;
    flippedCards = [];
    canFlip = true;
    movesEl.textContent = '0';
    matchesEl.textContent = '0/8';
    completeEl.classList.add('hidden');
    createCards();
    Sounds.play('whoosh');
  }

  resetBtn.addEventListener('click', reset);
  nextBtn.addEventListener('click', () => {
    document.getElementById('love-quiz').scrollIntoView({ behavior: 'smooth' });
  });

  createCards();
}

// ═══════════════════════════════════════
// LOVE QUIZ
// ═══════════════════════════════════════
function initLoveQuiz() {
  const container = document.getElementById('quiz-container');
  const resultEl = document.getElementById('quiz-result');
  const scoreEl = document.getElementById('quiz-score');
  const resultTitleEl = document.getElementById('quiz-result-title');
  const resultMessageEl = document.getElementById('quiz-result-message');
  const retryBtn = document.getElementById('quiz-retry');

  let currentQuestion = 0;
  let score = 0;
  let answered = [];

  function showQuestion(index) {
    const q = CONFIG.quizQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.innerHTML = `
      <span class="quiz-question-number">${index + 1}</span>
      <p class="quiz-question-text">${q.question}</p>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-index="${i}">
            <span class="option-icon">💝</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
    `;
    
    container.innerHTML = '';
    container.appendChild(questionDiv);

    questionDiv.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => answerQuestion(btn, index, parseInt(btn.dataset.index)));
    });
  }

  function answerQuestion(btn, qIndex, optIndex) {
    if (answered.includes(qIndex)) return;
    answered.push(qIndex);

    const q = CONFIG.quizQuestions[qIndex];
    const correct = optIndex === q.correct;
    const allOptions = btn.parentElement.querySelectorAll('.quiz-option');

    if (correct) {
      btn.classList.add('correct');
      score++;
      Sounds.play('success');
    } else {
      btn.classList.add('wrong');
      allOptions[q.correct].classList.add('correct');
      Sounds.play('pop');
    }

    allOptions.forEach(opt => opt.style.pointerEvents = 'none');

    setTimeout(() => {
      if (qIndex < CONFIG.quizQuestions.length - 1) {
        showQuestion(qIndex + 1);
      } else {
        showResults();
      }
    }, 1500);
  }

  function showResults() {
    container.style.display = 'none';
    resultEl.classList.remove('hidden');
    scoreEl.textContent = score;

    const percentage = (score / CONFIG.quizQuestions.length) * 100;
    let title, message;

    if (percentage === 100) {
      title = '💯 Perfect Score! 💯';
      message = 'You know us SO well! It\'s like we\'re connected at the soul. Every answer was perfect... just like you! 💕';
      Confetti.init();
      Confetti.celebration();
    } else if (percentage >= 80) {
      title = '🌟 Amazing! 🌟';
      message = 'Wow! You really pay attention! You know us better than I thought possible. You\'re incredible! 💖';
    } else if (percentage >= 60) {
      title = '💕 Great Job! 💕';
      message = 'Pretty good! But let me tell you more about us... I want you to know EVERYTHING! ✨';
    } else {
      title = '💝 Keep Learning! 💝';
      message = 'That\'s okay! We have a whole lifetime to learn everything about each other! Let\'s make more memories! 🥰';
    }

    resultTitleEl.textContent = title;
    resultMessageEl.textContent = message;
    Sounds.play('success');
  }

  function reset() {
    currentQuestion = 0;
    score = 0;
    answered = [];
    container.style.display = 'block';
    resultEl.classList.add('hidden');
    showQuestion(0);
    Sounds.play('whoosh');
  }

  retryBtn.addEventListener('click', reset);
  showQuestion(0);
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

// ═══════════════════════════════════════
// KONAMI CODE EASTER EGG
// ═══════════════════════════════════════
function initKonamiCode() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 'a' ? e.key.toLowerCase() : e.key;
    
    if (key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerKonamiEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function triggerKonamiEasterEgg() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      z-index: 10003;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.3s ease;
    `;
    
    overlay.innerHTML = `
      <div class="konami-message">
        <div class="konami-emoji">🎮</div>
        <p class="konami-text">
          YOU FOUND THE SECRET CODE! 🎉<br><br>
          You're not just a player in this game called life...<br>
          You're my Player 2, my teammate, my co-op partner in everything!<br><br>
          Level Up: Our Love Meter is at MAX! 💯💕<br><br>
          Achievement Unlocked: "You're Perfect" 🏆
        </p>
      </div>
    `;

    document.body.appendChild(overlay);
    Sounds.play('success');
    Confetti.init();
    Confetti.celebration();

    overlay.addEventListener('click', () => {
      overlay.remove();
    });

    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 10);
  }
}
