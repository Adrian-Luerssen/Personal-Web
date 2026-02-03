# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page personal CV website for Adrian Luerssen Medina, a Backend Engineer and Data Scientist. It's a static site built with vanilla HTML, CSS, and JavaScript with no build tools or dependencies (except Google Fonts CDN).

**Tech Stack**: Pure HTML5, CSS3, vanilla JavaScript
**Deployment Target**: GitHub Pages (or any static hosting)
**Design Philosophy**: Premium dark theme with emerald green pipeline aesthetics, featuring a Git-style branching timeline to visualize parallel work/education activities

## Development Workflow

### Running Locally

Simply open `index.html` in a browser, or for live reload:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

### Deployment

This site deploys to GitHub Pages:
1. Push to GitHub repository
2. Enable GitHub Pages in Settings → Pages
3. Deploy from `main` branch, root directory
4. Site available at `https://username.github.io/repository-name`

## Architecture

### File Structure
- **index.html**: Complete single-page website with 5 sections (Hero, About, Experience, Expertise, Contact)
- **styles.css**: All styling including responsive breakpoints, animations, and CSS custom properties
- **script.js**: Vanilla JavaScript for interactions (scroll animations, form handling, parallax effects)

### Design System (CSS Custom Properties)

All colors, spacing, and transitions are defined as CSS variables in `:root` (styles.css:1-17):

**Key Variables**:
- `--accent-primary: #10b981` (emerald green) - Primary brand color for pipeline/work theme
- `--accent-secondary: #059669` (forest green) - Secondary accent
- `--accent-gradient` - Green gradient used for CTAs and work tracks
- `--bg-primary: #0a0a0a` - Main background (deep black)
- `--text-secondary: #a0a0a0` - Body text color
- Education items use blue (`#3b82f6`) to distinguish from work items

**When changing brand colors**, only update these variables to maintain consistency throughout the site.

### Layout System

- **Container**: 1200px max-width with 2rem padding
- **Section Spacing**: 8rem (128px) vertical padding between sections
- **Responsive Breakpoints**:
  - Desktop: 1200px+
  - Tablet: 768-1199px (defined at styles.css:540)
  - Mobile: <768px (defined at styles.css:563)

### Section Structure

Each section follows this pattern in index.html:

```html
<section id="section-id" class="section-class">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Label</span>
            <h2 class="section-title">Title</h2>
        </div>
        <!-- Section content -->
    </div>
</section>
```

**Key Sections**:
1. **Hero**: Full-height intro with CTA buttons and animated pipeline visualization showing Data → Process → Insights flow with particles
2. **About**: Two-column grid with professional summary and GPA statistics (MSc: 9.5, BSc: 8.8)
3. **Journey** (Experience + Education merged): Git-style branching timeline visualization showing parallel work and education activities
4. **Expertise**: 2x2 grid of cards focused on data pipeline engineering, backend development, database architecture, and data science
5. **Projects**: Notable projects including BCome LCA automation, RETABIT pipeline, and RGF data analysis
6. **Contact**: Two-column with contact info + form

### Animation System

All animations use **IntersectionObserver API** (script.js:33-70) for performance:

- **Fade-in on scroll**: Sections animate when entering viewport
- **Git timeline nodes**: Each node animates in with `nodeAppear` animation
- **Pipeline flow**: Animated particles flowing through the hero pipeline visualization
- **Parallax**: Hero section has parallax scrolling effect
- **Hover effects**: Cards scale and change border color

**Performance Note**: Animations use `transform` and `opacity` (GPU-accelerated) rather than layout properties.

### Git-Style Timeline Architecture

The Journey section uses a unique Git network graph visualization (`.git-timeline`):

- **SVG Branch Lines**: Color-coded branches (green for work, blue for education) showing parallel activities
- **Positioned Nodes**: Cards positioned at different horizontal offsets (25%, 45%, 67%) to prevent overlap
- **Vertical Spacing**: 200-350px between nodes for clear separation
- **Timeline Height**: 2000px container with responsive adjustments
- **Branch Visualization**: Shows when activities start, run in parallel, and merge
- **Node Cards**: `.node-card` elements with `.work-card` or `.edu-card` classes, containing position details and tech tags

**Implementation Details**:
- Main timeline line runs down the left at 15% horizontal position
- Work branches extend to 30% horizontal position (green)
- Education branches extend to 55% and 80% horizontal positions (blue)
- Cards positioned absolutely with inline styles for precise placement
- Responsive mode simplifies to single column on mobile

## Common Editing Tasks

### Updating Personal Information

**Contact Details** (index.html:236-247):
- Email: line 236
- LinkedIn: line 240
- GitHub: line 244

**Hero Section** (index.html:28-52):
- Name: line 32
- Subtitle/Title: line 34
- Description: lines 35-37

**About Section** (index.html:63-72):
- Professional summary text
- Statistics (lines 73-86): Update numbers and labels

**Experience Timeline** (index.html:105-160):
Each experience is a `.timeline-item` with:
- Date range
- Job title
- Company name
- Description
- Technology tags

### Adding a Professional Photo

Replace the image placeholder (index.html:88-92):

```html
<!-- Current placeholder -->
<div class="image-placeholder">
    <span>Professional Photo</span>
</div>

<!-- Replace with -->
<img src="profile.jpg" alt="Adrian Luerssen Medina"
     style="width: 100%; border-radius: 16px; border: 1px solid var(--border-color);">
```

Recommended dimensions: 600x800px (3:4 ratio), <200KB optimized JPG/WebP

### Changing Brand Colors

Current theme uses green for pipeline/data engineering aesthetic. Update CSS variables in styles.css:2-16. Common color scheme alternatives:

```css
/* Current - Green/Emerald (Pipeline theme) */
--accent-primary: #10b981;
--accent-secondary: #059669;

/* Blue/Cyan */
--accent-primary: #06b6d4;
--accent-secondary: #0284c7;

/* Orange/Red */
--accent-primary: #f97316;
--accent-secondary: #dc2626;
```

Note: Education tracks use hardcoded blue (`#3b82f6`) for visual distinction - search and replace if changing theme.

### Modifying the Git Timeline

The timeline in the Journey section is **dynamically generated from a data array** in `script.js`. This ensures scalability and prevents layout issues.

**To add/modify timeline entries**:

1. **Edit the `timelineData` array** in `script.js` (around line 220)
2. **Add a new object** with this structure:

```javascript
{
    type: 'work',  // or 'education'
    startDate: '2024-10',  // Format: YYYY-MM
    endDate: 'present',    // Format: YYYY-MM or 'present'
    title: 'Position Title',
    organization: 'Company Name',
    description: 'Detailed description of the role and achievements.',
    tags: ['Technology 1', 'Technology 2', 'Technology 3'],
    logo: '🏢'  // Emoji or path to image file
}
```

3. **The system automatically**:
   - Sorts entries by date (newest first)
   - Calculates vertical spacing (280px between items)
   - Assigns horizontal positions based on type
   - Prevents overlaps when multiple items run concurrently
   - Generates SVG branch lines
   - Creates hover interactions

**How it works**:
- Work items prefer left positions (25%, 45%, 65%)
- Education items prefer right positions (50%, 70%)
- Algorithm checks for vertical overlap and adjusts horizontally
- Handles unlimited concurrent experiences automatically
- Each entry shows logo + preview, expands on hover to show full details

**Logo options**:
- Use emoji for quick placeholder: `logo: '🏢'`
- Use image path for company logos: `logo: '/assets/company-logo.png'`
- Recommended size: 48x48px for images

### Projects Section Layout

Projects use a 2-column grid (styles.css `.projects-grid`):
- Maximum 2 projects per row for proper card width
- If odd number (3 projects), the last one spans both columns and centers
- Each card maintains ~480px width for readability
- Cards include: header with title/badge, description, impact highlight, and tech tags

### Enabling Contact Form Submission

Currently the form shows a success message (script.js:155-177) but doesn't send emails. To enable:

**Option A - Formspree** (simplest):
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B - Netlify Forms** (if deploying to Netlify):
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
```

**Option C - Custom backend**: Build separate API with SendGrid/AWS SES

## JavaScript Features

Key interactive features in script.js:

1. **Smooth scroll navigation** (lines 1-13): Anchor links scroll smoothly to sections
2. **Navbar scroll effect** (lines 15-31): Background opacity increases when scrolling
3. **Scroll animations** (lines 33-70): Fade-in sections on viewport entry
4. **Timeline stagger** (lines 73-88): Experience items animate with delay
5. **Form handler** (lines 155-177): Client-side success message
6. **Parallax effect** (lines 180-187): Hero content moves on scroll
7. **Active nav highlighting** (lines 190-206): Current section highlighted in nav
8. **Cursor follower** (lines 209-252): Custom cursor effect on desktop

## Browser Compatibility

Requires modern browsers (latest Chrome, Firefox, Safari, Edge) for:
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- IntersectionObserver API
- Smooth scroll behavior

No polyfills included. IE11 not supported.

## Performance Characteristics

- **No build step**: Direct file editing
- **No dependencies**: Only Google Fonts (can be self-hosted for full control)
- **GPU-accelerated animations**: Using transform/opacity
- **Efficient scroll**: IntersectionObserver instead of scroll listeners
- **Lightweight**: ~40KB total (HTML + CSS + JS uncompressed)

## SEO and Meta Tags

Basic meta tags present (index.html:4-7). For enhanced SEO, consider adding:
- Open Graph tags for social sharing
- Structured data (JSON-LD for Person/ProfilePage)
- Sitemap (single page, so optional)
- robots.txt

## Documentation Files

- **README.md**: Project overview and deployment instructions
- **DESIGN.md**: Complete design system, color palette, typography scale, animation principles
- **QUICKSTART.md**: 10-minute setup guide for quick deployment
- **GITHUB_SETUP.md**: Detailed GitHub repository and Pages setup
- **MOCKUP_IMAGES_GUIDE.md**: Guide for creating professional photos and graphics

## Content Guidelines

When updating content:
- **Hero description**: Keep to 2-3 sentences, focus on backend engineering + data science expertise
- **About section**: Lead paragraph should be 2-3 sentences, followed by 1 supporting paragraph
- **Journey timeline**: Use action verbs, quantify achievements where possible. Always include tech tags.
- **Expertise cards**: Keep descriptions to 1-2 sentences focused on Airflow, Dagster, NestJS, PostgreSQL, etc.
- **Statistics**: Display actual GPAs (9.5 for MSc, 8.8 for BSc) and years of experience
- **Projects**: Include impact statements with measurable outcomes

## Key Technologies Featured

Adrian's tech stack emphasizes data engineering and backend development:
- **Data Pipelines**: Apache Airflow, Dagster, DBT
- **Backend**: Node.js, TypeScript, NestJS, Python
- **Databases**: PostgreSQL, database schema design
- **Cloud**: AWS deployment and infrastructure
- **Data Science**: Machine Learning, PowerBI, R, predictive analytics
- **Other**: REST APIs, data security, system scalability

## Maintenance

- Update copyright year in footer (index.html:274)
- Refresh experience section quarterly
- Update statistics based on current metrics
- Test on new browser versions periodically
