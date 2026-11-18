import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';
import { renderTestimonialsSlider, initTestimonialsEvents } from '../components/TestimonialsSlider.js';
import { renderQuoteFormHtml, initQuoteFormEvents } from '../components/QuoteModal.js';

export function renderHomePage() {
  return `
    <div class="space-y-28 sm:space-y-40 pb-16">
      
      <!-- ============================================================ -->
      <!-- 1. HERO SECTION (Alexfolio Bold Typography & Asymmetric Bento) -->
      <!-- ============================================================ -->
      <section id="hero" class="pt-32 sm:pt-40 px-5 sm:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        <!-- FOUNDER / STUDIO NAME AS LARGE HEADING & ROLE LINES -->
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[var(--color-border)] pb-6">
            <h1 class="font-heading text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[var(--color-text)] leading-[0.88]">
              ${siteConfig.studio.founderName || siteConfig.studio.name} —
            </h1>
            
            <!-- TWO ROLE LINES (Alexfolio) -->
            <div class="text-xs sm:text-sm uppercase tracking-widest font-mono text-[var(--color-text-muted)] sm:text-right space-y-1.5 shrink-0">
              <div class="text-[var(--color-text)] font-bold">// ${siteConfig.studio.roles[0]}</div>
              <div>// ${siteConfig.studio.roles[1]}</div>
            </div>
          </div>

          <!-- SOCIAL LINKS BAR & AVAILABILITY STATUS -->
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
              <span class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
              <span>Available for new projects // ${siteConfig.studio.city}</span>
            </div>
          </div>
        </div>

        <!-- ASYMMETRIC DUAL FEATURED SHOWCASE IMAGES (Alexfolio Hero Grid) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          <!-- IMAGE 1: WIDE SHOWCASE (7 cols) -->
          <a href="${siteConfig.heroImages.wide.projectLink || '#projects'}" class="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl block">
            <div class="aspect-16/10 overflow-hidden">
              <img src="${siteConfig.heroImages.wide.url}" alt="${siteConfig.heroImages.wide.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="p-4 sm:p-5 flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-surface)] border-t border-[var(--color-border)]">
              <span class="text-[var(--color-text)] font-bold group-hover:text-[var(--color-accent)] transition-colors">${siteConfig.heroImages.wide.caption}</span>
              <span>// (${siteConfig.heroImages.wide.year})</span>
            </div>
          </a>

          <!-- IMAGE 2: TALL SHOWCASE (5 cols, asymmetrically offset) -->
          <a href="${siteConfig.heroImages.tall.projectLink || '#projects'}" class="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl lg:mt-12 block">
            <div class="aspect-4/5 overflow-hidden">
              <img src="${siteConfig.heroImages.tall.url}" alt="${siteConfig.heroImages.tall.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="p-4 sm:p-5 flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-surface)] border-t border-[var(--color-border)]">
              <span class="text-[var(--color-text)] font-bold group-hover:text-[var(--color-accent)] transition-colors">${siteConfig.heroImages.tall.caption}</span>
              <span>// (${siteConfig.heroImages.tall.year})</span>
            </div>
          </a>

        </div>

      </section>


      <!-- ============================================================ -->
      <!-- 2. // INTRO SECTION (Alexfolio Kinetic Editorial Statement) -->
      <!-- ============================================================ -->
      <section id="about" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8 scroll-mt-28">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
            ${siteConfig.intro.label}
          </span>
          <span class="font-mono text-[11px] text-[var(--color-text-muted)]">Digital Designer & Art Director</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-9 space-y-6">
            <!-- HEADLINE -->
            <p data-scroll-highlight class="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-text)] leading-[1.12] uppercase select-none">
              "${siteConfig.intro.headline}"
            </p>

            <!-- SUBTEXT -->
            <p data-scroll-highlight class="text-base sm:text-xl font-medium text-[var(--color-text-muted)] max-w-3xl leading-relaxed select-none">
              ${siteConfig.intro.subtext}
            </p>
          </div>

          <!-- SEE MY WORK BUTTON -->
          <div class="lg:col-span-3 lg:text-right pt-4">
            <a href="${siteConfig.intro.ctaTarget}" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black font-bold uppercase tracking-wider text-xs font-mono transition-all shadow-xl hover:scale-105 cursor-pointer">
              <span>${siteConfig.intro.ctaText}</span>
              ${renderIcon('arrowRight', 'w-4 h-4')}
            </a>
          </div>
        </div>
      </section>


      <!-- ============================================================ -->
      <!-- 3. // SERVICES (01-04 NUMBERED GRID WITH ACCORDION DETAILS) -->
      <!-- ============================================================ -->
      <section id="services" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8 scroll-mt-28">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
            // Services
          </span>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Click or hover to expand deliverables</span>
        </div>

        <!-- EXPANDABLE SERVICES LIST -->
        <div class="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)]">
          ${siteConfig.services.map((s, idx) => `
            <div class="service-item py-6 sm:py-10 transition-colors group cursor-pointer" data-index="${idx}">
              
              <!-- MAIN TITLE ROW -->
              <div class="flex items-baseline justify-between gap-4">
                <div class="flex items-baseline gap-4 sm:gap-8">
                  <span class="font-mono text-xs sm:text-sm font-bold text-[var(--color-accent)]">
                    ${s.num}
                  </span>
                  <h3 class="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors leading-none">
                    ${s.title}
                  </h3>
                </div>
                <div class="text-xs font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] shrink-0 flex items-center gap-1.5">
                  <span class="service-toggle-icon text-lg transform transition-transform group-hover:rotate-45 font-mono">+</span>
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
                      <span class="text-[var(--color-accent)] font-bold">0${subIdx + 1}</span>
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
      <!-- 4. // SELECTED WORKS / WORK INDEX (Alexfolio Project List) -->
      <!-- ============================================================ -->
      <section id="projects" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8 relative scroll-mt-28">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
              // Selected Works
            </span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
              ${siteConfig.projects.length} Cases
            </span>
          </div>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Hover rows for live preview • Click to inspect</span>
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
                  <span class="font-mono text-xs text-[var(--color-accent)] font-bold tracking-wider">${p.year}</span>
                  <h3 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors leading-none">
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
                  
                  <a href="#/project/${p.id}" class="w-10 h-10 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black flex items-center justify-center transition-all shrink-0" aria-label="Open Project Case Study">
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
      <!-- 5. // RECOGNITION AND AWARDS (Exact Section from Alexfolio) -->
      <!-- ============================================================ -->
      <section id="awards" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8 scroll-mt-28">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
            // Recognition and Awards
          </span>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Industry Accolades & Features</span>
        </div>

        <div class="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)]">
          ${siteConfig.awards.map(a => `
            <div class="py-5 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm font-mono group hover:bg-[var(--color-surface)] px-3 -mx-3 rounded-lg transition-colors">
              <div class="flex items-center gap-4 sm:gap-6">
                <span class="text-xs text-[var(--color-accent)] font-bold">${a.num}</span>
                <span class="font-heading text-lg sm:text-xl font-bold uppercase text-[var(--color-text)]">${a.project}</span>
              </div>
              
              <div class="flex items-center justify-between sm:justify-end gap-6 text-xs text-[var(--color-text-muted)]">
                <span class="text-[var(--color-text)] font-medium">${a.award}</span>
                <span class="px-2 py-0.5 rounded bg-[var(--color-border)] text-[var(--color-text)] font-semibold">${a.platform}</span>
                <span>(${a.year})</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>


      <!-- ============================================================ -->
      <!-- 6. // TESTIMONIALS /03 (Alexfolio Carousel) -->
      <!-- ============================================================ -->
      <section id="testimonials" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-8 scroll-mt-28">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
            // Testimonials /03
          </span>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Client Endorsements</span>
        </div>

        ${renderTestimonialsSlider()}
      </section>


      <!-- ============================================================ -->
      <!-- 7. // REACH OUT — (Alexfolio Contact & Fast Quote Section) -->
      <!-- ============================================================ -->
      <section id="contact" class="px-5 sm:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-28">
        <div class="border-t border-[var(--color-border)] pt-12">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- LEFT: REACH OUT LARGE HEADING & COORDINATES -->
            <div class="lg:col-span-5 space-y-8">
              <div class="space-y-4">
                <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
                  // Contact
                </span>
                <h2 class="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[var(--color-text)] leading-[0.88]">
                  ${siteConfig.contact.headline}
                </h2>
                <p class="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-md">
                  ${siteConfig.contact.subtext}
                </p>
              </div>

              <!-- STUDIO COORDINATES (Alexfolio Berlin & NY) -->
              <div class="space-y-3 font-mono text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-6">
                <div>
                  <span class="text-[var(--color-text)] font-bold">${siteConfig.contact.officeLabel}</span> ${siteConfig.contact.officeValue}
                </div>
                <div>
                  <span class="text-[var(--color-text)] font-bold">${siteConfig.contact.mailLabel}</span> 
                  <a href="mailto:${siteConfig.contact.mailValue}" class="text-[var(--color-accent)] hover:underline">${siteConfig.contact.mailValue}</a>
                </div>
                <div>
                  <span class="text-[var(--color-text)] font-bold">${siteConfig.contact.phoneLabel}</span> 
                  <a href="tel:${siteConfig.contact.phoneValue}" class="hover:text-[var(--color-text)]">${siteConfig.contact.phoneValue}</a>
                </div>
              </div>

              <!-- SOCIAL LINKS -->
              <div class="flex flex-wrap gap-4 pt-2 text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                ${siteConfig.socialLinks.map(s => `
                  <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
                    ${s.name} ↗
                  </a>
                `).join('')}
              </div>

              <!-- BACK TO TOP -->
              <div class="pt-6">
                <a href="#hero" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <span>Back to top</span>
                  <span>↑</span>
                </a>
              </div>
            </div>

            <!-- RIGHT: INTERACTIVE CONTACT & ESTIMATE FORM -->
            <div class="lg:col-span-7 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div class="mb-6 space-y-1">
                <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">// Send Message</span>
                <h3 class="font-heading text-2xl sm:text-3xl font-black uppercase text-[var(--color-text)]">
                  Let's Build Something Exceptional
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

    item.onclick = () => {
      if (content.classList.contains('hidden')) {
        toggle(true);
      } else {
        toggle(false);
      }
    };

    item.onmouseenter = () => toggle(true);
    item.onmouseleave = () => toggle(false);
  });

  // Projects Cursor Preview Tracker (Alexfolio Style)
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
