/**
 * ===================================================================
 * 🎨 TD_ALEXFOLIO PORTFOLIO CONFIGURATION
 * ===================================================================
 * Reverse-engineered from https://volt.supply/templates/alexfolio
 * Designed for digital designers, art directors, product designers, and creative studios.
 */

export const siteConfig = {
  // --- COMPANY & BRAND IDENTITY ---
  studio: {
    name: "Vesaree Technologies",
    legalName: "Vesaree Technologies Pvt. Ltd.",
    founderName: "Vesaree Technologies",
    roles: ["AI Automation & Growth", "Software & SaaS Engineering"],
    city: "India",
    country: "India",
    address: "India + Global",
    secondaryAddress: "",
    email: "vesareetechnologies@gmail.com",
    phone: "+91 76908 90896",
    phoneDisplay: "+91 76908 90896",
    whatsappNumber: "917690890896",
    whatsappDefaultMessage: "Hello Vesaree Technologies, I would like to discuss a project.",
    turnaround: "Startup-friendly delivery built around your business",
    revisions: "Clear scope, milestones and collaborative delivery",
  },

  // --- BRAND COLORS & THEME ---
  colors: {
    accent: "#FF442B", // Alexfolio Electric Vermilion
    accentHover: "#E03822",
    bgDark: "#121111",
    bgLight: "#FAF9F6",
    surfaceDark: "#181717",
    surfaceLight: "#FFFFFF",
    textDark: "#FAFAFA",
    textLight: "#121111",
  },

  // --- DIRECT CHANNELS & LINKS ---
  socialLinks: [
    { name: "WhatsApp", url: "https://wa.me/917690890896", handle: "+91 76908 90896" },
    { name: "Email", url: "mailto:vesareetechnologies@gmail.com", handle: "vesareetechnologies@gmail.com" },
    { name: "Website", url: "https://vesaree-technologies.vercel.app/", handle: "vesaree-technologies.vercel.app" }
  ],

  // --- ASYMMETRIC HERO SHOWCASE IMAGERY (Alexfolio) ---
  heroImages: {
    // Large Wide Project Card
    wide: {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
      caption: "Formula Vintage // Digital Platform & Brand",
      year: "2024",
      projectLink: "#/project/formula-vintage"
    },
    // Large Tall Project Card (Asymmetrically offset)
    tall: {
      url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=85",
      caption: "Sprey Zest // Visual Identity & Packaging",
      year: "2024",
      projectLink: "#/project/sprey-zest"
    }
  },

  // --- // INTRO SECTION ---
  intro: {
    label: "// Intro",
    headline: "Build smarter. Automate faster. Grow bigger.",
    subtext: "Practical AI solutions, business automation and custom software — helping ambitious businesses in India and worldwide move forward without enterprise-sized budgets.",
    ctaText: "See our Work",
    ctaTarget: "#projects"
  },

  // --- // SERVICES (Alexfolio 01-04 Numbered Grid) ---
  services: [
    {
      num: "01",
      title: "Branding & Marketing",
      description: "Branding that builds trust and drives loyalty through clear visuals and messaging into an unforgettable online experience.",
      subItems: [
        "Brand Strategy and Messaging",
        "Logo Design & Brandmark Systems",
        "Visual Identity & Typography Scale",
        "Brand Guidelines & Component Frameworks",
        "Marketing Materials & Collateral",
        "Kinetic & Motion Design"
      ]
    },
    {
      num: "02",
      title: "Website Design",
      description: "Not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to web and digital touchpoints.",
      subItems: [
        "High-Conversion Landing Pages",
        "Corporate & Enterprise Websites",
        "Interactive Editorial Blogs & Media",
        "E-commerce & DTC Shopping Flows",
        "Complex Web Systems & Dashboards"
      ]
    },
    {
      num: "03",
      title: "Web Development",
      description: "User-focused development that maximizes responsiveness, animations, SEO health, and flawless cross-device performance.",
      subItems: [
        "Framer, Webflow, and Custom Code Builds",
        "Headless CMS Integration",
        "Technical SEO & Core Web Vitals Optimization",
        "Seamless Site Migrations & Hosting",
        "Micro-Interactions & Scroll Animations"
      ]
    },
    {
      num: "04",
      title: "Application Design",
      description: "User-focused app design that maximizes usability, intuitive information architecture, and encourages sustained customer retention.",
      subItems: [
        "Native iOS & Android Mobile Apps",
        "Modern Desktop Applications",
        "Multi-Tenant Complex Systems",
        "Figma Design Systems & Token Optimization",
        "Interactive Prototypes & User Testing"
      ]
    }
  ],

  // --- // SELECTED PROJECTS (Alexfolio Core Portfolio) ---
  projects: [
    {
      id: "formula-vintage",
      year: "(2024)",
      title: "Formula Vintage",
      shortDescription: "For Formula Vintage, we crafted a design that honors the rich heritage of classic cars while adding a modern twist. Combining timeless elegance with sleek, contemporary elements, we created an experience that appeals to both enthusiasts and newcomers.",
      tags: ["Landing Page", "Mobile App", "Redesign"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
      client: "Formula Vintage Automobilia",
      timeline: "6 Weeks",
      role: "Lead Art Director & Product Designer",
      software: "Figma • Framer • WebGL • After Effects",
      brief: "The client needed a digital flagship to auction and showcase multimillion-dollar vintage vehicles, requiring prestige typography, interactive 3D rotations, and a seamless VIP bidding app.",
      solution: "We established a high-contrast editorial system combining bespoke serif titling with ultra-clean monospaced spec sheets and 60fps micro-animations.",
      hotspots: [
        { id: "h1", x: "32%", y: "45%", label: "Interactive 3D Engine", desc: "Real-time car configurator with dynamic studio lighting" },
        { id: "h2", x: "68%", y: "58%", label: "Bespoke Auction Bidding", desc: "Sub-second synchronized bid stream for collectors" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "sprey-zest"
    },
    {
      id: "sprey-zest",
      year: "(2024)",
      title: "Sprey Zest",
      shortDescription: "For Sprey Zest, we took a playful, bold approach to packaging and branding. Instead of following the typical fresh or clean aesthetic, we infused energy and personality into every detail, making the product stand out on shelves and bringing a burst of excitement.",
      tags: ["Website Design", "Branding", "Packaging"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
      client: "Zest Beverage Co.",
      timeline: "5 Weeks",
      role: "Brand Identity & E-commerce Architect",
      software: "Figma • Shopify Plus • Cinema 4D",
      brief: "Differentiate an organic sparkling tonic in a crowded supermarket aisle dominated by pale pastel minimalism.",
      solution: "Engineered high-saturation electric palettes, playful custom wordmarks, and an engaging direct-to-consumer digital store that achieved a 38% conversion surge.",
      hotspots: [
        { id: "h1", x: "40%", y: "50%", label: "Custom Typographic Lockup", desc: "Handcrafted bubbly display font optimized for can printing" },
        { id: "h2", x: "75%", y: "35%", label: "Subscription Portal", desc: "One-click flavor mixing with animated carton checkout" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "super-pro"
    },
    {
      id: "super-pro",
      year: "(2020)",
      title: "Super Pro",
      shortDescription: "For Super-Pro, we redefined what it means to be a professional by focusing on the mindset and determination behind success, not just the achievements. The design highlighted the drive and passion of athletes, creating a bold, empowering experience.",
      tags: ["Desktop App", "Mobile App", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
      client: "Super-Pro Athletics Technologies",
      timeline: "12 Weeks",
      role: "Lead UI/UX System Designer",
      software: "Figma • React • Electron • Tailwind CSS",
      brief: "Build a cross-platform biometric training analytics platform for elite Olympic athletes and coaches.",
      solution: "Created high-contrast dark telemetry dashboards with sub-second biometric graphing and offline sync across desktop and mobile devices.",
      hotspots: [
        { id: "h1", x: "50%", y: "45%", label: "Real-time Telemetry HUD", desc: "Heart-rate variability and wattage metrics rendered in Canvas" },
        { id: "h2", x: "25%", y: "65%", label: "Athlete Comparison Deck", desc: "Side-by-side video stroke overlay and force curve" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "architech-buildings"
    },
    {
      id: "architech-buildings",
      year: "(2024)",
      title: "Architech Buildings",
      shortDescription: "We redefined the concept of modern living by creating a design that challenges conventional boundaries. Focusing on comfort, functionality, and unexpected elements, we transformed the ordinary into something extraordinary.",
      tags: ["Mobile App", "Branding", "Website Design"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1641923599291-8fa80dfb5728?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      client: "Architech Urban Development",
      timeline: "8 Weeks",
      role: "Digital Design Director",
      software: "Figma • Three.js • Next.js",
      brief: "Launch a premier leasing and tenant management platform for three new brutalist luxury residential towers in Berlin.",
      solution: "Engineered interactive 3D floor plan viewers, solar path simulators, and digital resident keys within an elegant minimalist interface.",
      hotspots: [
        { id: "h1", x: "30%", y: "40%", label: "Interactive Unit Selector", desc: "Explore floor levels with live price & sunshine orientation" },
        { id: "h2", x: "70%", y: "60%", label: "Smart Resident Key", desc: "NFC digital access and private amenities reservation" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "posnen-gallery"
    },
    {
      id: "posnen-gallery",
      year: "(2022)",
      title: "Posnen Gallery",
      shortDescription: "A minimalist digital exhibition and viewing room designed for an avant-garde contemporary art gallery in Copenhagen, focusing on calm pacing and high-resolution spatial rendering.",
      tags: ["Exhibition", "Web Design", "Art Direction"],
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85",
      client: "Posnen Contemporary",
      timeline: "4 Weeks",
      role: "Lead Digital Designer",
      software: "Figma • SvelteKit • WebGL",
      brief: "Present digital artworks and sculptures in a serene, distraction-free environment that mirrors the physical gallery experience.",
      solution: "Created an ambient monochromatic viewing room with subtle spatial audio and infinite smooth canvas panning.",
      hotspots: [
        { id: "h1", x: "45%", y: "50%", label: "Artwork Viewing Room", desc: "Calibrated color profiles for faithful reproduction" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1770299302060-c61d67591d69?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "fringe-sports"
    },
    {
      id: "fringe-sports",
      year: "(2023)",
      title: "Fringe Sports",
      shortDescription: "For Fringe Sports, we built an immersive desktop and mobile app pairing live athletic broadcasts with community predictions and interactive stats.",
      tags: ["Desktop App", "Entertainment", "UI System"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85",
      beforeImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      afterImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85",
      client: "Fringe Media Group",
      timeline: "7 Weeks",
      role: "Product & Motion Designer",
      software: "Figma • Framer Motion • WebSockets",
      brief: "Combine streaming video feeds with live fantasy picks into a single responsive pane without screen clutter.",
      solution: "Constructed modular layout cards that fluidly dock, expand, and shift based on live game events and user focus.",
      hotspots: [
        { id: "h1", x: "55%", y: "40%", label: "Live Event Stream", desc: "Zero-latency synchronization with interactive chat overlays" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85"
      ],
      nextProjectId: "formula-vintage"
    }
  ],

  // --- // RECOGNITION AND AWARDS (Alexfolio Core Section) ---
  awards: [
    { num: "01", project: "Vibrent", award: "Site of the Day (SOTD)", platform: "Awwwards", year: "2024" },
    { num: "02", project: "CoSpace", award: "Honorable Mention", platform: "Awwwards", year: "2024" },
    { num: "03", project: "Farouk & Brown", award: "Dribbble Weekly Picks", platform: "Dribbble", year: "2023" },
    { num: "04", project: "Bio Sun", award: "Site of the Day (FWA)", platform: "FWA", year: "2023" },
    { num: "05", project: "Info Gear", award: "Best UI / UX Innovation", platform: "CSSDA", year: "2023" },
    { num: "06", project: "No Code Mate", award: "Design Innovation Award", platform: "Framer Awards", year: "2022" }
  ],

  // --- // TESTIMONIALS (Alexfolio /03 Sticky Scroll Carousel) ---
  testimonials: [
    {
      id: "t1",
      num: "01",
      quote: "His keen eye for detail and innovative approach impressed our team, turning challenges into creative solutions that set him apart.",
      name: "Maya Lopez",
      role: "CEO",
      company: "Fundwizz",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5
    },
    {
      id: "t2",
      num: "02",
      quote: "With a unique blend of creativity and precision, he brought fresh perspectives that drove meaningful results.",
      name: "Ray Brown",
      role: "Head of Product",
      company: "ISO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5
    },
    {
      id: "t3",
      num: "03",
      quote: "His strong problem-solving skills and dedication to excellence consistently elevated our projects, making a lasting impact on the team.",
      name: "George Jones",
      role: "Product Manager",
      company: "Gliss",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5
    }
  ],

  // --- // REACH OUT (Contact Section) ---
  contact: {
    headline: "Reach Out —",
    subtext: "Tell us about your business challenge or product idea. We'll help you explore a practical way forward.",
    officeLabel: "Service Reach:",
    officeValue: "India + Global",
    mailLabel: "Email:",
    mailValue: "vesareetechnologies@gmail.com",
    phoneLabel: "WhatsApp / Phone:",
    phoneValue: "+91 76908 90896"
  }
};
