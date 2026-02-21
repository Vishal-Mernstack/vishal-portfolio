# 🚀 Alex Morgan — Portfolio

A premium, production-ready personal portfolio built with React + Vite.
**Dark cyberpunk-editorial design** with electric amber accents, glassmorphism, and smooth Framer Motion animations.

---

## ✨ Features

- **Animated loading screen** with progress bar
- **Sticky navbar** with scroll progress indicator and active section tracking
- **Dark/Light mode** toggle (persisted to localStorage)
- **Responsive hamburger menu** for mobile
- **Hero section** with animated terminal card and floating stat widgets
- **About** with strength cards and tech stack badges
- **Skills** with animated progress bars and tabbed categories
- **Projects** with filterable card grid and hover effects
- **Experience** timeline with achievement lists
- **Education** cards
- **Contact form** with email integration placeholder
- **Footer** with quick navigation
- **Mobile-first responsive** layout
- **SEO-optimized** meta tags in `index.html`

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Place your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar/         Navbar.jsx + Navbar.css
│   │   ├── Hero/           Hero.jsx + Hero.css
│   │   ├── About/          About.jsx + About.css
│   │   ├── Skills/         Skills.jsx + Skills.css
│   │   ├── Projects/       Projects.jsx + Projects.css
│   │   ├── Experience/     Experience.jsx + Experience.css
│   │   ├── Education/      Education.jsx + Education.css
│   │   ├── Contact/        Contact.jsx + Contact.css
│   │   ├── Footer/         Footer.jsx + Footer.css
│   │   └── UI/             Loader.jsx + Loader.css
│   ├── data/
│   │   └── portfolio.js    ← ALL CONTENT LIVES HERE
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── styles/
│   │   └── globals.css     Design system + CSS variables
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚡ Installation

```bash
# 1. Navigate to the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 🎨 Customization

### Step 1 — Update content
Open **`src/data/portfolio.js`** and replace all placeholder values:
- `personalInfo` — your name, email, social links, location
- `aboutMe` — bio paragraphs, strengths, tech stack
- `skills` — categories and proficiency percentages
- `projects` — your actual projects with GitHub/live URLs
- `experience` — work history with achievements
- `education` — degrees and certifications

### Step 2 — Add your resume
Place your resume PDF at `public/resume.pdf`

### Step 3 — Connect the contact form
In `src/components/Contact/Contact.jsx`, uncomment and configure one of:

**Option A — EmailJS (recommended)**
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```
Sign up at [emailjs.com](https://emailjs.com)

**Option B — Formspree**
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
});
```
Sign up at [formspree.io](https://formspree.io)

### Step 4 — Customize colors (optional)
Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --accent: #f5a623;      /* Change accent color */
  --bg-primary: #080a0e;  /* Main background */
}
```

---

## 🌐 Deployment

**Vercel (recommended)**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
npm run build
# Drag & drop the `dist` folder to netlify.com
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| react + react-dom | UI framework |
| framer-motion | Animations |
| react-intersection-observer | Scroll-triggered reveals |
| @emailjs/browser | Contact form emails |
| vite + @vitejs/plugin-react | Build tool |

---

## 📝 SEO Checklist

- [ ] Update `<title>` in `index.html`
- [ ] Update `<meta name="description">` in `index.html`
- [ ] Update `og:title` and `og:description`
- [ ] Add `og:image` (1200×630 preview image)
- [ ] Add Google Analytics or Plausible script
- [ ] Submit sitemap to Google Search Console

---

Built with React 18 + Vite 5 + Framer Motion 11
