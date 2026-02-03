# Quick Start Guide

Get your CV website live in under 10 minutes!

## What You Have

A complete, professional CV website with:
- ✅ Modern design with smooth animations
- ✅ Fully responsive (works on all devices)
- ✅ Dark theme with indigo/purple accents
- ✅ Git repository initialized with 2 commits
- ✅ Comprehensive documentation

## Immediate Next Steps

### 1. Preview Locally (2 minutes)

Open `index.html` in your browser:
```bash
# Option A: Double-click index.html in File Explorer

# Option B: From terminal
start index.html
```

### 2. Customize Content (5 minutes)

Edit `index.html` to add your real information:

**Update these sections:**
- Hero subtitle (line 28): Your actual title
- Hero description (line 29-31): Your pitch
- About section (lines 57-76): Your story
- Experience timeline (lines 93-162): Your work history
- Contact info (lines 212-223): Your real email/LinkedIn/GitHub

**Save and refresh browser to see changes**

### 3. Create GitHub Repository (3 minutes)

Follow `GITHUB_SETUP.md` for detailed instructions, or:

1. Go to https://github.com/new
2. Create repository named `personal-cv-website`
3. Run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/personal-cv-website.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages (1 minute)

1. Go to repository Settings → Pages
2. Source: Deploy from branch `main` / `root`
3. Save
4. Visit: `https://YOUR_USERNAME.github.io/personal-cv-website`

**Done! Your website is live! 🎉**

## Later Enhancements

Take your time with these:

### Add Your Photo (Priority: HIGH)
- Get a professional headshot
- See `MOCKUP_IMAGES_GUIDE.md` for detailed guide
- Save as `profile.jpg` and update HTML

### Customize Design (Optional)
- Change colors in `styles.css` (see `DESIGN.md`)
- Adjust typography
- Add your brand colors

### Add More Sections (Optional)
- Projects showcase
- Skills/technologies
- Publications/blog posts
- Testimonials

## File Structure

```
personal-web/
├── index.html              ← Main website file (edit this first!)
├── styles.css              ← All styling
├── script.js               ← Animations and interactions
├── README.md               ← Project overview
├── QUICKSTART.md           ← This file
├── DESIGN.md               ← Design guidelines
├── GITHUB_SETUP.md         ← GitHub instructions
├── MOCKUP_IMAGES_GUIDE.md  ← Image creation guide
└── .gitignore              ← Git configuration
```

## Most Common Edits

### Change Accent Color
In `styles.css`, line 2-4:
```css
--accent-primary: #6366f1;  /* Change this color */
--accent-secondary: #8b5cf6;  /* And this one */
```

### Add a New Section
In `index.html`, add between existing sections:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Category</span>
            <h2 class="section-title">Section Title</h2>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Update Contact Form Action
By default, form just shows success message. To actually send emails:

**Option A: Formspree** (Free, easy)
1. Sign up at https://formspree.io
2. Update form action in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms** (If hosting on Netlify)
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

**Option C: Custom Backend**
- Build with Node.js/Express
- Use SendGrid or AWS SES
- Deploy separately

## Troubleshooting

**Problem**: Website looks plain/unstyled
- **Solution**: Make sure `styles.css` and `script.js` are in the same folder as `index.html`

**Problem**: Animations not working
- **Solution**: Check browser console for errors (F12)
- Make sure `script.js` is loaded

**Problem**: GitHub Pages not updating
- **Solution**: Wait 2-5 minutes, then hard refresh (Ctrl + Shift + R)

**Problem**: Mobile layout broken
- **Solution**: Check viewport meta tag exists in `<head>` (it does!)

## Resources

**Making Updates:**
```bash
# After editing files
git add .
git commit -m "Update experience section"
git push
```

**Getting Help:**
- HTML/CSS questions: [MDN Web Docs](https://developer.mozilla.org)
- Git questions: [Git documentation](https://git-scm.com/doc)
- Design inspiration: [Awwwards](https://awwwards.com)

## Success Checklist

- [ ] Website opens in browser
- [ ] Content is updated with my information
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Website is accessible at GitHub URL
- [ ] Shared link with 3 people for feedback
- [ ] Added professional photo (or planned to)
- [ ] Updated contact information is correct

## What Makes This Website Special

This isn't just another CV website. It features:

1. **Premium Design**: $10k agency-level aesthetics
2. **Smooth Animations**: Subtle, professional motion design
3. **Performance**: Fast loading, GPU-accelerated animations
4. **Accessibility**: Semantic HTML, keyboard navigation
5. **Responsive**: Perfect on mobile, tablet, desktop
6. **Modern Stack**: Clean code, best practices
7. **Zero Dependencies**: No bloated frameworks
8. **Easy to Maintain**: Simple HTML/CSS/JS

## Next Level Ideas

Once comfortable:

1. **Custom Domain**: Buy a domain (yourname.com)
2. **Analytics**: Add Google Analytics to track visitors
3. **SEO**: Add meta tags for better Google ranking
4. **Blog**: Add a writing section
5. **CMS**: Connect to a headless CMS for easy updates
6. **API**: Fetch content from external sources
7. **Dark/Light Toggle**: Add theme switcher
8. **i18n**: Add multiple language support

---

**Need help?** Check the other documentation files or open an issue on GitHub.

**Ready to launch?** You've got this! 🚀
