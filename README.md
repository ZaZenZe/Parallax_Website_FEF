# Miku Dayo - Parallax Showcase (React + TypeScript)
### - Made by Sayan "Ricky" DE
- This project has been deployed on : https://parallax-miku-rsde.onrender.com

This project was built for the Front-End Framework lecture at our University. It's a modern, interactive parallax portfolio website featuring Hatsune Miku with multi-layered scrolling backgrounds, dynamic animations, and smooth transitions. Built with React, TypeScript, and GSAP for high-performance animations.

## 🎨 Design Philosophy

This website embraces a **cyberpunk-meets-vaporwave aesthetic** with:
- Deep navy/teal color palette inspired by Miku's iconic branding
- Multi-layered parallax backgrounds that shift and fade between sections
- Dynamic floating bubble effects for depth
- Neon color-shifting text animations
- Interactive mouse-based depth perception
- Custom font cycling system for visual variety
- Smooth GSAP-powered scroll animations

## ✨ Key Features

### 🌊 Advanced Parallax System
- **3-layer background system**: Each section (Hero, About, Contact) has its own background layer
- **Smooth cross-fade transitions**: Backgrounds elegantly fade in/out as you scroll
- **Mouse parallax depth**: Background layers respond to cursor movement at different speeds (15px, 25px, 35px)
- **Floating animations**: Subtle 20s float cycle creates a dreamy, non-static feel
- **Bubble overlay**: Animated gradient bubbles drift across the background (25s cycle)
- **Extended coverage**: 110% width × 120vh height prevents gaps during parallax movement

### 🎭 Interactive Components
- **Loading Screen**: Animated entry with Miku branding and smooth fade-out
- **Header Navigation**: Sticky nav with smooth scroll to sections
- **Hero Section**: Large hero image with cycling text animations
- **About Section**: Story/bio with fade-in animations
- **Gallery/Works**: Project showcase with hover effects
- **Contact Form**: Clean, functional contact section
- **Dynamic Footer**: Font-cycling credits with gentle neon color shifts

### 🎪 Animation Details
- **Font Cycling**: 7 fonts rotate every 500ms (Bangers, Monoton, Rubik Glitch, Concert One, Orbitron, Press Start 2P, Oswald)
- **Text Cycling**: Hero taglines rotate with custom hooks
- **Scroll-triggered animations**: Framer Motion `whileInView` for section reveals
- **Neon color shifts**: Smooth 3s cycle through teal/aqua hues without harsh shadows
- **Hover interactions**: Scale and glow effects on interactive elements

## 📁 Project Structure (Not everything is mentioned)

```
Parallax_Website_FEF/
├── public/
│   ├── assets/
│   │   └── hero/              # Hero section images (Not used)
│   ├── layers/                # Parallax background layers
│   │   ├── bg_miku.jpg        # Layer 1 - Hero background
│   │   ├── Hero_BG(3).jpeg    # Layer 2 - About background
│   │   └── Hero_BG(4).jpeg    # Layer 3 - Contact background
│   ├── miku/                  # Miku branding assets
│   │   ├── miku-chibi.png 
│   │   ├── miku-full-art.png
│   │   ├── miku-hanging.png 
│   │   ├── miku-silhouette.png
│   │   └── miku-logo.svg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx          # About/bio section
│   │   ├── Contact.tsx        # Contact form section
│   │   ├── Facts.tsx          # Fun facts component
│   │   ├── Footer.tsx         # Dynamic footer with credits
│   │   ├── Gallery.tsx        # Image gallery showcase
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero landing section
│   │   ├── LoadingScreen.tsx  # Entry animation screen
│   │   ├── ParallaxBackground.tsx  # Multi-layer parallax engine
│   │   ├── Spotlight.tsx      # Spotlight effect component
│   │   └── Works.tsx          # Projects/works showcase
│   ├── hooks/
│   │   ├── useFontCycle.ts    # Font rotation hook (7 fonts)
│   │   ├── useMouseParallax.ts # Mouse-based parallax depth
│   │   ├── useParallax.ts     # General parallax utilities
│   │   ├── useSectionParallax.ts # Section-specific effects
│   │   └── useTextCycle.ts    # Text content cycling
│   ├── styles/
│   │   ├── About.scss
│   │   ├── Contact.scss
│   │   ├── Facts.scss
│   │   ├── Footer.scss
│   │   ├── Gallery.scss
│   │   ├── Header.scss
│   │   ├── Hero.scss
│   │   ├── LoadingScreen.scss
│   │   ├── ParallaxBackground.scss  # Core parallax styles
│   │   ├── Spotlight.scss
│   │   └── Works.scss
│   ├── App.scss               # Global app styles
│   ├── App.tsx                # Main app component
│   ├── index.css              # CSS reset + root variables
│   └── main.tsx               # Application entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🔧 Technologies & Dependencies

### Core Framework
- **[React 19.1.1](https://react.dev/)** - UI library with latest concurrent features
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite 7.1.7](https://vite.dev/)** - Lightning-fast build tool and dev server

### Animation Libraries
- **[GSAP 3.13.0](https://greensock.com/gsap/)** - Professional-grade animation engine
  - `ScrollTrigger` plugin for scroll-based animations
  - Used for complex parallax effects and timeline sequences
- **[Motion 12.23.24](https://motion.dev/)** (Framer Motion) - React animation library
  - `motion` components for declarative animations
  - `AnimatePresence` for enter/exit transitions
  - `whileInView` for scroll-triggered reveals

### Styling
- **[Sass 1.93.2](https://sass-lang.com/)** - CSS preprocessor with variables, nesting, mixins
- **CSS Modules** - Scoped component styling
- **Google Fonts** - 7 custom fonts for cycling effects:
  - [Bangers](https://fonts.google.com/specimen/Bangers)
  - [Monoton](https://fonts.google.com/specimen/Monoton)
  - [Rubik Glitch](https://fonts.google.com/specimen/Rubik+Glitch)
  - [Concert One](https://fonts.google.com/specimen/Concert+One)
  - [Orbitron](https://fonts.google.com/specimen/Orbitron)
  - [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
  - [Oswald](https://fonts.google.com/specimen/Oswald)

### Development Tools
- **[ESLint 9.36.0](https://eslint.org/)** - Code linting with React hooks plugin
- **[TypeScript ESLint 8.45.0](https://typescript-eslint.io/)** - TypeScript-specific linting rules

## 🚀 Run Locally

Prerequisites: **Node.js** (v18+ recommended) and **npm**.

```powershell
# Clone the repository
git clone https://github.com/ZaZenZe/Parallax_Website_FEF.git
cd Parallax_Website_FEF

# Install dependencies
npm install

# Start the development server
npm run dev
```

If Windows PowerShell blocks scripts (execution policy), use one of these:

```powershell
# Temporary bypass for this session
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; npm run dev

# Or run via cmd from PowerShell
cmd /c "npm run dev"
```

The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

```powershell
# TypeScript compile + Vite build
npm run build

# Preview the production build locally
npm run preview
```

The optimized output will be in the `dist/` directory.

## 🎯 Technical Implementation Highlights

### Parallax System Architecture
The parallax engine uses a combination of GSAP ScrollTrigger and mouse-based transforms:

1. **3 Background Layers**: Each section has its own full-screen background image
2. **Scroll-based Opacity**: GSAP timelines fade layers in/out based on scroll position
3. **Scroll-based Transform**: Each layer moves vertically at different speeds (y: 110-140px)
4. **Mouse Parallax**: Real-time mouse tracking adds X/Y transforms (15-35px range)
5. **Extended Coverage**: Layers are 110% × 120% to prevent gaps during movement

### Custom Hooks Pattern
- **`useFontCycle`**: Rotates through 7 fonts every 500ms using `setInterval`
- **`useTextCycle`**: Similar pattern for rotating text content
- **Mouse parallax**: `useState` + `useEffect` with `mousemove` listener
- All hooks return current values for direct use in JSX

### Animation Strategy
- **GSAP**: Heavy scroll-based parallax (precision control, performance)
- **Framer Motion**: Component-level animations (declarative, React-friendly)
- **CSS**: Keyframe animations for bubbles and float effects (hardware-accelerated)

### Performance Optimizations
- `will-change: transform, opacity` on animated elements
- Extended background coverage (110% × 120%) prevents render gaps
- Hardware-accelerated CSS animations (`transform`, `opacity` only)
- Debounced mouse events with GSAP's smooth easing
- Lazy loading with `whileInView` for off-screen elements

## 🎨 Design Tokens & Color System

The site uses CSS custom properties defined in `index.css`:

```css
--miku-teal: #2effdd
--miku-foreground: #e6f7ff
--miku-muted: rgba(230, 247, 255, 0.7)
--miku-border: rgba(46, 255, 211, 0.2)
```

Neon color shift animation cycles through:
- `#2effdd` → `#5dffe6` → `#8cffe9` → `#b4fff0` (soft teal gradient)

## 🙌 Credits & Attributions

| Resource | Credit / License | Notes |
|----------|------------------|-------|
| **Animation Engine** | [GSAP by GreenSock](https://greensock.com/) (Standard License) | Powers the multi-layer parallax system and scroll triggers. |
| **React Animation** | [Framer Motion](https://www.framer.com/motion/) (MIT) | Component-level animations and transitions. |
| **Fonts** | Google Fonts (Various SIL Open Font Licenses) | 7 custom fonts for dynamic text cycling. |
| **Hatsune Miku IP** | © Crypton Future Media, Inc. | Character name and branding used for educational purposes. |
| **Background Images** | Various sources | Curated for aesthetic consistency (educational use). |
| **Framework & Tooling** | React, TypeScript, Vite, Sass | Core development stack. |
| **Inspiration and styles** | https://www.est-est.co.jp/ and https://hadaka.jp/ | These Japanese websites have the best looking parallax effect I ever saw. Striving to make something similar or better one day. |

## ⚖️ Disclaimer

This is a student project created for educational purposes as part of the Front-End Framework course at our University. It is **not** affiliated with, endorsed by, or sponsored by Crypton Future Media, Inc. or any related entities.

**Hatsune Miku** is a registered trademark of **Crypton Future Media, Inc.** All rights to the character name, likeness, and associated branding belong to their respective owners.

All assets were used strictly for non-commercial academic demonstration and learning purposes. If you are the owner of any referenced intellectual property and would like attribution adjusted or assets removed, please open an issue and it will be addressed promptly.

---