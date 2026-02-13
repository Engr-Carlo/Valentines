# 💖 Valentine's Day Website for My Love 💖

A beautiful, interactive static website — a Valentine's Day gift built with pure love (and HTML/CSS/JS).

## ✨ Features

- 🔒 **Password-Protected** — Only your special person can enter
- 💌 **Animated Envelope** — A love letter that opens with a beautiful animation
- 💝 **"Be My Valentine?" Teaser** — With a "No" button that literally runs away!
- 🎆 **Confetti Celebration** — When she says Yes!
- 📸 **Photo Gallery** — Polaroid-style with lightbox viewer
- 💖 **Reasons I Love You** — Interactive reveal cards
- ✍️ **Typewriter Love Letter** — Animated typing effect
- 🎁 **Scratch Cards** — Scratch-to-reveal surprise promises
- 📅 **Relationship Timeline** — Your journey together
- 🌍 **"I Love You" in 18 Languages** — Rotating carousel
- 💍 **Promise Section** — Your vows to her
- ⏰ **Valentine's Countdown** — Live countdown timer
- 🎵 **Background Music** — Optional ambient music
- 💕 **Floating Hearts** — Canvas particle animation
- ✨ **Cursor Trail** — Hearts follow your mouse
- 📱 **Fully Responsive** — Beautiful on all devices

## 🚀 How to Set Up

### 1. Add Your Photos
- Put your photo files (`.jpg`, `.png`) into the `images/` folder
- Open `js/main.js` and add them to the `CONFIG.photos` array:
```js
photos: [
  { src: 'images/photo1.jpg', caption: 'Our first date 💕' },
  { src: 'images/photo2.jpg', caption: 'That sunset we watched 🌅' },
],
```

### 2. Add Background Music (Optional)
- Put an MP3 file in the `music/` folder named `song.mp3`

### 3. Customize Content
Open `js/main.js` and edit the `CONFIG` object:
- **password** — Change the unlock password (default: `iloveyou`)
- **reasons** — Your reasons for loving her
- **loveLetter** — Your personal love letter
- **surprises** — Scratch card surprise texts
- **timeline** — Your relationship milestones
- Feel free to change any text in `index.html` too!

### 4. Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "💖 Valentine's Day Gift"
git remote add origin https://github.com/YOUR_USERNAME/valentines.git
git push -u origin main
```
Then go to **Settings → Pages → Deploy from branch → main** and your site will be live!

## 💕 Password
Default password: **iloveyou**
(Change it in `js/main.js` → `CONFIG.password`)

## 🎨 Made With Love
Pure HTML, CSS, and JavaScript — no frameworks, no dependencies, just love. 💖

By: **Engr. Carlo Cimacio**
