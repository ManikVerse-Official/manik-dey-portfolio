# Professional Developer Portfolio

A modern, production-quality personal developer portfolio website built with React, Vite, and Tailwind CSS. This portfolio is designed to showcase web development skills, projects, and services with a premium software agency aesthetic.

## Features

- **Modern Design**: Premium dark theme with blue/purple accents, following current design trends
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Complete with meta tags, Open Graph, and structured data
- **Performance Focused**: Lightweight build with lazy loading and optimized assets
- **Easy Customization**: Centralized configuration files for easy content updates
- **Analytics Ready**: Google Analytics 4 integration support
- **Production Ready**: Deployable to Vercel, Netlify, and other platforms

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **JavaScript** - Language

## Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and deploy
4. No additional configuration needed

### Netlify

1. Run `npm run build` locally
2. Drag and drop the `dist/` folder to Netlify
3. Or connect to Git for automatic deployments

### Other Platforms

The `dist/` folder contains all static files and can be deployed to any static hosting service.

## Customization Guide

### Profile Information

Update your personal information in `src/data/siteConfig.js`:

```javascript
export const siteConfig = {
  name: "Your Name",
  title: "Web & App Developer | AI-Assisted Development",
  description: "Your professional description",
  url: "https://yourportfolio.com",
  location: "Your Location",
  // ... other config
};
```

### Profile Photo

1. Place your profile photo in `public/assets/profile/`
2. Name it `profile.jpg` (or your preferred format)
3. Supported formats: JPG, JPEG, PNG, SVG, WebP
4. Update the path in `src/data/siteConfig.js` if needed:

```javascript
profile: {
  image: "/assets/profile/profile.jpg",
  alt: "Professional profile photo"
}
```

### Contact Information

Update contact details in `src/data/contact.js`:

```javascript
export const contact = {
  email: "your@email.com",
  phone: "+1234567890",
  whatsapp: "1234567890",
  location: "Your Location"
};
```

### Social Media Links

Update social links in `src/data/socialLinks.js`:

```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
  facebook: "https://facebook.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  whatsapp: "https://wa.me/1234567890",
  email: "mailto:your@email.com"
};
```

**Note**: Leave a field empty (`""`) to hide that social icon automatically.

### Adding Projects

1. Create a new folder in `public/assets/projects/your-project-name/`
2. Add your project assets:
   - `cover.jpg` (required)
   - `demo.mp4` (optional)
   - `screenshot-1.jpg`, `screenshot-2.jpg`, etc. (optional)

3. Add the project to `src/data/projects.js`:

```javascript
{
  id: "your-project-name",
  title: "Your Project Title",
  shortDescription: "Brief description for project card",
  fullDescription: "Detailed description for project modal",
  category: "Web Application",
  technologies: ["React", "Node.js", "MongoDB"],
  image: "/assets/projects/your-project-name/cover.jpg",
  video: "/assets/projects/your-project-name/demo.mp4",
  screenshots: [
    "/assets/projects/your-project-name/screenshot-1.jpg",
    "/assets/projects/your-project-name/screenshot-2.jpg"
  ],
  github: "https://github.com/yourusername/repo",
  liveDemo: "https://yourproject.com",
  featured: true,
  features: ["Feature 1", "Feature 2"],
  role: "Your Role",
  outcome: "Project outcome description"
}
```

### Skills

Update skills in `src/data/skills.js`:

```javascript
export const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    // ... more skills
  ],
  backend: [
    // ... backend skills
  ],
  // ... other categories
};
```

### Tools

Add tool logos to `public/assets/tools/` and update `src/data/tools.js`:

```javascript
{
  name: "Tool Name",
  icon: "/assets/tools/toolname.svg",
  description: "Tool description"
}
```

**Note**: If no icon is provided, a fallback letter will be displayed.

### Services

Update services in `src/data/services.js`:

```javascript
{
  name: "Service Name",
  description: "Service description",
  icon: "IconName"
}
```

### Experience

Update experience in `src/data/experience.js`:

```javascript
{
  title: "Your Job Title",
  company: "Company Name",
  location: "Location",
  period: "March 2026 - Present",
  description: "Your job description"
}
```

### Education

Update education in `src/data/education.js`:

```javascript
{
  degree: "Your Degree",
  institution: "Your University",
  location: "Location",
  period: "Year - Year",
  description: "Brief description"
}
```

### SEO

Update SEO metadata in `index.html`:

```html
<title>Your Title</title>
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords, here">
<!-- Update Open Graph and Twitter cards too -->
```

### Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add it to the `.env` file:

```env
VITE_GA_ID=G-XXXXXXXXXX
```

4. Analytics will automatically load when the ID is present

## Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── profile/          # Profile photo
│       ├── projects/         # Project assets
│       ├── tools/            # Tool logos
│       ├── icons/            # Custom icons
│       └── favicon/          # Favicon files
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Tools.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Services.jsx
│   │   ├── WhyWorkWithMe.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Analytics.jsx
│   ├── data/                 # Centralized data files
│   │   ├── siteConfig.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── tools.js
│   │   ├── socialLinks.js
│   │   ├── contact.js
│   │   ├── services.js
│   │   ├── experience.js
│   │   └── education.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── .env
└── package.json
```

## Performance

The portfolio is optimized for performance:

- **Build Size**: ~240KB (gzipped: ~71KB)
- **Lazy Loading**: Images and videos load only when needed
- **Code Splitting**: Optimized by Vite
- **Minimal Dependencies**: Only essential packages
- **No Heavy Libraries**: No Three.js, GSAP, or similar heavy frameworks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed
- Alt text for images
- Sufficient color contrast
- Reduced motion support

## Responsive Breakpoints

The portfolio is tested and optimized for:
- 320px (small mobile)
- 375px (mobile)
- 390px (mobile)
- 430px (large mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1280px (desktop)
- 1440px (large desktop)
- 1920px (ultra-wide)

## License

This project is for personal portfolio use. Feel free to customize and use it for your own portfolio.

## Support

For issues or questions, please refer to the documentation or create an issue in your repository.

---

Built with React, Vite, and Tailwind CSS. Designed for professional developers.
