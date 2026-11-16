# Ajit - Personal Portfolio Website

A modern, minimal, responsive personal portfolio website designed for **Ajit**, a 3rd-year Information Science and Engineering (ISE) student and aspiring software developer.

Built with **React 19**, **Tailwind CSS**, **Vite**, and **Lucide Icons**.

---

## ✨ Features & Design Highlights

- **Dark Navy / Black Theme**: Elegant deep palette (`#07090e` / `#0b0f19`) with subtle blue and purple gradient accents and ambient lighting glows.
- **Modern Typography & Whitespace**: Styled with *Plus Jakarta Sans* and *JetBrains Mono* for a clean developer aesthetic.
- **Fully Responsive**: Flawless experience across mobile phones, tablets, and high-res desktops with a mobile navigation drawer.
- **Smooth Animations & Interactions**:
  - Interactive skill category filters
  - Project category filters (All, Full Stack, Frontend, Tools & Systems)
  - Active scroll spy in navbar
  - One-click copy email button with instant feedback
  - Interactive contact form with client-side validation and simulated dispatch
  - Smooth scroll to top button
- **Clean Architecture & Reusable Components**: Modular component structure (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Education`, `Contact`, `Footer`).
- **Centralized Data Configuration**: All personal info, skills, projects, education, and links are kept in `src/data/portfolioData.js` for instant customization without touching JSX or CSS.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🛠️ How to Customize Your Portfolio

All your data is conveniently stored in a single file:  
👉 **`src/data/portfolioData.js`**

### 1. Personal Information & Links
In `src/data/portfolioData.js`, update:
```javascript
export const personalInfo = {
  name: "Ajit",
  fullName: "Ajit",
  role: "Aspiring Software Developer & Tech Enthusiast",
  email: "your.real.email@gmail.com",
  location: "Bengaluru, India",
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://x.com/your-username",
    email: "mailto:your.real.email@gmail.com",
  },
  // ...
};
```

### 2. Profile Photo
To use your real photo instead of the avatar monogram:
1. Place your photo (e.g. `profile.jpg`) in the `public/` directory (e.g. `public/profile.jpg`).
2. In `src/components/Hero.jsx`, replace the monogram SVG div with:
```jsx
<img 
  src="/profile.jpg" 
  alt="Ajit" 
  className="w-full h-full object-cover rounded-xl"
/>
```

### 3. Skills
Add or edit skills directly in the `skillCategories` array in `src/data/portfolioData.js`:
- Programming Languages
- Web Development
- Database Management
- Tools & Technologies

### 4. Projects
Update titles, descriptions, tech stacks, GitHub links, and live demo URLs in `projectsData` in `src/data/portfolioData.js`.

### 5. Education
Update your college name, graduation batch, GPA/percentage, and coursework in `educationData` in `src/data/portfolioData.js`.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg          # Custom developer monogram favicon
│   └── ...
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── Navbar.jsx       # Blurred glass navigation with active link tracking
│   │   ├── Hero.jsx         # Hero section with intro, CTAs & profile card
│   │   ├── About.jsx        # About me narrative, 3 pillars & quick edu card
│   │   ├── Skills.jsx       # 4 skill categories with filter buttons
│   │   ├── Projects.jsx     # Modern cards with tags, GitHub & Demo links
│   │   ├── Education.jsx    # 3rd Year ISE timeline, coursework & achievements
│   │   ├── Contact.jsx      # Direct links, copy email & validated form
│   │   ├── Footer.jsx       # "Designed & Built by Ajit ❤️" + back-to-top
│   │   └── Icons.jsx        # SVG brand icons (GitHub, LinkedIn, Twitter/X)
│   ├── data/
│   │   └── portfolioData.js # Centralized configuration for all portfolio content
│   ├── App.css              # Custom animations
│   ├── App.jsx              # Main App layout
│   ├── index.css            # Tailwind CSS v4 & custom styles
│   └── main.jsx             # React root entry
├── index.html               # SEO metadata, Open Graph tags & Google fonts
├── package.json
└── vite.config.js           # Vite + Tailwind v4 configuration
```

---

## 🌐 Deployment

You can deploy this portfolio in seconds:

### Deploy on Vercel:
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

### Deploy on Netlify:
1. Drag and drop the `dist/` folder into Netlify Drop, or link your GitHub repo.
2. Build command: `npm run build`. Publish directory: `dist`.

---

Designed & Built with ❤️ for **Ajit**.
