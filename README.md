# Adrian Luerssen Medina - Personal CV Website

A modern, minimalist personal website showcasing my experience as a Data Scientist specializing in automation, data pipelines, and infrastructure.

## Features

- **Modern Design**: Clean, tech-focused aesthetic with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Engaging hover effects and scroll animations
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessible**: Built with web accessibility best practices

## Structure

```
personal-web/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive JavaScript features
└── README.md           # This file
```

## Sections

1. **Hero**: Eye-catching introduction with call-to-action
2. **About**: Professional summary with key statistics
3. **Experience**: Timeline of work history and achievements
4. **Expertise**: Core competencies and skills
5. **Contact**: Contact information and message form

## Customization

### Adding Your Photo

Replace the placeholder in the About section with your professional photo:

1. Add your photo to the project directory (e.g., `profile.jpg`)
2. Update the `.image-placeholder` in `index.html`:

```html
<div class="about-image">
    <img src="profile.jpg" alt="Adrian Luerssen Medina" style="width: 100%; border-radius: 16px;">
</div>
```

### Updating Contact Information

Edit the contact links in the Contact section of `index.html`:

- Email: Update `adrian.luerssen@example.com`
- LinkedIn: Update the profile URL
- GitHub: Update the profile URL

### Customizing Colors

The color scheme can be adjusted in the `:root` section of `styles.css`:

```css
:root {
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    /* ... other variables */
}
```

### Adding Projects

To add a projects section, you can create a new section between Experience and Expertise:

```html
<section id="projects" class="projects">
    <!-- Add your projects here -->
</section>
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactions and animations
- **Google Fonts**: Inter font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Minimal dependencies (only Google Fonts)
- Optimized animations using CSS transforms
- Lazy loading for scroll animations
- Efficient JavaScript with IntersectionObserver API

## Deployment

This is a static website that can be deployed to:

- **GitHub Pages**: Free hosting for GitHub repositories
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **AWS S3**: Static website hosting

### Deploying to GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select the main branch as source
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Development

To run locally, simply open `index.html` in your browser. For a better development experience with live reload:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000` in your browser.

## License

© 2026 Adrian Luerssen Medina. All rights reserved.

## Contact

For any questions or collaborations, please reach out through the contact form on the website.
