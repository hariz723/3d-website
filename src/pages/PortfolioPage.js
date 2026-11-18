import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

let activeCategoryFilter = 'all';

export function renderPortfolioPage() {
  const allProjects = siteConfig.projects;
  const filteredProjects = activeCategoryFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeCategoryFilter.toLowerCase())));

  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
      
      <!-- PAGE HEADER (Alexfolio Style) -->
      <div class="space-y-4 border-b border-[var(--color-border)] pb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
          <span>Work Index</span>
          <span>•</span>
          <span class="text-[var(--color-accent)] font-bold">${allProjects.length} Selected Cases</span>
        </div>
        <h1 class="font-heading text-5xl sm:text-7xl lg:text-8xl font-black text-[var(--color-text)] tracking-tight leading-none uppercase">
          Work Index
        </h1>
        <p class="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-2xl leading-relaxed font-mono">
          A curated archive of brand identities, responsive web platforms, digital systems, and native mobile apps designed for high-growth ventures.
        </p>
      </div>

      <!-- FILTER CONTROLS BAR -->
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2">
          ${[
            { id: 'all', label: 'All Works' },
            { id: 'branding', label: 'Branding' },
            { id: 'landing page', label: 'Landing Pages' },
            { id: 'app', label: 'Mobile & Desktop Apps' },
            { id: 'web', label: 'Web Systems' }
          ].map(f => `
            <button class="portfolio-filter-btn px-4 py-2 text-xs font-mono uppercase font-semibold rounded-full border transition-all cursor-pointer ${activeCategoryFilter === f.id ? 'bg-[var(--color-accent)] text-black border-[var(--color-accent)] shadow-md' : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]'}" data-filter="${f.id}">
              ${f.label}
            </button>
          `).join('')}
        </div>

        <span class="text-xs font-mono text-[var(--color-text-muted)]" id="portfolio-count-badge">
          Showing ${filteredProjects.length} of ${allProjects.length} projects
        </span>
      </div>

      <!-- PROJECT GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-grid">
        ${filteredProjects.map(p => `
          <div class="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-accent)] transition-all flex flex-col justify-between shadow-xl">
            
            <!-- IMAGE PREVIEW -->
            <a href="#/project/${p.id}" class="aspect-16/10 overflow-hidden block relative">
              <img src="${p.image}" alt="${p.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute top-4 left-4">
                <span class="px-2.5 py-1 text-[11px] font-mono font-bold bg-black/80 backdrop-blur-md text-[var(--color-accent)] rounded-lg border border-white/10">
                  ${p.year}
                </span>
              </div>
            </a>

            <!-- CONTENT CARD -->
            <div class="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <h3 class="font-heading text-2xl sm:text-3xl font-black uppercase text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    <a href="#/project/${p.id}">${p.title}</a>
                  </h3>
                  <a href="#/project/${p.id}" class="w-9 h-9 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black flex items-center justify-center transition-all shrink-0">
                    <span class="text-xs font-bold">↗</span>
                  </a>
                </div>
                <p class="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                  ${p.shortDescription}
                </p>
              </div>

              <!-- TAGS -->
              <div class="pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-1.5">
                ${p.tags.map(t => `
                  <span class="px-2.5 py-0.5 text-[10px] font-mono uppercase bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-muted)] rounded">
                    ${t}
                  </span>
                `).join('')}
              </div>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
}

export function initPortfolioPageEvents() {
  document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
    btn.onclick = () => {
      activeCategoryFilter = btn.getAttribute('data-filter') || 'all';
      const app = document.getElementById('app');
      if (app) {
        const main = app.querySelector('main');
        if (main) {
          main.innerHTML = renderPortfolioPage();
          initPortfolioPageEvents();
        }
      }
    };
  });
}
