# Logo Implementation Instructions for DevOps Team

## Current Status
All five theme mockups now include **logo placeholders** with a cross symbol (✝) in a circular background. These are temporary placeholders showing where the actual Desert Boy Ministries of Jesus logo should be placed.

## How to Add the Actual Logo

### Step 1: Locate the Logo File
The actual logo should be in your Shopify theme assets or media library. Common locations:
- Shopify Admin → Settings → Files
- Shopify Admin → Online Store → Themes → Actions → Edit Code → Assets folder
- Look for files like: `logo.png`, `dbmj-logo.png`, `desert-boy-logo.svg`, etc.

### Step 2: Replace the Placeholder

**Current placeholder code in each theme:**
```html
<div class="logo">
    <div class="logo-icon">✝</div>
    <span>Desert Boy Ministries of Jesus</span>
</div>
```

**Replace with:**
```html
<div class="logo">
    <img src="path-to-your-logo.png" alt="Desert Boy Ministries of Jesus Logo" class="logo-image">
    <span>Desert Boy Ministries of Jesus</span>
</div>
```

### Step 3: Add CSS for the Logo Image

**Add this CSS to each theme (already prepared in the stylesheets):**
```css
.logo-image {
    width: 45px;  /* Adjust size as needed */
    height: auto;
    object-fit: contain;
}
```

## Logo Specifications for Each Theme

### Theme 1: Sands of Grace
- **Size**: 45px width
- **Style**: Should work with warm tan/terracotta color scheme
- **Background**: Transparent PNG recommended

### Theme 2: Oasis of Worship  
- **Size**: 40px width
- **Style**: Should work with navy blue and tan color scheme
- **Background**: Transparent PNG recommended

### Theme 3: Desert Mission
- **Size**: 45px width
- **Style**: Should work with earthy brown tones
- **Background**: Transparent PNG recommended

### Theme 4: Modern Desert Church
- **Size**: 45px width
- **Style**: Should work with warm cream background
- **Background**: Transparent PNG recommended
- **Note**: Logo should work in both light and dark modes

### Theme 5: Heritage & Horizon
- **Size**: 45px width
- **Style**: Should work with traditional purple and gold color scheme
- **Background**: Transparent PNG recommended

## Recommended Logo Format
- **File Type**: PNG with transparent background (or SVG for scalability)
- **Dimensions**: At least 200x200px (will be scaled down)
- **Color**: Should have good contrast against each theme's header background

## Testing Checklist
After adding the logo, verify:
- [ ] Logo displays clearly on all themes
- [ ] Logo scales properly on mobile devices
- [ ] Logo has appropriate spacing from text
- [ ] Logo works in dark mode (Theme 4)
- [ ] Logo loads quickly (file size < 50KB recommended)

## Alternative: Keep Text-Only Logo
If you prefer to keep the current text-based logo without an image, simply remove the placeholder icon div:

```html
<div class="logo">
    <span>Desert Boy Ministries of Jesus</span>
</div>
```

---

**Note**: The cross symbol (✝) is currently used as a placeholder. It represents the Christian nature of the ministry but should be replaced with your actual branded logo for a professional appearance.
