# Design Guide

## Design Philosophy

This website follows a modern, minimalist aesthetic inspired by high-end design agencies. The design emphasizes:

- **Clean Typography**: Using Inter font family for excellent readability
- **Dark Theme**: Professional dark color scheme with indigo/purple accents
- **Smooth Animations**: Subtle, performant animations that enhance UX
- **Generous Whitespace**: Breathing room that focuses attention
- **Grid-Based Layouts**: Structured, balanced compositions

## Color Palette

### Primary Colors
- **Background Primary**: `#0a0a0a` - Deep black
- **Background Secondary**: `#111111` - Slightly lighter black
- **Card Background**: `#141414` - Card surfaces

### Accent Colors
- **Primary Accent**: `#6366f1` - Indigo blue
- **Secondary Accent**: `#8b5cf6` - Purple
- **Gradient**: Indigo to purple (used for CTAs and highlights)

### Text Colors
- **Primary Text**: `#ffffff` - Pure white for headings
- **Secondary Text**: `#a0a0a0` - Muted gray for body text
- **Tertiary Text**: `#666666` - Dim gray for less important text

### Border & Effects
- **Border Color**: `#222222` - Subtle borders
- **Shadows**: Layered shadows for depth

## Typography Scale

- **Hero Title**: 4.5rem (72px) - Bold, gradient text
- **Section Titles**: 3rem (48px) - Bold
- **Subsection Titles**: 1.5rem (24px) - Semi-bold
- **Body Text**: 1rem (16px) - Regular
- **Small Text**: 0.875rem (14px) - Labels and captions

## Layout Structure

### Grid System
- **Max Width**: 1200px centered container
- **Padding**: 2rem (32px) on sides
- **Section Spacing**: 8rem (128px) vertical padding

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## Animation Principles

### Micro-interactions
- **Hover States**: 0.3s cubic-bezier transitions
- **Scale Transforms**: Subtle 1.02-1.05x scale on hover
- **Color Transitions**: Smooth accent color changes

### Page Animations
- **Fade In**: Elements fade in as they enter viewport
- **Slide In**: Timeline items slide from left
- **Parallax**: Hero section with parallax scrolling
- **Float**: Subtle floating animations for decorative elements

## Mock-up Images Needed

### 1. Professional Headshot
- **Location**: About section
- **Dimensions**: 600x800px (3:4 ratio)
- **Style**: Professional, well-lit, neutral background
- **Format**: JPG or WebP
- **File name**: `profile.jpg`

**Recommendations**:
- Formal business attire or smart casual
- Clean, solid background (dark gray or muted color)
- Good natural lighting
- Professional photographer recommended

### 2. Hero Background Elements (Optional)
- **Location**: Hero section floating cards
- **Dimensions**: 400x400px
- **Style**: Abstract tech visualizations, data graphics, or geometric patterns
- **Format**: PNG with transparency
- **File name**: `hero-visual.png`

**Ideas**:
- Data visualization screenshots
- Code editor screenshots with syntax highlighting
- Abstract geometric shapes
- Network/node diagrams
- Pipeline/workflow visualizations

### 3. Project Thumbnails (If adding projects section)
- **Dimensions**: 800x600px (4:3 ratio)
- **Style**: Screenshots or mockups of your projects
- **Format**: JPG or WebP
- **File names**: `project-1.jpg`, `project-2.jpg`, etc.

**Content**:
- Dashboard screenshots
- Architecture diagrams
- Before/after optimization graphs
- Pipeline visualizations

## Design Inspirations

This design draws inspiration from:

1. **Apple's Product Pages**: Clean, minimalist, focus on content
2. **Stripe's Website**: Smooth animations, modern gradients
3. **Linear App**: Sharp typography, dark theme, subtle interactions
4. **Vercel**: Technical aesthetic, grid-based layouts
5. **Awwwards Winners**: High-end agency aesthetic

## Implementation Notes

### Performance Optimization
- CSS animations use `transform` and `opacity` (GPU-accelerated)
- IntersectionObserver for scroll animations (efficient)
- Minimal JavaScript for smooth performance
- No external dependencies except Google Fonts

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast ratios meet WCAG AA standards
- Keyboard navigation support
- Focus states for interactive elements

### Browser Compatibility
- Modern CSS features (Grid, Flexbox, Custom Properties)
- Smooth scroll behavior with fallback
- Tested on Chrome, Firefox, Safari, Edge (latest versions)

## Customization Ideas

### Color Schemes

**Blue/Cyan Scheme**:
```css
--accent-primary: #06b6d4;
--accent-secondary: #0284c7;
```

**Green/Emerald Scheme**:
```css
--accent-primary: #10b981;
--accent-secondary: #059669;
```

**Orange/Red Scheme**:
```css
--accent-primary: #f97316;
--accent-secondary: #dc2626;
```

### Typography Alternatives

- **Geometric**: Inter (current), Space Grotesk, DM Sans
- **Humanist**: Nunito Sans, Cabin, Open Sans
- **Monospace Headers**: JetBrains Mono, Fira Code (for tech aesthetic)

## Future Enhancements

1. **Dark/Light Mode Toggle**: Add theme switcher
2. **Blog Section**: Add a writing/articles section
3. **Project Gallery**: Showcase portfolio items
4. **Testimonials**: Client/colleague recommendations
5. **Resume Download**: PDF download button
6. **Analytics**: Add Google Analytics or similar
7. **SEO Optimization**: Add meta tags, Open Graph, structured data
8. **Performance**: Add lazy loading for images, web font optimization

## Maintenance

- Keep content updated quarterly
- Test on new browser versions
- Update copyright year annually
- Refresh statistics and metrics
- Add new projects and experience as they happen
