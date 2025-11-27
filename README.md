# 🌟 Marketing Website - Dark Theme Edition

A stunning, modern marketing website built with React and Tailwind CSS featuring an attractive dark theme with vibrant gradients, smooth animations, and professional design.

![Marketing Website](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

### 🎨 **Stunning Dark Theme**
- **Deep Navy Backgrounds** - Professional dark color scheme (`#1a1d2e`, `#2f4373`)
- **Vibrant Gradients** - Eye-catching indigo → magenta → cyan color flows
- **Glowing Effects** - Neon-like shadows and border glows on hover
- **Glassmorphism** - Modern backdrop-blur effects throughout
- **Animated Orbs** - Pulsing gradient background elements

### 🚀 **Modern Tech Stack**
- React 18 with functional components & hooks
- Vite for lightning-fast development
- Tailwind CSS with custom dark theme configuration
- Fully responsive design (mobile, tablet, desktop)
- No backend required - pure static site

### 🎭 **Interactive Components**
- Smooth scroll navigation
- Hover animations with glowing shadows
- Mobile hamburger menu with smooth transitions
- Carousel testimonials on mobile
- Interactive contact form with success state
- Gradient buttons with hover effects

### 📱 **Complete Sections**
1. **Navbar** - Sticky navigation with glassmorphism effect
2. **Hero** - Bold intro with animated background & stats
3. **About** - Two-column layout with expertise tags
4. **Services** - 6 service cards with hover glow
5. **Portfolio** - Project showcase with gradient cards
6. **Testimonials** - Client reviews (responsive carousel)
7. **Process** - 4-step workflow with gradient timeline
8. **Contact** - Vibrant form section with gradient background
9. **Footer** - Dark footer with glowing social icons

## 🎨 Color Palette

```javascript
Primary (Indigo):   #6366f1 → #4f46e5 → #4338ca
Accent (Magenta):   #d946ef → #c026d3 → #a21caf
Cyan (Electric):    #22d3ee → #06b6d4 → #0891b2
Dark Backgrounds:   #1a1d2e → #2f4373 → #364e8c
```

## 📦 Quick Start

### Installation
```bash
# Clone the repository
git clone https://github.com/dishusingla001/Viral_view.git
cd marketing-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your site! 🎉

### Build for Production
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Customization Guide

### Update Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary color shades */ },
  accent: { /* Your accent color shades */ },
}
```

### Replace Content
1. **Brand Name**: Update "YourBrand" in `Navbar.jsx` and `Footer.jsx`
2. **Hero Text**: Edit headline and description in `Hero.jsx`
3. **About Section**: Replace bio and skills in `About.jsx`
4. **Services**: Customize service offerings in `Services.jsx`
5. **Portfolio**: Add real projects in `Portfolio.jsx`
6. **Testimonials**: Include actual client reviews in `Testimonials.jsx`
7. **Contact Info**: Update email/phone in `Contact.jsx` and `Footer.jsx`

### Add Real Images
Replace emoji placeholders:
- **Hero**: Professional marketing dashboard or brand visual
- **About**: Your professional headshot
- **Portfolio**: Project screenshots or mockups

Simply update the placeholder `<div>` elements with `<img>` tags.

## 🌐 Deployment

### Deploy to Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to netlify.com
```

Or use Netlify CLI:
```bash
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
npm run build
vercel --prod
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with base path
2. Run: `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Library | 18.2.0 |
| Vite | Build Tool | 5.0.8 |
| Tailwind CSS | Styling | 3.4.0 |
| PostCSS | CSS Processing | 8.4.32 |
| Autoprefixer | CSS Vendor Prefixing | 10.4.16 |

## 📁 Project Structure

```
marketing-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation with mobile menu
│   │   ├── Hero.jsx          # Hero section with CTA
│   │   ├── About.jsx         # About section
│   │   ├── Services.jsx      # Services cards
│   │   ├── Portfolio.jsx     # Project showcase
│   │   ├── Testimonials.jsx  # Client testimonials
│   │   ├── Process.jsx       # Work process
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer section
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/                    # Static assets
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## 🎯 Key Features Explained

### Dark Theme Implementation
- Custom color palette in Tailwind config
- Gradient backgrounds with blur effects
- Glowing shadows using `box-shadow` with color opacity
- Glassmorphism with `backdrop-blur` utilities

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Hamburger menu for mobile navigation
- Carousel view for mobile testimonials
- Stacked layouts on small screens

### Animations
- Smooth scroll with `scroll-behavior: smooth`
- CSS transitions on all interactive elements
- Hover effects with scale and shadow transforms
- Gradient animations on background orbs

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is free to use and modify for personal or commercial purposes.

## 💡 Tips

- Update meta tags in `index.html` for SEO
- Connect contact form to EmailJS or Formspree
- Add Google Analytics for tracking
- Optimize images before deploying
- Consider adding a blog section

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)

---

**Built with** 💜 **for modern marketing professionals**

🌟 If you found this useful, please star the repo!
