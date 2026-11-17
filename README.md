# STUDIO VERSE — Single-Page Editorial 3D Interior Rendering Portfolio

A minimal, editorial single-page portfolio website for a 3D interior rendering and visualization studio. Inspired by minimalist art direction, large typography, generous whitespace, big imagery, and smooth scroll kinematics.

---

## 🌟 Editorial Structure & Features

### 1. Minimal Sticky Header
- Studio name/logo on the left.
- Section links on the right: `Projects`, `About`, `Contact`.
- **"Get a Quote"** accent button.
- **Theme Switcher**: Instant toggle between **Deep Black (`#0A0B0B`)** and **Off-White (`#F8F7F4`)**.
- Responsive mobile hamburger menu.

### 2. Editorial Hero
- Large bold sans-serif heading (`Inter Tight`) for founder / studio name.
- Two role lines: `// 3D Visualizer` & `// Interior Designer`.
- Social links: `LinkedIn`, `Instagram`, `Pinterest`, `Behance`.
- **Asymmetric Dual Renders**: One wide render (7 columns) and one tall render (5 columns) offset asymmetrically.

### 3. // Intro Section
- Statement headline: *"We turn floor plans and ideas into photorealistic interiors, so you can see your space before it is built."*
- Turnaround & revisions guarantee: *"Fast 48-hour turnarounds, unlimited material refinements, and sub-millimeter architectural scale precision."*
- **"See our work"** button that smoothly scrolls to `#projects`.

### 4. // Services (Numbered 01–04 with Expandable Details)
- Large titles that expand on hover or click to reveal descriptions and numbered sub-items:
  - **01 Residential Rendering**: Living rooms, bedrooms, kitchens, bathrooms, villas.
  - **02 Commercial Rendering**: Offices, retail, restaurants, hotels.
  - **03 2D to 3D Conversion**: Floor plan to 3D isometric cutaways, furniture layouts, material selection.
  - **04 Walkthrough and 360°**: 60fps video walkthroughs, panoramas, VR-ready tours.

### 5. // Projects (Vertical List with Hover Cursor Follower)
- Vertical editorial list of curated projects.
- Each row displays: `(year)`, project title, short 2-line description, and tags (`Living Room`, `Penthouse`, `Minimalist Luxury`).
- **Floating Image Cursor Follower**: Hovering over any project row causes a high-resolution render card to glide with mouse movement.
- Each row links to a dedicated **Project Detail Page** featuring:
  - Hero render
  - Interactive **Before / After comparison slider** (Raw framing & CAD vs 4K render)
  - Interactive **Floor Plan Blueprint** with clickable camera viewpoint hotspots
  - Project brief & CGI solution narrative
  - High-res **4K Gallery Grid** with fullscreen Lightbox
  - **Next Project Link** (`View Next Project →`)

### 6. // Testimonials (Slider with Counter "01 / 03")
- Slider with real-time counter (`01 / 03`), large editorial quotes, client name, role, firm, and client portrait.
- Auto-advance with left/right arrow navigation and pause on hover.

### 7. Footer "Reach Out"
- Large heading: **`Reach Out —`**
- Studio address, email, phone/WhatsApp, and social links.
- **Interactive Quote Form**: Captures name, email, project type, area in sq ft (interactive slider), message, and floor plan file upload preview.
- **Back to Top** smooth scroll link.

### 8. Extra Features
- **Floating WhatsApp Button**: Persistent bottom-right badge with pulsing status dot.
- **Top Hairline Scroll Progress Bar**: Minimal scroll tracker.
- **Floating Chapter Badge**: Displays active section (`// 01 INTRO`, `// 02 SERVICES`, etc.) on scroll.
- **SEO & Social Meta Tags**: OpenGraph, Twitter Cards, and JSON-LD structured data.

---

## 🛠️ Easy Editing & Customization

All text, studio name, city, accent color, and projects are centralized in **`src/config/siteConfig.js`**:

```javascript
// src/config/siteConfig.js
export const siteConfig = {
  studio: {
    name: "STUDIO VERSE",          // ⬅️ Replace with [STUDIO NAME]
    founderName: "ALEX GRAHAM",    // ⬅️ Founder / Studio Name
    roles: ["3D Visualizer", "Interior Designer"],
    city: "New York, NY",          // ⬅️ Replace with [CITY]
    email: "hello@studioverse.design",
    phone: "+1 (212) 847-9200",
    whatsappNumber: "12128479200",
  },
  colors: {
    accent: "#FF531F",            // ⬅️ Replace with your [COLOR]
  },
  // ... services, projects, testimonials
};
```

---

## 🚀 Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# The website will be live at http://localhost:3000

# 3. Build optimized production bundle
npm run build
```
