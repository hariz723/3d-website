/**
 * ===================================================================
 * 🎨 SINGLE-PAGE EDITORIAL PORTFOLIO CONFIGURATION
 * ===================================================================
 * Easily customize [STUDIO NAME], [CITY], [COLOR], projects, and services.
 */

export const siteConfig = {
  // --- STUDIO & FOUNDER IDENTITY ---
  studio: {
    name: "STUDIO VERSE", // ⬅️ Replace with [STUDIO NAME]
    founderName: "ALEX GRAHAM", // ⬅️ Founder / Studio Name
    roles: ["3D Visualizer", "Interior Designer"], // ⬅️ Two role lines
    city: "New York, NY", // ⬅️ Replace with [CITY]
    country: "United States",
    address: "482 Broome Street, SoHo, New York, NY 10013",
    email: "hello@studioverse.design",
    phone: "+1 (212) 847-9200",
    phoneDisplay: "+1 (212) 847-9200",
    whatsappNumber: "12128479200",
    whatsappDefaultMessage: "Hi Studio Verse! I have architectural plans and would like to request a 3D interior rendering quote.",
    turnaround: "48-Hour Initial Whitecard Drafts",
    revisions: "Unlimited Material Refinements Included",
  },

  // --- BRAND COLORS & THEME ---
  colors: {
    accent: "#FF531F", // ⬅️ Replace with your [COLOR] (Flame Orange)
    accentHover: "#E04212",
    bgDark: "#0A0B0B",
    bgLight: "#F8F7F4",
    textDark: "#F3F4F4",
    textLight: "#111212",
  },

  // --- SOCIAL PROFILES ---
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/studioverse" },
    { name: "Instagram", url: "https://instagram.com", handle: "@studioverse.3d" },
    { name: "Pinterest", url: "https://pinterest.com", handle: "pinterest.com/studioverse" },
    { name: "Behance", url: "https://behance.net", handle: "behance.net/studioverse" }
  ],

  // --- ASYMMETRIC HERO RENDER IMAGERY ---
  heroImages: {
    // Large Wide Render
    wide: {
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      caption: "Penthouse Great Room // Manhattan",
      year: "2024"
    },
    // Large Tall Render
    tall: {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
      caption: "Wabi-Sabi Suite // Kyoto Pavilion",
      year: "2024"
    }
  },

  // --- // INTRO SECTION ---
  intro: {
    label: "// Intro",
    headline: "We turn floor plans and ideas into photorealistic interiors, so you can see your space before it is built.",
    subtext: "Fast 48-hour turnarounds, unlimited material refinements, and sub-millimeter architectural scale precision. No guesswork, no remodeling change orders.",
    ctaText: "See our work",
    ctaTarget: "#projects"
  },

  // --- // SERVICES (Numbered List 01-04 with Expanding Details) ---
  services: [
    {
      num: "01",
      title: "Residential Rendering",
      description: "Atmospheric, photorealistic visual storytelling for private residences, luxury estates, and townhomes.",
      subItems: [
        "Living rooms & open salons",
        "Master suites & dressing rooms",
        "Custom chef kitchens & wine cellars",
        "Spa ensuite bathrooms",
        "Luxury multi-level villas & outdoor patios"
      ]
    },
    {
      num: "02",
      title: "Commercial Rendering",
      description: "High-impact architectural CGI for commercial developments, tenant leasing, and investor pitch decks.",
      subItems: [
        "Executive corporate offices & boardrooms",
        "Flagship retail boutiques & showrooms",
        "Bespoke restaurants & cocktail bars",
        "Boutique hotels & hospitality lobbies"
      ]
    },
    {
      num: "03",
      title: "2D to 3D Conversion",
      description: "Transforming flat AutoCAD drawings, sketches, or BIM models into dimensionally accurate 3D geometry.",
      subItems: [
        "2D floor plan to 3D isometric cutaways",
        "Spatial furniture layouts & circulation studies",
        "Tactile material, stone & fabric selection matching",
        "Daylight ingress & artificial lighting simulation"
      ]
    },
    {
      num: "04",
      title: "Walkthrough and 360°",
      description: "Next-generation immersive experiences that let buyers walk through unbuilt spaces before construction.",
      subItems: [
        "60fps cinematic 4K video walkthroughs",
        "360° interactive high-resolution panoramas",
        "VR-ready real-time tours (Unreal Engine 5)",
        "Social media reels & marketing video cuts"
      ]
    }
  ],

  // --- // PROJECTS (Vertical List with Hover Cursor Preview & Detail Pages) ---
  projects: [
    {
      id: "tribeca-penthouse",
      year: "(2024)",
      title: "The Tribeca Glass Penthouse",
      shortDescription: "A full-floor Manhattan sanctuary featuring floor-to-ceiling glass, custom fluted limestone columns, and brushed bronze accents.",
      tags: ["Living Room", "Penthouse", "Minimalist Luxury"],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      floorPlanImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      location: "Tribeca, New York",
      area: "3,450 sq ft",
      client: "Private Client & Interior Studio",
      turnaround: "4 Business Days",
      software: "3ds Max • Corona 11 • Photoshop",
      brief: "The client needed to test how natural southern afternoon daylight reacted with polished micro-cement floors and delicate Italian oak millwork before committing to a $180,000 cabinetry order.",
      solution: "We calibrated the physical sun coordinates for Greenwich Street at 3:30 PM autumn sun, proving the exact warm illumination bounce across the Travertine stone.",
      hotspots: [
        { id: "h1", x: "28%", y: "42%", label: "Curved Fluted Column", desc: "Solid Travertine precision-modeled from CAD elevation" },
        { id: "h2", x: "65%", y: "55%", label: "Bespoke Oak Credenza", desc: "Integrated hidden 2700K warm LED illumination" },
        { id: "h3", x: "82%", y: "30%", label: "NYC Skyline Glazing", desc: "Accurately refracted Manhattan daylight study" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "kyoto-wabi-residence"
    },
    {
      id: "kyoto-wabi-residence",
      year: "(2024)",
      title: "Kyoto Serenity Primary Suite",
      shortDescription: "A meditative primary suite retreat integrating tatami-inspired platform beds, lime wash plaster, and Hinoki cedar wood screens.",
      tags: ["Master Suite", "Japandi", "Luxury Villa"],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
      floorPlanImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      location: "East Hampton, NY",
      area: "1,850 sq ft",
      client: "Custom Home Builder",
      turnaround: "3 Business Days",
      software: "3ds Max • V-Ray 6 • Marvelous Designer",
      brief: "Marketing a ground-up Japandi villa ahead of permit approval, emphasizing organic minimalism, natural linen textures, and indoor-outdoor zen gardens.",
      solution: "Modeled micro-displacement textures for breathable lime plaster walls and simulated morning light filtering through bamboo foliage.",
      hotspots: [
        { id: "h1", x: "35%", y: "60%", label: "Low-Profile Platform", desc: "Solid timber floating frame with concealed underglow" },
        { id: "h2", x: "70%", y: "40%", label: "Limewashed Micro-texture", desc: "4K displacement map reproducing artisan trowel marks" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "monolithic-chef-kitchen"
    },
    {
      id: "monolithic-chef-kitchen",
      year: "(2024)",
      title: "Monolithic Calacatta Chef's Kitchen",
      shortDescription: "A sculptural architectural kitchen centered around a 14-foot bookmatched Calacatta Viola marble island and recessed oak cabinetry.",
      tags: ["Kitchen", "Custom Millwork", "Contemporary"],
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      floorPlanImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      location: "SoHo, New York",
      area: "920 sq ft",
      client: "Private Homeowner",
      turnaround: "3 Business Days",
      software: "3ds Max • Corona 11 • Substance 3D",
      brief: "The homeowner was hesitant between two dramatic marble slab options costing $45,000 each. Our renders previewed the exact continuous waterfall vein alignments.",
      solution: "Produced sub-surface scattering lighting tests that proved the dark burgundy veining provided ideal visual weight against smoked thermo-oak.",
      hotspots: [
        { id: "h1", x: "48%", y: "58%", label: "Bookmatched Island", desc: "Full stone slab mapping with continuous waterfall edge" },
        { id: "h2", x: "20%", y: "45%", label: "Concealed Bar Backsplash", desc: "Warm indirect cove illumination at 2700K" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "soho-boutique-atelier"
    },
    {
      id: "soho-boutique-atelier",
      year: "(2023)",
      title: "Couture Flagship Atelier & Lounge",
      shortDescription: "A high-concept commercial retail space blending historic cast-iron columns with curvilinear acoustic felt displays and spotlighting.",
      tags: ["Commercial", "Retail Flagship", "Hospitality"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      floorPlanImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      location: "SoHo Cast Iron District, NY",
      area: "4,800 sq ft",
      client: "Commercial Retail Developer",
      turnaround: "5 Business Days",
      software: "3ds Max • Corona • Unreal Engine 5",
      brief: "Securing an international fashion anchor tenant before interior construction commenced.",
      solution: "Delivered 12 ultra-high resolution marketing renders and an interactive VR walkthrough that closed the lease within 14 days.",
      hotspots: [
        { id: "h1", x: "32%", y: "40%", label: "Cast Iron Column", desc: "Digitally scanned original historic 1902 structure" },
        { id: "h2", x: "68%", y: "52%", label: "Curved Display Plinth", desc: "Hand-cast pigmented concrete with recessed base" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "scandinavian-spa-bath"
    },
    {
      id: "scandinavian-spa-bath",
      year: "(2023)",
      title: "Nordic Minimalist Primary Spa Bath",
      shortDescription: "A restorative master ensuite bathroom with a sculpted matte composite soaking tub, cedar slatted sauna, and skylight daylight.",
      tags: ["Bathroom", "Spa Ensuite", "Warm Scandinavian"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
      floorPlanImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      location: "West Village, NY",
      area: "460 sq ft",
      client: "Interior Design Studio",
      turnaround: "2 Business Days",
      software: "3ds Max • Corona Renderer • Photoshop",
      brief: "Verifying skylight angle to ensure ambient illumination without excessive glare on polished micro-cement surfaces.",
      solution: "Rendered seasonal solar sun paths showing soft overcast natural morning illumination across all 4 seasons.",
      hotspots: [
        { id: "h1", x: "44%", y: "52%", label: "Solid Core Tub", desc: "Matte white composite with floor-mounted brass filler" },
        { id: "h2", x: "78%", y: "35%", label: "Diffused Skylight", desc: "Simulated 6500K overcast daylight filtration" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "tribeca-penthouse"
    }
  ],

  // --- // TESTIMONIALS (Slider with Counter "01 / 03") ---
  testimonials: [
    {
      id: "t1",
      count: "01",
      total: "03",
      author: "Elena Vance",
      role: "Principal Interior Designer",
      firm: "Vance & Co. Interiors, New York",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      quote: "Before working with this studio, our clients constantly struggled to visualize custom joinery and marble slabs from flat CAD drawings. Their photorealistic renders closed a $1.2M penthouse contract on the first presentation. The lighting fidelity is uncanny."
    },
    {
      id: "t2",
      count: "02",
      total: "03",
      author: "Marcus Thorne",
      role: "Managing Director & Builder",
      firm: "Apex Luxury Developments",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      quote: "We pre-sold 6 out of 8 luxury townhomes 5 months before structural framing was completed, solely using their 3D interior renders and virtual tours. The ROI was more than 40x our rendering investment."
    },
    {
      id: "t3",
      count: "03",
      total: "03",
      author: "David & Sarah Lin",
      role: "Private Homeowners",
      firm: "Greenwich Residence",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      quote: "We were terrified of making an expensive mistake with our open kitchen and double-height ceiling lighting. The 3D render showed us that our original lighting layout was way too dark over the island. That single catch saved us over $14,000 in electrical re-wiring!"
    }
  ],

  // --- FOOTER "REACH OUT" ---
  reachOut: {
    heading: "Reach Out —",
    subheading: "Tell us about your space. We'll turn your floor plans into photorealism.",
    email: "hello@studioverse.design",
    phone: "+1 (212) 847-9200",
    address: "482 Broome Street, SoHo, New York, NY 10013"
  }
};
