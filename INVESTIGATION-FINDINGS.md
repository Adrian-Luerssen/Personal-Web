# Timeline Expansion Overlap Investigation

## Summary

The overlap issue occurs because individual timeline cards have their own inline `z-index: 10` applied via JavaScript, which operates within a separate stacking context from the legend. While the CSS architecture attempts to prevent overlap through stacking context containment, the inline styles may be causing cards near the top to visually overlap with the sticky legend.

---

## 1. Stacking Context Analysis

### Elements Creating New Stacking Contexts

| Element | Property | Value | Effect |
|---------|----------|-------|--------|
| `.git-timeline` | `isolation` | `isolate` | Creates a new stacking context - all child z-indexes are contained within |
| `.timeline-legend` | `position: sticky` + `z-index: 200` | sticky header | Creates stacking context, but may be affected by scroll behavior |
| `.timeline-nodes` | `position: relative/absolute` + `z-index: 2` | Container for all cards | Creates stacking context |
| Individual `.timeline-node` | Inline `position: absolute` + `z-index: 10` | Each card | Creates individual stacking contexts |

### Key Insight: The Stacking Context Hierarchy

```
.git-timeline (isolation: isolate - creates root stacking context)
├── .timeline-legend (z-index: 200, position: sticky)
├── .timeline-svg (z-index: 1, position: absolute)
└── .timeline-nodes (z-index: 2, position: absolute)
    └── .timeline-node (z-index: 10 inline, position: absolute)
        └── .node-card (no explicit z-index)
```

---

## 2. CSS Z-Index Values (Desktop - styles.css)

### Timeline Section (lines 517-800)

| Selector | Z-Index | Position | Notes |
|----------|---------|----------|-------|
| `.timeline-svg` | `1` | absolute | Background SVG lines |
| `.timeline-nodes` | `2` | relative → absolute (JS) | Container for all cards |
| `.timeline-legend` | `200` | sticky (top: 80px) | Color legend header |

### Dynamic Z-Index (script.js, lines 1340-1350)

Each `.timeline-node` gets inline CSS via JavaScript:

```javascript
node.style.cssText = `
    position: absolute;
    ...
    z-index: 10;
    pointer-events: auto;
`;
```

---

## 3. Why the Overlap Occurs

### Root Cause: Stacking Context Containment

The `isolation: isolate` on `.git-timeline` creates a stacking context, but the **legend is a child of this stacking context**, meaning:

1. The legend (`z-index: 200`) is compared against sibling elements within `.git-timeline`
2. The cards container (`z-index: 2`) is lower than the legend - **this should work**
3. However, individual cards get inline `z-index: 10` which creates their own stacking contexts

### The Problem Scenario

When a card near the top of the timeline expands on hover:
- Card expands width from 260px → 340px
- If the card's vertical position overlaps with the sticky legend's area
- The card content (now larger) may extend into the legend's visual space

### Why Z-Index Isn't Fixing It

The CSS hierarchy should work: legend (200) > nodes container (2) > individual cards (10 within nodes).

**Potential issues:**

1. **Sticky positioning behavior**: The legend uses `position: sticky` with `top: 80px`. When sticky elements "stick", they may behave differently in the stacking order.

2. **Transform side effects**: Cards use `transform: translateY(-50%)` for centering, which creates a new stacking context per CSS spec.

3. **Top card position**: The legendHeight offset (60px) positions the cards container below the legend, but if a card's top edge (after transform) gets close enough, expansion could visually overlap.

---

## 4. JavaScript Dynamic Behavior (script.js)

### Expansion Behavior (lines 1415-1425)

```javascript
function showDetails() {
    preview.style.display = 'none';
    full.style.display = 'block';
    // Tags scroll initialization
}

function hideDetails() {
    preview.style.display = 'block';
    full.style.display = 'none';
}

node.addEventListener('mouseenter', showDetails);
node.addEventListener('mouseleave', hideDetails);
```

### Key Finding: No Z-Index Change on Hover

The JavaScript does **not** dynamically change z-index on hover. The overlap is purely a CSS positioning/stacking issue, not a JS state management issue.

### Card Positioning (lines 1335-1360)

```javascript
cardsContainer.style.top = `${legendHeight}px`; // Position below legend (60px)
cardsContainer.style.zIndex = '2';

// Each card:
node.style.cssText = `
    top: ${midY}px;
    transform: translateY(-50%);  // Centers card vertically on branch
    z-index: 10;
`;
```

The `midY` calculation can place cards with their pre-transform top at any position in the timeline. After `translateY(-50%)`, a card could visually extend above its `top` value by up to half its height.

---

## 5. Mobile Breakpoint (≤768px)

In mobile view (styles.css lines 1589-1760):
- Layout switches to vertical card stack (no absolute positioning)
- Legend remains `position: sticky; z-index: 200`
- Cards become `position: relative` in a flex column
- **Issue likely doesn't occur on mobile** due to flow layout

---

## 6. Recommendations for Fix

### Option A: Ensure Legend Stays Above Cards (Simplest)

Increase legend z-index or create a dedicated stacking context:

```css
.timeline-legend {
    z-index: 200;
    isolation: isolate; /* Own stacking context above everything */
}
```

Or use a very high z-index:

```css
.timeline-legend {
    z-index: 999; /* Much higher than card inline z-index: 10 */
}
```

### Option B: Remove Card Inline Z-Index

Modify `script.js` to not set `z-index: 10` on cards, relying on natural stacking order within `.timeline-nodes` (z-index: 2).

### Option C: Restructure DOM

Move legend outside `.git-timeline` so it's not in the same stacking context:

```html
<div class="git-timeline-wrapper">
    <div class="timeline-legend">...</div>  <!-- Outside git-timeline -->
    <div class="git-timeline">...</div>
</div>
```

### Option D: Clip Card Expansion

Use `overflow: hidden` on the cards container above the legend's sticky threshold, or limit expansion direction.

---

## Files Analyzed

- `styles.css` - Lines 517-800 (timeline CSS), 1589-1760 (mobile responsive)
- `script.js` - Lines 789-1455 (generateTimeline function), 1457-1536 (mobile timeline)
- `index.html` - Line 149 (git-timeline container structure)

---

## Next Steps for Implementation

1. Test whether increasing legend z-index to 999 resolves the issue
2. If not, restructure DOM to move legend outside the `isolation: isolate` stacking context
3. Verify fix at all viewport sizes (desktop, tablet, mobile breakpoints)
