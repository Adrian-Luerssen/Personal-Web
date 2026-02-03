# Mock-up Images Guide

This guide will help you create or obtain professional images for your CV website.

## Images Needed

### 1. Professional Headshot (Priority: HIGH)
**Location**: About section
**Current**: Placeholder with gray background
**Needed**: Your professional photo

#### Specifications:
- **Dimensions**: 600x800px (portrait, 3:4 ratio)
- **File size**: < 200KB (optimized)
- **Format**: JPG or WebP
- **File name**: `profile.jpg`

#### How to Get It:

**Option A: Professional Photography** (Recommended for best results)
- Hire a professional photographer ($100-300)
- Specify you need business/corporate headshots
- Request high-resolution files

**Option B: Self-Photo with Good Setup**
1. Use a modern smartphone camera (12MP+)
2. Find a plain wall (white, gray, or dark)
3. Use natural window light or soft indoor lighting
4. Position camera at eye level
5. Use portrait mode for background blur
6. Take multiple shots and choose the best

**Option C: AI-Enhanced Photos**
- Services like [Remini](https://remini.ai/), [Let's Enhance](https://letsenhance.io/)
- Upload a good-quality selfie
- Use AI to enhance and professionalize it

#### Photo Style Guidelines:
- ✅ Clean, professional attire (business casual or formal)
- ✅ Solid, neutral background
- ✅ Good lighting on face
- ✅ Friendly, confident expression
- ✅ Looking at camera
- ❌ No busy backgrounds
- ❌ No casual/vacation photos
- ❌ No group photos
- ❌ No heavy filters

### 2. Hero Section Graphics (Priority: MEDIUM)
**Location**: Hero section background elements
**Current**: Gradient geometric shape
**Optional Enhancement**: Tech-themed visuals

#### Option A: Data Visualization Screenshots
Create visualizations of your work:

**Tools**:
- Python with Matplotlib/Seaborn/Plotly
- Tableau
- Power BI
- Observable

**Ideas**:
```python
# Example: Create a beautiful data viz
import matplotlib.pyplot as plt
import numpy as np

# Set dark theme
plt.style.use('dark_background')

# Create visualization
fig, ax = plt.subplots(figsize=(8, 8), facecolor='#0a0a0a')
# ... your visualization code ...

# Save as PNG
plt.savefig('hero-visual.png', dpi=300, transparent=True,
            facecolor='#0a0a0a')
```

#### Option B: Abstract Tech Graphics

**Free Design Tools**:
- [Figma](https://figma.com) - Professional design tool
- [Canva](https://canva.com) - Easy templates
- [Photopea](https://photopea.com) - Free Photoshop alternative

**Design Ideas**:
1. **Network Diagrams**: Connected nodes and edges
2. **Pipeline Flows**: Boxes and arrows showing data flow
3. **Code Snippets**: Syntax-highlighted code on dark background
4. **Geometric Patterns**: Abstract shapes with gradients

**Color Scheme** (match website):
- Background: `#0a0a0a`
- Primary: `#6366f1` (indigo)
- Secondary: `#8b5cf6` (purple)
- Accent: `#ffffff` (white)

#### Option C: Free Stock Images

**Recommended Sites**:
- [Unsplash](https://unsplash.com) - Search: "data", "technology", "code"
- [Pexels](https://pexels.com) - High-quality free photos
- [Pixabay](https://pixabay.com) - Vector graphics available

**Search Terms**:
- "data visualization"
- "abstract technology"
- "code programming"
- "digital network"
- "geometric pattern"

### 3. Project Thumbnails (Priority: LOW)
**Only needed if you add a projects section**

#### How to Create:

**For Code Projects**:
1. Take screenshot of your project running
2. Capture interesting part (dashboard, results, UI)
3. Add subtle border/shadow in image editor
4. Resize to 800x600px

**For Data Projects**:
1. Export main visualization/chart
2. Add title overlay with semi-transparent background
3. Include key metrics or results

**For Infrastructure Projects**:
1. Create architecture diagram
2. Use tools like [Draw.io](https://draw.io), [Lucidchart](https://lucidchart.com)
3. Export as high-res PNG

## Image Optimization

After creating/obtaining images, optimize them:

### Online Tools:
- [TinyPNG](https://tinypng.com) - Compress PNG/JPG (up to 80% smaller)
- [Squoosh](https://squoosh.app) - Google's image optimizer
- [Optimizilla](https://imagecompressor.com) - Batch compression

### Command Line (Advanced):
```bash
# Install imagemagick
# Then optimize:

# Resize and compress profile photo
magick profile-original.jpg -resize 600x800 -quality 85 profile.jpg

# Convert to WebP (better compression)
magick profile.jpg -quality 85 profile.webp
```

### Target Sizes:
- Profile photo: < 200KB
- Hero graphics: < 150KB
- Project thumbnails: < 100KB each

## Adding Images to the Website

### Profile Photo:

1. Save your photo as `profile.jpg` in the project root
2. Update `index.html` in the About section:

```html
<!-- Replace the placeholder div -->
<div class="about-image">
    <img src="profile.jpg" alt="Adrian Luerssen Medina"
         style="width: 100%; border-radius: 16px; border: 1px solid var(--border-color);">
</div>
```

### Hero Background:

1. Save graphic as `hero-visual.png`
2. Update `styles.css`:

```css
.floating-card {
    /* Add background image */
    background-image: url('hero-visual.png');
    background-size: cover;
    background-position: center;
    /* Keep existing gradient as fallback */
    background-color: rgba(99, 102, 241, 0.1);
}
```

### Responsive Images (Advanced):

For better performance, use responsive images:

```html
<picture>
    <source srcset="profile.webp" type="image/webp">
    <source srcset="profile.jpg" type="image/jpeg">
    <img src="profile.jpg" alt="Adrian Luerssen Medina" loading="lazy">
</picture>
```

## Quick Start: Minimum Viable Images

**If you want to launch quickly**, you only need:

1. **Professional Headshot** - Essential for credibility
   - Get a good photo taken ASAP
   - Can even use a well-lit smartphone selfie initially
   - Plan to upgrade to professional photo later

2. **Everything else is optional** - The site looks great with just the gradients and placeholders

## AI-Generated Mockups (Creative Option)

You can use AI image generators for abstract tech graphics:

### Tools:
- [Midjourney](https://midjourney.com) (paid)
- [DALL-E 3](https://openai.com/dall-e-3) (via ChatGPT Plus)
- [Stable Diffusion](https://stablediffusion.fr/) (free, local)

### Example Prompts:
```
"Abstract data visualization, network nodes connected by glowing lines,
dark background, purple and blue gradients, minimalist, high tech, 4k"

"Geometric tech pattern, interconnected hexagons, circuit board aesthetic,
dark theme with indigo and purple accents, clean modern design"

"Data pipeline visualization, flowing streams of data, abstract tech art,
dark background, blue and purple lighting, professional"
```

## Checklist

Before considering images "done":

- [ ] Profile photo is professional and well-lit
- [ ] Image is properly sized (600x800px)
- [ ] File size is optimized (< 200KB)
- [ ] Photo shows you clearly and professionally
- [ ] Image file is added to project directory
- [ ] HTML is updated to reference the image
- [ ] Website is tested with images loaded
- [ ] Images look good on mobile devices
- [ ] Optional graphics enhance (not distract from) content

## Need Help?

### Free Resources:
- [Canva Photo Editor](https://www.canva.com/photo-editor/) - Edit and enhance photos
- [Remove.bg](https://remove.bg) - Remove backgrounds automatically
- [Photopea](https://photopea.com) - Free Photoshop alternative

### Tutorials:
- [How to Take Professional Headshots](https://www.youtube.com/results?search_query=diy+professional+headshot)
- [LinkedIn Profile Photo Tips](https://business.linkedin.com/talent-solutions/blog/product-tips/2017/12-tips-for-the-perfect-linkedin-profile-picture)

---

Remember: **Content > Images**. It's better to launch with a placeholder and great content than to delay for perfect images. You can always update images later!
