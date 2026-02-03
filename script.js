// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// Animate expertise cards on hover
document.querySelectorAll('.expertise-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))';
    });

    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--card-bg)';
    });
});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    timelineObserver.observe(item);
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // In a real implementation, you would send this to a backend
        console.log('Form submitted:', data);

        // Show success message
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Message Sent!';
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

        // Reset form
        this.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--text-primary)';
        }
    });
});

// Cursor effect for interactive elements
const createCursorFollower = () => {
    const follower = document.createElement('div');
    follower.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease-out, opacity 0.3s ease-out;
        opacity: 0;
    `;
    document.body.appendChild(follower);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        follower.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        follower.style.opacity = '0';
    });

    const animateFollower = () => {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        follower.style.left = `${followerX - 10}px`;
        follower.style.top = `${followerY - 10}px`;

        requestAnimationFrame(animateFollower);
    };

    animateFollower();

    // Scale up on interactive elements
    document.querySelectorAll('a, button, .expertise-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = 'scale(1)';
        });
    });
};

// Initialize cursor follower on desktop only
if (window.innerWidth > 968) {
    createCursorFollower();
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    });
});

// ============================================
// DYNAMIC GIT-STYLE TIMELINE GENERATION
// ============================================

/**
 * Timeline Data Configuration
 *
 * Add/edit entries here to update the Journey timeline.
 * The system automatically handles:
 * - Chronological sorting
 * - Overlap prevention
 * - Branch line generation
 * - Responsive positioning
 *
 * Entry format:
 * {
 *   type: 'work' | 'education',
 *   startDate: 'YYYY-MM' (e.g., '2024-10'),
 *   endDate: 'YYYY-MM' | 'present',
 *   title: 'Position or Degree Title',
 *   organization: 'Company or Institution',
 *   description: 'Detailed description shown on hover',
 *   tags: ['Tag1', 'Tag2', 'Tag3'],
 *   logo: '🔹' or '/path/to/image.png' (emoji or image path)
 * }
 */
const timelineData = [
    {
        type: 'work',
        startDate: '2024-10',
        endDate: 'present',
        title: 'Backend Developer & Data Analyst',
        organization: 'BCome',
        description: 'Backend development and data analysis with PostgreSQL databases and scalable solutions.',
        tags: ['PostgreSQL', 'Python', 'Backend'],
        logo: '🏢' // Replace with actual image path
    },
    {
        type: 'work',
        startDate: '2024-10',
        endDate: '2025-06',
        title: 'University Tutor',
        organization: 'IES Abroad',
        description: 'Tutoring in Data Mining, Computer Architecture, 3D Graphics, and Programming Languages.',
        tags: ['Teaching', 'Data Mining'],
        logo: '🎓'
    },
    {
        type: 'education',
        startDate: '2024-10',
        endDate: '2025-07',
        title: 'MSc in Data Science',
        organization: 'La Salle BCN • GPA: 9.5',
        description: 'Exploratory data analysis, pipeline architecture, business intelligence—while working full-time.',
        tags: ['PowerBI', 'Machine Learning'],
        logo: '🎓'
    },
    {
        type: 'work',
        startDate: '2024-02',
        endDate: '2024-10',
        title: 'Backend & Database Engineer',
        organization: 'Weekn (Part-time)',
        description: 'Database schema optimization, Node.js/TypeScript development, data security.',
        tags: ['Node.js', 'TypeScript', 'PostgreSQL'],
        logo: '💼'
    },
    {
        type: 'education',
        startDate: '2020-01',
        endDate: '2024-07',
        title: 'BSc Computer Engineering',
        organization: 'La Salle BCN • GPA: 8.8',
        description: 'International program covering software development, databases, architecture, networking. Active in Social Club & LS Racing Team.',
        tags: ['C Programming', 'Java', 'Dagster', 'CCNA Certified'],
        logo: '🎓'
    },
    {
        type: 'work',
        startDate: '2022-09',
        endDate: '2023-07',
        title: 'Research Assistant',
        organization: 'La Salle BCN',
        description: 'Databases project with Catastro data for Barcelona province.',
        tags: ['Databases', 'Research'],
        logo: '🔬'
    },
    {
        type: 'work',
        startDate: '2021-09',
        endDate: '2022-06',
        title: 'Teaching Assistant',
        organization: 'La Salle BCN',
        description: '"Introduction to Computers" tutoring and practical support.',
        tags: ['Teaching', 'CS Fundamentals'],
        logo: '👨‍🏫'
    }
];

function parseDate(dateStr) {
    if (dateStr === 'present') {
        return new Date();
    }
    const [year, month] = dateStr.split('-');
    return new Date(year, parseInt(month) - 1);
}

function formatDateRange(start, end) {
    const startDate = parseDate(start);
    const endDate = end === 'present' ? 'Present' : parseDate(end);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const startStr = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;
    const endStr = endDate === 'Present' ? 'Present' : `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}`;

    return `${startStr} - ${endStr}`;
}

function generateTimeline() {
    const container = document.querySelector('.git-timeline');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // Parse all dates and find the range
    const allDates = [];
    timelineData.forEach(item => {
        allDates.push(parseDate(item.startDate));
        allDates.push(item.endDate === 'present' ? new Date() : parseDate(item.endDate));
    });
    
    const minDate = new Date(Math.min(...allDates));
    const maxDate = new Date(Math.max(...allDates));
    
    // Add padding to dates
    minDate.setMonth(minDate.getMonth() - 2);
    maxDate.setMonth(maxDate.getMonth() + 2);

    // Configuration - COMPACT layout
    const pixelsPerMonth = 18;
    const mainLineX = 500; // Center the main line
    const branchSpacing = 55;
    const nodeRadius = 6;
    const cardWidth = 200;
    const cardHeight = 120; // Account for card height + padding
    const cardPadding = 15; // Gap between cards

    // Calculate total height based on time range
    // Account for legend offset at top
    const legendOffset = 100;
    const totalMonths = (maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth());
    const timelineHeight = totalMonths * pixelsPerMonth + legendOffset + 60; // +60 for bottom padding

    // Helper: convert date to Y position (top = most recent, bottom = oldest)
    // Start at legendOffset to leave room for the legend
    const dateToY = (date) => {
        const d = typeof date === 'string' ? parseDate(date) : date;
        const monthsFromMax = (maxDate.getFullYear() - d.getFullYear()) * 12 + (maxDate.getMonth() - d.getMonth());
        return legendOffset + monthsFromMax * pixelsPerMonth;
    };

    // Assign lanes using BOTH sides - stack cards to prevent overlaps
    const assignLanes = () => {
        const sorted = [...timelineData].sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));
        
        // Track all placed cards with their bounding boxes
        const placedCards = []; // {left, right, top, bottom, lane}
        
        sorted.forEach(item => {
            const startDate = parseDate(item.startDate);
            const endDate = item.endDate === 'present' ? new Date() : parseDate(item.endDate);
            const startY = dateToY(startDate);
            const endY = dateToY(endDate);
            
            // Card is placed at midpoint
            const midY = startY + (endY - startY) / 2;
            const cardTop = midY - cardHeight / 2;
            const cardBottom = midY + cardHeight / 2;
            
            // Try lanes: 1 (right close), -1 (left close), 2 (right far), -2 (left far), etc.
            const maxLanes = 6;
            let assignedLane = null;
            
            for (let i = 1; i <= maxLanes && assignedLane === null; i++) {
                // Alternate: right, left, right further, left further
                const lanesToTry = i % 2 === 1 ? [Math.ceil(i/2), -Math.ceil(i/2)] : [-Math.ceil(i/2), Math.ceil(i/2)];
                
                for (const lane of [i, -i]) {
                    const isLeftSide = lane < 0;
                    const laneDistance = Math.abs(lane);
                    
                    // Calculate where this card would be placed
                    const branchX = isLeftSide 
                        ? mainLineX - laneDistance * branchSpacing 
                        : mainLineX + laneDistance * branchSpacing;
                    
                    const cardLeft = isLeftSide ? branchX - cardWidth - 15 : branchX + 15;
                    const cardRight = cardLeft + cardWidth;
                    
                    // Check for overlaps with all placed cards
                    const hasOverlap = placedCards.some(placed => {
                        const horizontalOverlap = !(cardRight < placed.left - cardPadding || cardLeft > placed.right + cardPadding);
                        const verticalOverlap = !(cardBottom < placed.top - cardPadding || cardTop > placed.bottom + cardPadding);
                        return horizontalOverlap && verticalOverlap;
                    });
                    
                    if (!hasOverlap) {
                        assignedLane = lane;
                        placedCards.push({
                            left: cardLeft,
                            right: cardRight,
                            top: cardTop,
                            bottom: cardBottom,
                            lane: lane
                        });
                        break;
                    }
                }
            }
            
            // Fallback - find next available lane
            if (assignedLane === null) {
                assignedLane = placedCards.length + 1;
                const isLeftSide = assignedLane % 2 === 0;
                const laneDistance = Math.ceil(assignedLane / 2) + 2;
                const branchX = isLeftSide 
                    ? mainLineX - laneDistance * branchSpacing 
                    : mainLineX + laneDistance * branchSpacing;
                const cardLeft = isLeftSide ? branchX - cardWidth - 15 : branchX + 15;
                placedCards.push({
                    left: cardLeft,
                    right: cardLeft + cardWidth,
                    top: cardTop,
                    bottom: cardBottom,
                    lane: assignedLane
                });
            }
            
            item.lane = assignedLane;
            item.startY = startY;
            item.endY = endY;
        });

        return sorted;
    };

    const itemsWithLanes = assignLanes();
    
    // Calculate required width based on lanes used
    const allLanes = itemsWithLanes.map(i => i.lane);
    const maxRightLane = Math.max(...allLanes.filter(l => l > 0), 0);
    const maxLeftLane = Math.abs(Math.min(...allLanes.filter(l => l < 0), 0));
    
    const containerWidth = mainLineX + (maxRightLane + 1) * branchSpacing + cardWidth + 60;
    const leftPadding = (maxLeftLane + 1) * branchSpacing + cardWidth + 60;
    const totalWidth = Math.max(containerWidth, leftPadding + mainLineX);
    
    container.style.minHeight = `${timelineHeight}px`;
    container.style.width = `${totalWidth}px`;
    container.style.margin = '0 auto';
    container.style.position = 'relative';

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', totalWidth);
    svg.setAttribute('height', timelineHeight);
    svg.style.position = 'absolute';
    svg.style.left = '0';
    svg.style.top = '0';
    svg.style.overflow = 'visible';
    svg.style.zIndex = '1';

    // Defs for gradients and filters
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="workGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
        <linearGradient id="eduGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#555"/>
            <stop offset="100%" stop-color="#333"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    `;
    svg.appendChild(defs);

    // Draw main timeline line (thicker and more visible)
    const mainLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    mainLine.setAttribute('x1', mainLineX);
    mainLine.setAttribute('y1', legendOffset - 20); // Start slightly above first content
    mainLine.setAttribute('x2', mainLineX);
    mainLine.setAttribute('y2', timelineHeight - 20);
    mainLine.setAttribute('stroke', '#444');
    mainLine.setAttribute('stroke-width', '4');
    mainLine.setAttribute('stroke-linecap', 'round');
    svg.appendChild(mainLine);

    // Draw time markers (year labels only for cleaner look)
    const timeMarkersGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let currentYear = maxDate.getFullYear();
    const endYear = minDate.getFullYear();

    while (currentYear >= endYear) {
        const yearDate = new Date(currentYear, 0, 1); // January of each year
        const y = dateToY(yearDate);
        
        // Year tick mark
        const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        tick.setAttribute('x1', mainLineX - 12);
        tick.setAttribute('y1', y);
        tick.setAttribute('x2', mainLineX);
        tick.setAttribute('y2', y);
        tick.setAttribute('stroke', '#666');
        tick.setAttribute('stroke-width', '2');
        timeMarkersGroup.appendChild(tick);

        // Year label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', mainLineX - 16);
        label.setAttribute('y', y + 4);
        label.setAttribute('text-anchor', 'end');
        label.setAttribute('fill', '#888');
        label.setAttribute('font-size', '11px');
        label.setAttribute('font-weight', '600');
        label.setAttribute('font-family', 'Inter, sans-serif');
        label.textContent = currentYear.toString();
        timeMarkersGroup.appendChild(label);

        currentYear--;
    }
    svg.appendChild(timeMarkersGroup);

    // Pre-process: find items sharing same start/end dates and add small offsets
    const startDateCounts = {};
    const endDateCounts = {};
    
    itemsWithLanes.forEach(item => {
        const startKey = item.startDate;
        const endKey = item.endDate;
        
        if (!startDateCounts[startKey]) startDateCounts[startKey] = [];
        startDateCounts[startKey].push(item);
        
        if (!endDateCounts[endKey]) endDateCounts[endKey] = [];
        endDateCounts[endKey].push(item);
    });
    
    // Assign offsets to items sharing dates
    Object.values(startDateCounts).forEach(items => {
        if (items.length > 1) {
            // Sort by lane to make offsets consistent
            items.sort((a, b) => a.lane - b.lane);
            items.forEach((item, idx) => {
                item.startYOffset = (idx - (items.length - 1) / 2) * 8;
            });
        }
    });
    
    Object.values(endDateCounts).forEach(items => {
        if (items.length > 1) {
            items.sort((a, b) => a.lane - b.lane);
            items.forEach((item, idx) => {
                item.endYOffset = (idx - (items.length - 1) / 2) * 8;
            });
        }
    });

    // Draw branches for each item
    itemsWithLanes.forEach(item => {
        const startYOffset = item.startYOffset || 0;
        const endYOffset = item.endYOffset || 0;
        const startY = item.startY + startYOffset;
        const endY = item.endY + endYOffset;
        const isLeftSide = item.lane < 0;
        const laneDistance = Math.abs(item.lane);
        const branchX = isLeftSide 
            ? mainLineX - laneDistance * branchSpacing 
            : mainLineX + laneDistance * branchSpacing;
        const isWork = item.type === 'work';
        const color = isWork ? '#10b981' : '#3b82f6';
        
        // Determine direction: if endY < startY, branch goes UP (toward present)
        const goingUp = endY < startY;
        const curveRadius = Math.min(12, Math.abs(endY - startY) / 3);
        const curveDir = goingUp ? -1 : 1; // -1 for up, +1 for down

        // 1. Draw fork line from main line to branch start
        const forkPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        if (isLeftSide) {
            forkPath.setAttribute('d', `
                M ${mainLineX} ${startY}
                L ${branchX + curveRadius} ${startY}
                Q ${branchX} ${startY} ${branchX} ${startY + curveDir * curveRadius}
            `);
        } else {
            forkPath.setAttribute('d', `
                M ${mainLineX} ${startY}
                L ${branchX - curveRadius} ${startY}
                Q ${branchX} ${startY} ${branchX} ${startY + curveDir * curveRadius}
            `);
        }
        forkPath.setAttribute('stroke', color);
        forkPath.setAttribute('stroke-width', '2.5');
        forkPath.setAttribute('fill', 'none');
        forkPath.setAttribute('stroke-linecap', 'round');
        forkPath.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(forkPath);

        // 2. Draw vertical branch line
        const branchLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const branchStartY = startY + curveDir * curveRadius;
        // For present items, extend to a point above the top marker
        // For ended items, account for the curve radius before merging back
        const branchEndY = item.endDate === 'present' 
            ? endY + curveDir * curveRadius  // Extend past the endY for visual clarity
            : endY - curveDir * curveRadius;
        branchLine.setAttribute('x1', branchX);
        branchLine.setAttribute('y1', branchStartY);
        branchLine.setAttribute('x2', branchX);
        branchLine.setAttribute('y2', branchEndY);
        branchLine.setAttribute('stroke', color);
        branchLine.setAttribute('stroke-width', '2.5');
        branchLine.setAttribute('stroke-linecap', 'round');
        svg.appendChild(branchLine);

        // Store the actual branch line start/end for card positioning
        item.branchLineStartY = branchStartY;
        item.branchLineEndY = branchEndY;

        // 3. Draw merge line back to main (if not present)
        if (item.endDate !== 'present') {
            const mergePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            if (isLeftSide) {
                // Left side: branch is left of main, curve goes right toward main
                mergePath.setAttribute('d', `
                    M ${branchX} ${endY - curveDir * curveRadius}
                    Q ${branchX} ${endY} ${branchX + curveRadius} ${endY}
                    L ${mainLineX} ${endY}
                `);
            } else {
                // Right side: branch is right of main, curve goes left toward main
                mergePath.setAttribute('d', `
                    M ${branchX} ${endY - curveDir * curveRadius}
                    Q ${branchX} ${endY} ${branchX - curveRadius} ${endY}
                    L ${mainLineX} ${endY}
                `);
            }
            mergePath.setAttribute('stroke', color);
            mergePath.setAttribute('stroke-width', '2.5');
            mergePath.setAttribute('fill', 'none');
            mergePath.setAttribute('stroke-linecap', 'round');
            mergePath.setAttribute('stroke-linejoin', 'round');
            svg.appendChild(mergePath);

            // End commit node on main line
            const endCommit = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            endCommit.setAttribute('cx', mainLineX);
            endCommit.setAttribute('cy', endY);
            endCommit.setAttribute('r', nodeRadius - 1);
            endCommit.setAttribute('fill', color);
            endCommit.setAttribute('stroke', '#0a0a0a');
            endCommit.setAttribute('stroke-width', '2');
            svg.appendChild(endCommit);
        }

        // Start commit node on main line (larger, with glow)
        const startCommit = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        startCommit.setAttribute('cx', mainLineX);
        startCommit.setAttribute('cy', startY);
        startCommit.setAttribute('r', nodeRadius + 1);
        startCommit.setAttribute('fill', color);
        startCommit.setAttribute('stroke', '#0a0a0a');
        startCommit.setAttribute('stroke-width', '2');
        startCommit.style.filter = 'url(#glow)';
        svg.appendChild(startCommit);

        // Store branchX for card placement
        item.branchX = branchX;
        item.isLeftSide = isLeftSide;
        item.adjustedStartY = startY;
        item.adjustedEndY = endY;
        item.branchX = branchX;
        item.isLeftSide = isLeftSide;

        // End node on branch (pulsing for "present")
        if (item.endDate === 'present') {
            // Outer glow ring for present items - positioned at visible branch end
            const glowRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            glowRing.setAttribute('cx', branchX);
            glowRing.setAttribute('cy', branchEndY);
            glowRing.setAttribute('r', nodeRadius + 4);
            glowRing.setAttribute('fill', 'none');
            glowRing.setAttribute('stroke', color);
            glowRing.setAttribute('stroke-width', '2');
            glowRing.setAttribute('opacity', '0.5');
            glowRing.innerHTML = `<animate attributeName="r" values="${nodeRadius + 2};${nodeRadius + 8};${nodeRadius + 2}" dur="2s" repeatCount="indefinite"/>
                                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite"/>`;
            svg.appendChild(glowRing);
            // Position branch end node at the actual visible branch endpoint
            const branchEndNodeY = item.endDate === 'present' ? branchEndY : branchEndY;
            const branchEndNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            branchEndNode.setAttribute('cx', branchX);
            branchEndNode.setAttribute('cy', branchEndNodeY);
            branchEndNode.setAttribute('r', nodeRadius - 1);
            branchEndNode.setAttribute('fill', item.endDate === 'present' ? color : '#0a0a0a');
            branchEndNode.setAttribute('stroke', color);
            branchEndNode.setAttribute('stroke-width', '2');
            svg.appendChild(branchEndNode);
        }

        
    });

    container.appendChild(svg);

    // Create cards container - must be absolute like SVG to align properly
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('timeline-nodes');
    cardsContainer.style.position = 'absolute';
    cardsContainer.style.left = '0';
    cardsContainer.style.top = '0';
    cardsContainer.style.width = '100%';
    cardsContainer.style.height = '100%';
    cardsContainer.style.zIndex = '2';
    cardsContainer.style.pointerEvents = 'none'; // Allow clicks to pass through to cards

    // Create cards for each item
    itemsWithLanes.forEach(item => {
        const isWork = item.type === 'work';
        const cardClass = isWork ? 'work-card' : 'edu-card';
        const color = isWork ? '#10b981' : '#3b82f6';
        
        // Use the actual branch line positions for centering
        const branchStartY = item.branchLineStartY;
        const branchEndY = item.branchLineEndY;
        
        // Calculate midpoint of the visible branch line
        const minY = Math.min(branchStartY, branchEndY);
        const maxY = Math.max(branchStartY, branchEndY);
        const midY = minY + (maxY - minY) / 2;
        
        // Card position depends on which side of the main line
        const cardX = item.isLeftSide 
            ? item.branchX - cardWidth - 15  // Left side: card to the left of branch
            : item.branchX + 15;              // Right side: card to the right of branch

        const node = document.createElement('div');
        node.classList.add('timeline-node');
        // Use transform to vertically center the card on the midpoint
        node.style.cssText = `
            position: absolute;
            left: ${cardX}px;
            top: ${midY}px;
            transform: translateY(-50%);
            width: ${cardWidth}px;
            z-index: 10;
            pointer-events: auto;
        `;

        node.innerHTML = `
            <div class="node-card ${cardClass}">
                <div class="node-header">
                    <span class="node-logo">${item.logo}</span>
                    <span class="node-date">${formatDateRange(item.startDate, item.endDate)}</span>
                </div>
                <h3>${item.title}</h3>
                <p class="node-org">${item.organization}</p>
                <div class="node-details-preview">Hover for details...</div>
                <div class="node-details-full">
                    <p class="node-desc">${item.description}</p>
                    <div class="timeline-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        // Draw connector line from branch midpoint to card edge
        const connectorY = midY;
        const connectorStartX = item.branchX;
        const connectorEndX = item.isLeftSide ? cardX + cardWidth : cardX;
        
        const connector = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        connector.setAttribute('x1', connectorStartX);
        connector.setAttribute('y1', connectorY);
        connector.setAttribute('x2', connectorEndX);
        connector.setAttribute('y2', connectorY);
        connector.setAttribute('stroke', color);
        connector.setAttribute('stroke-width', '1');
        connector.setAttribute('stroke-dasharray', '3,3');
        connector.setAttribute('opacity', '0.6');
        svg.appendChild(connector);

        // Hover interaction
        const preview = node.querySelector('.node-details-preview');
        const full = node.querySelector('.node-details-full');

        node.addEventListener('mouseenter', () => {
            preview.style.display = 'none';
            full.style.display = 'block';
        });

        node.addEventListener('mouseleave', () => {
            preview.style.display = 'block';
            full.style.display = 'none';
        });

        cardsContainer.appendChild(node);
    });

    container.appendChild(cardsContainer);

    // Add legend at top
    const legend = document.createElement('div');
    legend.classList.add('timeline-legend');
    legend.innerHTML = `
        <div class="legend-item">
            <span class="legend-dot work-dot"></span>
            <span>Work Experience</span>
        </div>
        <div class="legend-item">
            <span class="legend-dot edu-dot"></span>
            <span>Education</span>
        </div>
    `;
    container.insertBefore(legend, container.firstChild);
}

// Initialize timeline on load
document.addEventListener('DOMContentLoaded', generateTimeline);
