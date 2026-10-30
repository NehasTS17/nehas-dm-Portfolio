# Athira SB - Digital Marketing Portfolio Website

A modern, responsive Digital Marketing Portfolio Website built with **Vite + React.js + Tailwind CSS**. Features include dark mode, 5 customizable color themes, smooth animations, and fully responsive design.

## ✨ Features

- ✅ **Modern & Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Dark Mode & Light Mode Toggle** - Seamless theme switching
- ✅ **5 Color Themes** - Blue, Purple, Green, Orange, Pink (easily customizable)
- ✅ **Persistent Storage** - Theme preferences saved to localStorage
- ✅ **Smooth Animations** - Tailwind CSS + custom animations
- ✅ **SEO-Friendly** - Proper meta tags and semantic HTML
- ✅ **Accessible** - ARIA labels and semantic structure
- ✅ **Clean Code** - Reusable components with proper structure
- ✅ **Fast Load Times** - Optimized with Vite

## 📁 Project Structure

```
src/
 ├─ assets/
 │   └─ images/              # Demo images (easily replaceable)
 ├─ components/
 │   ├─ Navbar.jsx          # Navigation with theme switcher
 │   ├─ ThemeSwitcher.jsx    # Dark mode & color theme toggler
 │   ├─ Hero.jsx            # Hero section with CTA
 │   ├─ About.jsx           # About section
 │   ├─ Specializations.jsx # Core specializations
 │   ├─ Services.jsx        # Detailed services listing
 │   ├─ Tools.jsx           # Tools & platforms
 │   ├─ CaseStudies.jsx     # Case studies showcase
 │   ├─ Campaigns.jsx       # Featured campaigns
 │   ├─ Approach.jsx        # My approach methodology
 │   ├─ Certifications.jsx  # Credentials & certifications
 │   ├─ Testimonials.jsx    # Client testimonials carousel
 │   ├─ Contact.jsx         # Contact form & info
 │   └─ Footer.jsx          # Footer with links
 ├─ context/
 │   └─ ThemeContext.jsx     # Theme management with React Context
 ├─ pages/
 │   └─ Home.jsx            # Main home page
 ├─ App.jsx                 # Main app component
 ├─ main.jsx                # React entry point
 └─ index.css               # Global styles with CSS variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm

### Installation

1. **Navigate to the project**
```bash
cd athira-personal-protfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The website will open at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customizing the Portfolio

### 1. **Update Personal Information**

Edit the content in each component file:

- **Hero.jsx** - Update name, title, and introduction
- **About.jsx** - Add your bio and highlights
- **Contact.jsx** - Update email, website, and social links
- **Footer.jsx** - Update social media links and year

### 2. **Replace Demo Images**

1. Add your images to `src/assets/images/`
2. Update image imports in components:

```jsx
import profileImage from '../assets/images/your-image.jpg';
```

3. Replace placeholder image URLs with your actual images

### 3. **Change Color Themes**

Edit `src/index.css` to customize the 5 color themes:

```css
:root[data-theme="custom"] {
  --color-primary: 255, 100, 50;      /* RGB values */
  --color-primary-dark: 230, 80, 30;  /* Darker shade */
  --color-primary-light: 255, 150, 100; /* Lighter shade */
}
```

Then update `src/components/ThemeSwitcher.jsx` to add the new theme.

### 4. **Update Content**

Each component file contains static content that can be easily modified:

- Services, tools, specializations
- Case studies and campaigns
- Testimonials with ratings
- Certifications

### 5. **Add More Sections**

Create new component files in `src/components/` and import them in `src/pages/Home.jsx`

## 🎯 Key Features

### Dark Mode & Theme Implementation

The app uses React Context (`ThemeContext.jsx`) for state management with localStorage persistence.

### CSS Variables for Colors

All colors use CSS custom properties for easy theme switching:

```css
color: rgb(var(--color-primary));
background-color: rgb(var(--color-primary-dark));
```

### Responsive Design

- Mobile-first approach
- Tailwind breakpoints: sm, md, lg, xl
- Fully responsive navigation and components

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your web server

## 🛠️ Technologies Used

- **Vite** - Ultra-fast build tool
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Context API** - State management
- **CSS Custom Properties** - Dynamic theming
- **PostCSS** - CSS processing

## 📝 Content Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Professional background
3. **Specializations** - Core expertise areas
4. **Services** - Detailed service offerings
5. **Tools** - Technologies and platforms
6. **Case Studies** - Portfolio examples
7. **Campaigns** - Featured work
8. **Approach** - Methodology and process
9. **Certifications** - Credentials and achievements
10. **Testimonials** - Client feedback
11. **Contact** - Contact form and information
12. **Footer** - Links and social media

## 🔧 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Styles Not Applying
1. Clear `node_modules` and reinstall
2. Restart dev server

### Images Not Loading
- Check file paths
- Use relative paths from component location
- Verify file extensions

## 💡 Tips

1. Compress images before adding
2. Use high-quality, professional content
3. Test on multiple devices
4. Add Google Analytics for tracking
5. Keep content fresh and updated

---

**Ready to customize and deploy your portfolio!**
