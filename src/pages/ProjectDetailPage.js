import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';
import { renderBeforeAfterSlider, initBeforeAfterSliderEvents } from '../components/BeforeAfterSlider.js';
import { renderFloorPlanViewer, initFloorPlanEvents } from '../components/FloorPlanViewer.js';

export function renderProjectDetailPage(projectId) {
  const project = siteConfig.projects.find(p => p.id === projectId) || siteConfig.projects[0];
  const nextProject = siteConfig.projects.find(p => p.id === project.nextProjectId) || siteConfig.projects[0];

  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
      
      <!-- BREADCRUMBS & TOP NAV -->
      <div class="flex items-center justify-between border-b border-[var(--color-border)] pb-4 font-mono text-xs">
        <nav class="flex items-center gap-2 text-[var(--color-text-muted)]">
          <a href="#home" class="hover:text-[var(--color-text)]">Home</a>
          <span>/</span>
          <a href="#projects" class="hover:text-[var(--color-text)]">Projects</a>
          <span>/</span>
          <span class="text-[var(--color-text)] font-bold">${project.title}</span>
        </nav>
        <a href="#projects" class="font-bold uppercase tracking-wider text-[#FF531F] hover:underline flex items-center gap-1">
          ${renderIcon('arrowLeft', 'w-3.5 h-3.5')}
          <span>Back to Projects</span>
        </a>
      </div>

      <!-- PROJECT HERO TITLE & METADATA -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-8 space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 text-xs font-mono uppercase bg-[var(--color-surface)] border border-[var(--color-border)] text-[#FF531F] font-bold rounded-lg">
              ${project.year}
            </span>
            <span class="text-xs text-[var(--color-text-muted)] font-mono px-2 py-0.5 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]">
              ${project.location}
            </span>
          </div>

          <h1 class="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[var(--color-text)] tracking-tight leading-none">
            ${project.title}
          </h1>

          <p class="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            ${project.shortDescription}
          </p>
        </div>

        <!-- SPECS CARD (Alexfolio) -->
        <div class="lg:col-span-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 space-y-4 shadow-xl">
          <h4 class="text-xs uppercase font-mono tracking-widest font-bold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">
            // Project Specifications
          </h4>
          <div class="text-xs space-y-2.5 font-mono">
            <div class="flex justify-between">
              <span class="text-[var(--color-text-muted)]">Client:</span>
              <span class="font-bold text-[var(--color-text)]">${project.client || 'Confidential'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[var(--color-text-muted)]">Role:</span>
              <span class="font-bold text-[var(--color-text)]">${project.role || 'Design & Strategy'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[var(--color-text-muted)]">Timeline:</span>
              <span class="font-bold text-[var(--color-accent)]">${project.timeline || project.turnaround || 'Ongoing'}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[var(--color-text-muted)]">Tools / Stack:</span>
              <span class="text-[11px] text-[var(--color-text)]">${project.software || 'Figma • Framer'}</span>
            </div>
          </div>
          <button id="project-quote-btn" type="button" class="w-full mt-2 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black text-xs font-bold uppercase font-mono tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg">
            <span>Inquire About Similar Project</span>
            ${renderIcon('arrowRight', 'w-3.5 h-3.5')}
          </button>
        </div>
      </div>

      <!-- 1. HERO RENDER -->
      <section class="rounded-3xl overflow-hidden border border-[var(--color-border)] aspect-16/9 sm:aspect-21/9 shadow-2xl">
        <img src="${project.image}" alt="${project.title} Hero Render" class="w-full h-full object-cover">
      </section>

      <!-- 2. PROJECT BRIEF -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-y border-[var(--color-border)] py-12">
        <div class="lg:col-span-4 space-y-2">
          <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">// The Brief</span>
          <h3 class="font-heading text-3xl font-black uppercase text-[var(--color-text)]">Aesthetic Intent</h3>
        </div>
        <div class="lg:col-span-8 space-y-4">
          <p class="text-sm sm:text-base text-[var(--color-text)] leading-relaxed">
            ${project.brief}
          </p>
          <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl text-xs text-[var(--color-text-muted)]">
            <strong class="text-[#FF531F] font-mono">CGI Solution:</strong> ${project.solution}
          </div>
        </div>
      </section>

      <!-- 3. INTERACTIVE BEFORE / AFTER SLIDER -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold flex items-center gap-1.5">
              ${renderIcon('sliders', 'w-3.5 h-3.5')}
              <span>// Interactive Comparison</span>
            </span>
            <h3 class="font-heading text-3xl sm:text-4xl font-black uppercase text-[var(--color-text)]">
              Raw Framing vs Photoreal CGI
            </h3>
          </div>
          <span class="text-xs text-[var(--color-text-muted)] hidden sm:inline font-mono">↔ Drag handle left/right</span>
        </div>

        ${renderBeforeAfterSlider({
          id: 'project-detail-ba-slider',
          beforeImg: project.beforeImage,
          afterImg: project.afterImage,
          beforeLabel: 'Raw Framing & CAD Structure',
          afterLabel: '4K Photorealistic Master',
          aspect: 'aspect-16/9 sm:aspect-21/9'
        })}
      </section>

      <!-- 4. ARCHITECTURAL FLOOR PLAN BLUEPRINT -->
      <section class="space-y-4">
        ${renderFloorPlanViewer(project)}
      </section>

      <!-- 5. GALLERY GRID WITH LIGHTBOX -->
      <section class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">// Multi-Angle Gallery</span>
            <h3 class="font-heading text-3xl font-black uppercase text-[var(--color-text)]">
              4K Perspectives
            </h3>
          </div>
          <button id="project-open-all-lightbox" class="text-xs font-bold uppercase tracking-wider text-[var(--color-text)] hover:text-[#FF531F] flex items-center gap-1.5 cursor-pointer">
            ${renderIcon('zoomIn', 'w-4 h-4')}
            <span>Open All Fullscreen (${project.gallery.length})</span>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${project.gallery.map((img, idx) => `
            <div class="relative aspect-4/3 rounded-2xl overflow-hidden border border-[var(--color-border)] group cursor-pointer project-gallery-item" data-index="${idx}">
              <img src="${img}" alt="${project.title} perspective ${idx + 1}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-4 py-2 bg-white text-black text-[11px] uppercase tracking-wider font-bold rounded-full shadow-lg flex items-center gap-1">
                  ${renderIcon('zoomIn', 'w-3.5 h-3.5 text-[#FF531F]')}
                  <span>View 4K</span>
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 6. NEXT PROJECT LINK -->
      <div class="border-t border-[var(--color-border)] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-[#FF531F] font-bold">// Next Project</span>
          <h4 class="font-heading text-3xl sm:text-4xl font-black uppercase text-[var(--color-text)] mt-1">
            <a href="#/project/${nextProject.id}" class="hover:text-[#FF531F] transition-colors">${nextProject.title}</a>
          </h4>
        </div>

        <a href="#/project/${nextProject.id}" class="px-8 py-4 bg-[#FF531F] hover:bg-[#E04212] text-black text-xs font-bold uppercase tracking-wider rounded-full transition-all shrink-0 cursor-pointer shadow-lg flex items-center gap-2 hover:scale-105">
          <span>View Next Project</span>
          ${renderIcon('arrowRight', 'w-4 h-4')}
        </a>
      </div>

    </div>
  `;
}

export function initProjectDetailPageEvents(projectId) {
  const project = siteConfig.projects.find(p => p.id === projectId) || siteConfig.projects[0];

  initBeforeAfterSliderEvents('project-detail-ba-slider');
  initFloorPlanEvents(project);

  const quoteBtn = document.getElementById('project-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => appState.openQuoteModal({ notes: `Quote for project similar to: ${project.title}` });
  }

  const openAllBtn = document.getElementById('project-open-all-lightbox');
  if (openAllBtn) {
    openAllBtn.onclick = () => appState.openLightbox(project.gallery, 0, project.title);
  }

  document.querySelectorAll('.project-gallery-item').forEach(item => {
    item.onclick = () => {
      const idx = parseInt(item.getAttribute('data-index') || '0');
      appState.openLightbox(project.gallery, idx, project.title);
    };
  });
}
