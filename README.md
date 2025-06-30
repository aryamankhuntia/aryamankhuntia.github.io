# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript. Features dark mode support, smooth scrolling navigation, and interactive project showcases.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Navigation**: Fixed header with smooth scrolling to sections
- **Project Modals**: Click on projects to see detailed information
- **Modern UI**: Clean design with Tailwind CSS and shadcn/ui components
- **Fast Performance**: Built with Vite for optimal loading speeds

## 📁 Project Structure

```
client/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── project-modal.tsx
│   │   └── theme-toggle.tsx
│   ├── pages/            # Page components
│   └── lib/              # Utility functions
├── index.html
└── package.json
```

## 🎨 Customization Guide

### 1. Personal Information

**Update your name and details:**
- `client/index.html` - Update the page title
- `client/src/components/hero-section.tsx` - Replace `[Your Name]` with your actual name
- `client/src/components/about-section.tsx` - Add your personal bio and background
- `client/src/pages/home.tsx` - Update footer with your name

### 2. Profile Picture

Replace the placeholder image in `client/src/components/about-section.tsx`:
```tsx
<img 
  src="path/to/your/photo.jpg" 
  alt="Your name" 
  className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-xl mb-8 border-4 border-white"
/>
```

### 3. Projects

Edit `client/src/components/projects-section.tsx` to showcase your projects:

```tsx
{
  id: "project1",
  title: "Your Project Title",
  description: "Brief description of what your project does",
  image: "https://your-project-image.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  overview: "Detailed explanation of your project...",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  allTechnologies: ["React", "Node.js", "MongoDB", "Express.js"],
  githubUrl: "https://github.com/yourusername/your-repo",
  liveUrl: "https://your-live-demo.com"
}
```

### 4. Contact Information

Update `client/src/components/contact-section.tsx`:
- Replace email addresses with your actual email
- Update GitHub and LinkedIn URLs
- Modify social media links as needed

### 5. Skills Section

Customize the skills in `client/src/components/about-section.tsx`:
```tsx
const skills = [
  { name: "Your Skill", icon: "fab fa-icon", color: "text-color-500" },
  // Add more skills...
];
```

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create a GitHub repository** for your portfolio

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Set source to "GitHub Actions"

3. **Create deployment workflow**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: './dist/public'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v3
```

4. **Update Vite configuration** for GitHub Pages:
   In `vite.config.ts`, add your repository name as the base:

```ts
export default defineConfig({
  base: '/your-repository-name/',
  // ... rest of config
});
```

5. **Push your code** to the main branch and the site will automatically deploy!

### Option 2: Manual Build and Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Push the `dist/public` folder** to the `gh-pages` branch

3. **Configure GitHub Pages** to serve from the `gh-pages` branch

## 🛠️ Development

**Install dependencies:**
```bash
npm install
```

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

## 🎨 Customizing Colors and Themes

The portfolio uses CSS custom properties for theming. Modify colors in `client/src/index.css`:

```css
:root {
  --primary: hsl(207, 90%, 54%);  /* Blue primary color */
  --background: hsl(0, 0%, 100%); /* White background */
  /* ... other colors */
}

.dark {
  --background: hsl(240, 10%, 3.9%); /* Dark background */
  /* ... dark theme colors */
}
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-friendly navigation menu
- Optimized layouts for different screen sizes
- Touch-friendly interactive elements
- Fast loading on mobile connections

## 🔧 Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

## 📄 License

Feel free to use this template for your own portfolio. Attribution is appreciated but not required.

---

**Need help?** Open an issue or check the documentation for the individual components and libraries used.