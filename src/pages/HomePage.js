import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';
import { renderTestimonialsSlider, initTestimonialsEvents } from '../components/TestimonialsSlider.js';
import { renderQuoteFormHtml, initQuoteFormEvents } from '../components/QuoteModal.js';

export function renderHomePage() {
  return `
    <div class="space-y-28 sm:space-y-40 pb-16">
      
      <!-- ============================================================ -->
      <!-- 2. HERO SECTION -->
      <!-- ============================================================ -->
      <section id="hero" class="pt-32 sm:pt-40 px-5 sm:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        <!-- FOUNDER / STUDIO NAME AS LARGE HEADING & ROLE LINES -->
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[var(--color-border)] pb-6">
            <h1 class="font-heading text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-[var(--color-text)] leading-[0.9]">
              ${siteConfig.studio.founderName || appState.studioName}
            </h1>
            
            <!-- TWO ROLE LINES -->
            <div class="text-xs sm:text-sm uppercase tracking-widest font-mono text-[var(--color-text-muted)] sm:text-right space-y-1">
              <div class="text-[var(--color-text)] font-bold">// ${siteConfig.studio.roles[0]}</div>
              <div>// ${siteConfig.studio.roles[1]}</div>
            </div>
          </div>

          <!-- SOCIAL LINKS BAR -->
          <div class="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
            <div class="flex flex-wrap items-center gap-6 sm:gap-8">
              ${siteConfig.socialLinks.map(s => `
                <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                  <span>${s.name}</span>
                  <span class="text-[10px] opacity-60">↗</span>
                </a>
              `).join('')}
            </div>
            
            <div class="flex items-center gap-2 text-[var(--color-text-muted)] font-mono text-[11px]">
              <span class="w-2 h-2 rounded-full bg-[#FF531F] animate-pulse"></span>
              <span>Available for Renders // ${appState.city}</span>
            </div>
          </div>
        </div>

        <!-- ASYMMETRIC DUAL RENDER IMAGES (One Wide, One Tall) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          <!-- IMAGE 1: WIDE RENDER (7 cols) -->
          <div class="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">
            <div class="aspect-16/10 overflow-hidden">
              <img src="${siteConfig.heroImages.wide.url}" alt="${siteConfig.heroImages.wide.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="p-4 sm:p-5 flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-surface)] border-t border-[var(--color-border)]">
              <span class="text-[var(--color-text)] font-semibold">${siteConfig.heroImages.wide.caption}</span>
              <span>// (${siteConfig.heroImages.wide.year})</span>
            </div>
          </div>

          <!-- IMAGE 2: TALL RENDER (5 cols, asymmetrically placed) -->
          <div class="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl lg:mt-12">
            <div class="aspect-4/5 overflow-hidden">
              <img src="${siteConfig.heroImages.tall.url}" alt="${siteConfig.heroImages.tall.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="p-4 sm:p-5 flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-surface)] border-t border-[var(--color-border)]">
              <span class="text-[var(--color-text)] font-semibold">${siteConfig.heroImages.tall.caption}</span>
              <span>// (${siteConfig.heroImages.tall.year})</span>
            </div>
          </div>

        </div>

      </section>


      <!-- ============================================================ -->
      <!-- 3. // INTRO SECTION (With Scroll-Driven Letter Highlighting) -->
      <!-- ============================================================ -->
      <section id="intro" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">
            ${siteConfig.intro.label}
          </span>
          <span class="font-mono text-[11px] text-[var(--color-text-muted)]">Scroll to highlight text ↓</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-9 space-y-6">
            <!-- HEADLINE WITH SCROLL-DRIVEN LETTER HIGHLIGHT -->
            <p data-scroll-highlight class="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-text)] leading-[1.12] uppercase select-none">
              "${siteConfig.intro.headline}"
            </p>

            <!-- SECOND LINE WITH SCROLL-DRIVEN LETTER HIGHLIGHT -->
            <p data-scroll-highlight class="text-base sm:text-xl font-medium text-[var(--color-text)] max-w-3xl leading-relaxed select-none">
              ${siteConfig.intro.subtext}
            </p>
          </div>

          <!-- SEE OUR WORK BUTTON -->
          <div class="lg:col-span-3 lg:text-right pt-4">
            <a href="${siteConfig.intro.ctaTarget}" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF531F] hover:bg-[#E04212] text-black font-bold uppercase tracking-wider text-xs transition-all shadow-xl hover:scale-105 cursor-pointer">
              <span>${siteConfig.intro.ctaText}</span>
              ${renderIcon('arrowRight', 'w-4 h-4')}
            </a>
          </div>
        </div>
      </section>


      <!-- ============================================================ -->
      <!-- 4. // SERVICES (01-04 NUMBERED LIST WITH ACCORDION DETAILS) -->
      <!-- ============================================================ -->
      <section id="services" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">
            // Services
          </span>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Click or hover to expand capabilities</span>
        </div>

        <!-- EXPANDABLE SERVICES LIST -->
        <div class="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)]">
          ${siteConfig.services.map((s, idx) => `
            <div class="service-item py-6 sm:py-10 transition-colors group cursor-pointer" data-index="${idx}">
              
              <!-- MAIN TITLE ROW -->
              <div class="flex items-baseline justify-between gap-4">
                <div class="flex items-baseline gap-4 sm:gap-8">
                  <span class="font-mono text-xs sm:text-sm font-bold text-[#FF531F]">
                    ${s.num}
                  </span>
                  <h3 class="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--color-text)] group-hover:text-[#FF531F] transition-colors leading-none">
                    ${s.title}
                  </h3>
                </div>
                <div class="text-xs font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] shrink-0 flex items-center gap-1.5">
                  <span class="service-toggle-icon text-lg transform transition-transform group-hover:rotate-45">+</span>
                </div>
              </div>

              <!-- EXPANDABLE DETAILS & SUB-ITEMS -->
              <div class="service-content hidden pt-6 sm:pt-8 pl-8 sm:pl-16 space-y-4">
                <p class="text-sm sm:text-base text-[var(--color-text)] font-medium max-w-2xl leading-relaxed">
                  ${s.description}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  ${s.subItems.map((sub, subIdx) => `
                    <div class="flex items-center gap-2 text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-surface)] border border-[var(--color-border)] px-3.5 py-2 rounded-lg">
                      <span class="text-[#FF531F] font-bold">0${subIdx + 1}</span>
                      <span class="text-[var(--color-text)]">${sub}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

            </div>
          `).join('')}
        </div>
      </section>


      <!-- ============================================================ -->
      <!-- 5. // PROJECTS (VERTICAL LIST WITH HOVER CURSOR PREVIEW) -->
      <!-- ============================================================ -->
      <section id="projects" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8 relative">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">
            // Projects
          </span>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Hover rows to view renders • Click for full case study</span>
        </div>

        <!-- FLOATING IMAGE CURSOR FOLLOWER -->
        <div id="project-cursor-preview" class="hidden md:block">
          <img id="project-cursor-img" src="" alt="Project Preview" class="w-full h-full object-cover">
        </div>

        <!-- VERTICAL LIST OF PROJECTS -->
        <div class="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)]">
          ${siteConfig.projects.map(p => `
            <div class="project-row py-8 sm:py-12 transition-all group block cursor-pointer" data-project-id="${p.id}" data-preview="${p.image}">
              
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                
                <!-- YEAR & TITLE -->
                <div class="lg:col-span-5 space-y-1">
                  <span class="font-mono text-xs text-[#FF531F] font-bold tracking-wider">${p.year}</span>
                  <h3 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[var(--color-text)] group-hover:text-[#FF531F] transition-colors leading-none">
                    <a href="#/project/${p.id}">${p.title}</a>
                  </h3>
                </div>

                <!-- 2-LINE DESCRIPTION -->
                <div class="lg:col-span-4">
                  <p class="text-xs sm:text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                    ${p.shortDescription}
                  </p>
                </div>

                <!-- TAGS & ARROW -->
                <div class="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4">
                  <div class="flex flex-wrap gap-1.5">
                    ${p.tags.map(t => `
                      <span class="px-2.5 py-1 text-[10px] font-mono uppercase bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] rounded-md">
                        ${t}
                      </span>
                    `).join('')}
                  </div>
                  
                  <a href="#/project/${p.id}" class="w-10 h-10 rounded-full border border-[var(--color-border)] group-hover:border-[#FF531F] group-hover:bg-[#FF531F] group-hover:text-black flex items-center justify-center transition-all shrink-0" aria-label="Open Project Case Study">
                    <span class="text-sm font-bold">↗</span>
                  </a>
                </div>

              </div>

              <!-- INLINE IMAGE FOR MOBILE SCREENS -->
              <div class="mt-4 md:hidden rounded-xl overflow-hidden border border-[var(--color-border)] aspect-16/10">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
              </div>

            </div>
          `).join('')}
        </div>
      </section>


      <!-- ============================================================ -->
      <!-- 6. // TESTIMONIALS (SLIDER WITH COUNTER "01 / 03") -->
      <!-- ============================================================ -->
      <section id="testimonials" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">
            // Testimonials
          </span>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Verified Client Feedback</span>
        </div>

        ${renderTestimonialsSlider()}
      </section>


      <!-- ============================================================ -->
      <!-- 7. FOOTER "REACH OUT" WITH QUOTE FORM -->
      <!-- ============================================================ -->
      <section id="contact" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-12">
        <div class="border-t border-[var(--color-border)] pt-12">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- LEFT: REACH OUT LARGE HEADING & COORDINATES -->
            <div class="lg:col-span-5 space-y-8">
              <div class="space-y-4">
                <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">
                  // Contact
                </span>
                <h2 class="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[var(--color-text)] leading-[0.88]">
                  ${siteConfig.reachOut.heading}
                </h2>
                <p class="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-md">
                  ${siteConfig.reachOut.subheading}
                </p>
              </div>

              <!-- STUDIO COORDINATES -->
              <div class="space-y-3 font-mono text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-6">
                <div>
                  <span class="text-[var(--color-text)] font-bold">Address:</span> ${siteConfig.reachOut.address}
                </div>
                <div>
                  <span class="text-[var(--color-text)] font-bold">Email:</span> 
                  <a href="mailto:${siteConfig.reachOut.email}" class="text-[#FF531F] hover:underline">${siteConfig.reachOut.email}</a>
                </div>
                <div>
                  <span class="text-[var(--color-text)] font-bold">Phone / WhatsApp:</span> 
                  <a href="tel:${siteConfig.studio.phone}" class="hover:text-[var(--color-text)]">${siteConfig.studio.phoneDisplay}</a>
                </div>
              </div>

              <!-- SOCIAL LINKS -->
              <div class="flex flex-wrap gap-4 pt-2 text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                ${siteConfig.socialLinks.map(s => `
                  <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="hover:text-[#FF531F] transition-colors">
                    ${s.name} ↗
                  </a>
                `).join('')}
              </div>

              <!-- BACK TO TOP -->
              <div class="pt-6">
                <a href="#hero" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[#FF531F] transition-colors">
                  <span>Back to top</span>
                  <span>↑</span>
                </a>
              </div>
            </div>

            <!-- RIGHT: SIMPLE QUOTE FORM -->
            <div class="lg:col-span-7 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div class="mb-6 space-y-1">
                <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">// Quick Estimate</span>
                <h3 class="font-heading text-2xl sm:text-3xl font-black uppercase text-[var(--color-text)]">
                  Request a Quote
                </h3>
              </div>
              ${renderQuoteFormHtml('footer-reach-out-form')}
            </div>

          </div>

        </div>
      </section>

    </div>
  `;
}

export function initHomePageEvents() {
  initTestimonialsEvents();
  initQuoteFormEvents('footer-reach-out-form');

  const heroQuoteBtn = document.getElementById('hero-quote-btn');
  if (heroQuoteBtn) {
    heroQuoteBtn.onclick = () => appState.openQuoteModal();
  }

  // Services Expand on Hover or Click
  document.querySelectorAll('.service-item').forEach(item => {
    const content = item.querySelector('.service-content');
    const icon = item.querySelector('.service-toggle-icon');

    function toggle(open) {
      if (!content) return;
      if (open) {
        content.classList.remove('hidden');
        if (icon) icon.innerText = '−';
      } else {
        content.classList.add('hidden');
        if (icon) icon.innerText = '+';
      }
    }

    item.onclick = (e) => {
      if (content.classList.contains('hidden')) {
        toggle(true);
      } else {
        toggle(false);
      }
    };

    item.onmouseenter = () => toggle(true);
    item.onmouseleave = () => toggle(false);
  });

  // Projects Cursor Preview Tracker (Alexfolio / Editorial Style)
  const previewBox = document.getElementById('project-cursor-preview');
  const previewImg = document.getElementById('project-cursor-img');
  const projectRows = document.querySelectorAll('.project-row');

  if (previewBox && previewImg) {
    projectRows.forEach(row => {
      row.onmouseenter = () => {
        const imgUrl = row.getAttribute('data-preview');
        if (imgUrl) {
          previewImg.src = imgUrl;
          previewBox.classList.add('active');
        }
      };

      row.onmouseleave = () => {
        previewBox.classList.remove('active');
      };

      row.onmousemove = (e) => {
        previewBox.style.left = `${e.clientX + 20}px`;
        previewBox.style.top = `${e.clientY}px`;
      };

      // Click to go to project
      row.onclick = (e) => {
        if (e.target.tagName !== 'A') {
          const id = row.getAttribute('data-project-id');
          if (id) appState.setRoute(`#/project/${id}`);
        }
      };
    });
  }
}
