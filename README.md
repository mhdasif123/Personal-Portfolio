# Portfolio Website

A modern, professional portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 Professional emerald/slate color scheme
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router
- 📄 Resume download functionality
- 🔝 Scroll to top button
- 🎯 Complete sections: Hero, About, Experience, Skills, Certifications, Projects, Education, Contact

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Essential Files to Update:

1. **`public/profile.jpg`** - Your profile photo
2. **`public/resume.pdf`** - Your resume PDF
3. **`components/Contact.tsx`** - Email, phone, LinkedIn, GitHub
4. **`components/Experience.tsx`** - Work history and achievements
5. **`components/Projects.tsx`** - Your projects with live/GitHub links
6. **`components/Education.tsx`** - Degree and university info
7. **`components/Certifications.tsx`** - Your certifications
8. **`components/Skills.tsx`** - Your technical skills
9. **`components/About.tsx`** - Your bio


### Build for Production
```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** SVG (inline)
- **Deployment:** Vercel/Netlify ready

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with photo
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience
│   ├── Skills.tsx          # Technical skills
│   ├── Certifications.tsx  # Certifications
│   ├── Projects.tsx        # Project showcase
│   ├── Education.tsx       # Education background
│   ├── Contact.tsx         # Contact form & info
│   └── ScrollToTop.tsx     # Scroll to top button
├── public/
│   ├── profile.jpg         # Your photo (REPLACE)
│   └── resume.pdf          # Your resume (REPLACE)
└── README.md
```

## ✅ Production Ready

All components are:
- ✅ Error-free
- ✅ TypeScript validated
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Performance optimized


