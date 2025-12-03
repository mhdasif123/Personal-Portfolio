# Portfolio Deployment Checklist

## ✅ Before Deployment - Update These Files

### 1. Personal Information
- [ ] `public/profile.jpg` - Replace with your actual photo
- [ ] `public/resume.pdf` - Replace with your actual resume PDF

### 2. Contact Information (`components/Contact.tsx`)
- [ ] Update email address (line with `mailto:`)
- [ ] Update phone number (line with `tel:+1234567890`)
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL

### 3. Hero Section (`components/Hero.tsx`)
- [ ] Verify your title is correct
- [ ] Update years of experience if needed

### 4. About Section (`components/About.tsx`)
- [ ] Customize your bio/description

### 5. Experience Section (`components/Experience.tsx`)
- [ ] Replace with your actual work experience
- [ ] Update company names
- [ ] Update job titles and dates
- [ ] Update achievements

### 6. Projects Section (`components/Projects.tsx`)
- [ ] Replace sample projects with your real projects
- [ ] Update live demo links
- [ ] Update GitHub repository links
- [ ] Update project descriptions and tech stacks

### 7. Education Section (`components/Education.tsx`)
- [ ] Update university/college name
- [ ] Update degree name
- [ ] Update graduation dates

### 8. Certifications Section (`components/Certifications.tsx`)
- [ ] Add your actual certifications
- [ ] Update certificate links
- [ ] Update issuer names and dates

### 9. Skills Section (`components/Skills.tsx`)
- [ ] Verify all skills are accurate
- [ ] Add/remove skills as needed

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your portfolio repository
6. Click "Deploy"
7. Done! Your site is live in 2 minutes

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign in with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Click "Deploy"

### Option 3: Build for Production
```bash
npm run build
npm start
```

## 🔍 Final Checks
- [ ] All links work correctly
- [ ] Resume downloads properly
- [ ] Profile photo displays correctly
- [ ] Mobile responsive (test on phone)
- [ ] All sections display properly
- [ ] Contact form styled correctly
- [ ] Scroll to top button works
- [ ] No console errors in browser

## 📝 Post-Deployment
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Share link with friends for feedback
- [ ] Add portfolio link to your resume
- [ ] Add portfolio link to LinkedIn profile

## 🔄 Future Updates
To update your live portfolio:
1. Edit files locally
2. Run `git add .`
3. Run `git commit -m "Update portfolio"`
4. Run `git push`
5. Vercel/Netlify auto-deploys in 1-2 minutes!
