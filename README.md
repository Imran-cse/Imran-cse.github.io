# Imran Hossain - Portfolio Website

A modern, responsive portfolio website built with Astro and Tailwind CSS, showcasing my professional experience, skills, and projects.

## 🚀 Features

- **Modern Design**: Clean, elegant, and professional design
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Astro for optimal speed and SEO
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 🛠️ Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.astro    # Navigation header
│   │   ├── Hero.astro      # Hero section
│   │   ├── About.astro     # About section
│   │   ├── Experience.astro # Experience timeline
│   │   ├── Education.astro # Education & publications
│   │   ├── Skills.astro    # Technical skills
│   │   ├── Contact.astro   # Contact form & info
│   │   └── Footer.astro    # Footer
│   ├── layouts/
│   │   └── Layout.astro    # Main layout
│   ├── pages/
│   │   └── index.astro     # Homepage
│   └── styles/
│       └── global.css      # Global styles
├── public/
│   └── favicon.svg         # Site favicon
└── dist/                   # Built files (generated)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/imran-cse/imran-cse.github.io.git
cd imran-cse.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.astro` - Hero section content
- `src/components/About.astro` - About section content
- `src/components/Experience.astro` - Work experience
- `src/components/Education.astro` - Education and publications
- `src/components/Skills.astro` - Technical skills
- `src/components/Contact.astro` - Contact information
- `src/layouts/Layout.astro` - Meta tags and site title

### Styling

- Global styles: `src/styles/global.css`
- Component-specific styles: Each component has its own styling using Tailwind CSS
- Color scheme: Easily customizable through Tailwind classes

### Images

- Replace the profile image placeholder in `src/components/Hero.astro`
- Add your own favicon in `public/favicon.svg`

## 🚀 Deployment

### GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Push the `dist/` folder contents to your GitHub Pages repository

3. Enable GitHub Pages in your repository settings

### Other Platforms

The built files in the `dist/` directory can be deployed to any static hosting service:

- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance

- **Lighthouse Score**: 100/100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: imran.cse.ku@gmail.com
- **LinkedIn**: [linkedin.com/in/imran1503](https://linkedin.com/in/imran1503)
- **GitHub**: [github.com/imran-cse](https://github.com/imran-cse)

---

Built with ❤️ using Astro and Tailwind CSS
