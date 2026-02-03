# Timeline System Upgrade

## Overview

The Journey timeline has been completely rebuilt from a hardcoded, manually-positioned system to a **fully dynamic, data-driven Git-style visualization** that scales automatically and shows the complete progression of your professional life.

## What Changed

### Before (Hardcoded System)
- ❌ Manual positioning for each entry (style="top: XXXpx; left: XX%;")
- ❌ Hardcoded SVG lines for each branch
- ❌ Required manual spacing calculations
- ❌ Broke when adding new items
- ❌ No visual indication of experience duration
- ❌ Limited to ~3 concurrent experiences

### After (Dynamic System)
- ✅ Data-driven from a simple array in `script.js`
- ✅ Automatic positioning and overlap prevention
- ✅ Handles unlimited concurrent experiences
- ✅ Shows start points, duration, and end points (like Git)
- ✅ Company logos/icons at each node
- ✅ Hover to reveal full details
- ✅ Fully responsive and scalable
- ✅ Staggered animations

## New Features

### 1. Git-Style Visualization
- **Main timeline**: Vertical line on the left representing your career progression
- **Branch start points**: Circle indicators where each experience begins
- **Duration lines**: Vertical lines showing how long each experience lasted
- **End points**: Circles marking completion of experiences
- **Merge lines**: Dashed lines showing experiences completing and merging back
- **Ongoing indicators**: Dashed continuation lines for current roles

### 2. Company Logos
Each timeline node now displays a logo/icon that represents the company or institution. This provides quick visual recognition.

### 3. Hover Details
Cards now show a compact preview by default with "👆 Hover for details". On hover, they expand to show:
- Full description
- All technology tags
- Enhanced visual feedback

### 4. Smart Positioning
The algorithm automatically:
- Sorts entries chronologically (newest first)
- Assigns horizontal positions based on type (work vs education)
- Detects overlapping experiences
- Adjusts positioning to prevent collisions
- Handles any number of concurrent activities

## How to Use

### Adding a New Experience

Edit the `timelineData` array in `script.js` (around line 235):

```javascript
{
    type: 'work',  // or 'education'
    startDate: '2024-10',  // Format: YYYY-MM
    endDate: 'present',    // Format: YYYY-MM or 'present'
    title: 'Backend Engineer',
    organization: 'TechCorp Inc.',
    description: 'Building scalable microservices and data pipelines.',
    tags: ['Node.js', 'PostgreSQL', 'Docker'],
    logo: '🚀'  // Emoji or image path like '/assets/techcorp-logo.png'
}
```

### Using Custom Logos

**Option 1: Emoji** (Quick & Easy)
```javascript
logo: '🏢'  // Building
logo: '🎓'  // University
logo: '💼'  // Work
logo: '🔬'  // Research
```

**Option 2: Image** (Professional)
```javascript
logo: '/assets/company-logo.png'  // Use actual company logo
```

For images:
- Recommended size: 48x48px
- Format: PNG with transparency
- Place in `/assets/` folder

### Configuration Options

The system has several configurable constants at the top of the generation function:

```javascript
const VERTICAL_SPACING = 280;  // Space between entries (px)
const NODE_HEIGHT = 60;        // Height of each node
```

Adjust these to change the timeline density.

## Technical Architecture

### Files Modified

1. **index.html**
   - Removed 260+ lines of hardcoded timeline HTML
   - Replaced with simple `<div class="git-timeline"></div>` container

2. **script.js**
   - Added `timelineData` array (line ~235)
   - Added `parseDate()` function for date handling
   - Added `formatDateRange()` for display formatting
   - Added `generateTimeline()` function (~200 lines)
   - Automatic initialization on page load

3. **styles.css**
   - Updated `.timeline-node` for new structure
   - Added `.node-logo` styles
   - Added `.node-content-wrapper` styles
   - Added `.node-details-preview` and `.node-details-full` styles
   - Enhanced hover animations
   - Added merge line styles
   - Improved responsive behavior

4. **CLAUDE.md**
   - Updated documentation for new system
   - Added clear instructions for adding entries

## Algorithm Details

### Positioning Logic

1. **Vertical Spacing**: 280px between each entry
2. **Horizontal Assignment**:
   - Work items: Try 25%, 45%, 65% (left to right)
   - Education items: Try 50%, 70% (right-focused)
3. **Overlap Detection**: Checks if vertical distance < 250px at same horizontal position
4. **Fallback**: If all positions occupied, uses default (25% for work, 50% for education)

### Duration Calculation

```javascript
durationMonths = (endDate - startDate) / (1000 * 60 * 60 * 24 * 30)
verticalLength = min(durationMonths * 10, 400)  // Cap at 400px
```

This creates proportional vertical lines showing how long each experience lasted.

## Benefits

1. **Maintainability**: Add new experiences in seconds by editing one array
2. **Scalability**: Handles any number of concurrent experiences automatically
3. **Visual Clarity**: Git-style branching shows career progression at a glance
4. **Professional**: Company logos and smooth animations create premium feel
5. **Responsive**: Automatically adapts to mobile screens
6. **Future-Proof**: Easy to extend with new features (filters, search, etc.)

## Future Enhancements (Optional)

Potential additions you could implement:

- Filter by type (work/education)
- Search by technology tags
- Timeline zoom controls
- Click to expand instead of hover (better for mobile)
- Real company logo integration
- Export timeline as image
- Animated transitions when adding/removing entries

## Testing Checklist

- [ ] Timeline generates on page load
- [ ] All 7 experiences appear in correct chronological order
- [ ] Work items use green colors
- [ ] Education items use blue colors
- [ ] Hover reveals full details
- [ ] Logos display correctly
- [ ] Branch lines connect properly
- [ ] End points show for completed experiences
- [ ] Ongoing experiences show dashed continuation
- [ ] Responsive on mobile (single column)
- [ ] Animations stagger correctly

## Notes

- The timeline is generated after the DOM loads via `DOMContentLoaded` event
- Animations use staggered delays (0.1s per entry) for smooth appearance
- Mobile view simplifies to left-aligned single column
- Git-style visualization makes career progression intuitive
