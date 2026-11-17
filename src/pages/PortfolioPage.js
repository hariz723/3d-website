import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

let activeRoomFilter = 'all';
let activeStyleFilter = 'all';

export function renderPortfolioPage() {
  const projects = siteConfig.portfolio.filter(p => {
    const matchRoom = activeRoomFilter === 'all' || p.roomType === activeRoomFilter;
    const matchStyle = activeStyleFilter === 'all' || p.style === activeStyleFilter;
    return matchRoom && matchStyle;
  });

  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- PAGE HEADER -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#8E9593]">
          <span>Portfolio Archive</span>
          <span>•</span>
          <span class="text-[#FF531F] font-bold">${siteConfig.portfolio.length} Projects</span>
        </div>
        <h1 class="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none uppercase">
          Selected Projects
        </h1>
        <p class="text-xs sm:text-sm text-[#8E9593] max-w-2xl leading-relaxed">
          Filter our photorealistic CGI renders by room category and architectural style. Every render is built to exact millimeter scale with physical solar illumination.
        </p>
      </div>

      <!-- FILTER CONTROLS BAR -->
      <div class="framer-card rounded-3xl p-6 sm:p-8 space-y-6">
        
        <!-- ROOM TYPE FILTERS -->
        <div class="space-y-3">
          <div class="text-[11px] uppercase font-mono tracking-wider text-white font-bold flex items-center justify-between">
            <span>Filter by Space:</span>
            <span class="text-[#FF531F] text-xs" id="portfolio-count-badge">
              Showing ${projects.length} of ${siteConfig.portfolio.length} projects
            </span>
          </div>
          <div class="flex flex-wrap gap-2">
            ${[
              { id: 'all', label: 'All Spaces' },
              { id: 'living', label: 'Living Salons' },
              { id: 'bedroom', label: 'Master Suites' },
              { id: 'kitchen', label: 'Kitchen & Dining' },
              { id: 'bathroom', label: 'Spa Ensuite' },
              { id: 'commercial', label: 'Commercial & Flagships' }
            ].map(r => `
              <button class="room-filter-btn px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${activeRoomFilter === r.id ? 'bg-[#FF531F] text-black border-[#FF531F] shadow-lg' : 'bg-white/5 text-[#8E9593] border-white/10 hover:border-white hover:text-white'}" data-room="${r.id}">
                ${r.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- STYLE FILTERS -->
        <div class="pt-4 border-t border-white/5 space-y-3">
          <div class="text-[11px] uppercase font-mono tracking-wider text-white font-bold">
            Filter by Aesthetic:
          </div>
          <div class="flex flex-wrap gap-2">
            ${[
              { id: 'all', label: 'All Aesthetics' },
              { id: 'minimalist', label: 'Minimalist Luxury' },
              { id: 'japandi', label: 'Japandi & Wabi-Sabi' },
              { id: 'contemporary', label: 'Warm Contemporary' },
              { id: 'scandinavian', label: 'Warm Scandinavian' }
            ].map(s => `
              <button class="style-filter-btn px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${activeStyleFilter === s.id ? 'bg-white text-black border-white' : 'bg-white/5 text-[#8E9593] border-white/10 hover:border-white hover:text-white'}" data-style="${s.id}">
                ${s.label}
              </button>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- PORTFOLIO GRID -->
      ${projects.length > 0 ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">
          ${projects.map((p, idx) => `
            <div class="framer-card rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl">
              
              <!-- IMAGE PREVIEW -->
              <div class="relative aspect-4/3 overflow-hidden bg-[#161717] cursor-pointer portfolio-lightbox-trigger" data-project-id="${p.id}" data-index="${idx}">
                <img src="${p.coverImage}" alt="${p.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                
                <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                  <span class="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-black/80 backdrop-blur-md text-white rounded-lg border border-white/10">
                    ${p.roomLabel}
                  </span>
                  <span class="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#FF531F] text-black font-bold rounded-lg">
                    ${p.styleLabel}
                  </span>
                </div>

                <!-- HOVER ZOOM OVERLAY -->
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div class="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-1.5">
                    ${renderIcon('zoomIn', 'w-4 h-4 text-[#FF531F]')}
                    <span>Open Lightbox (${p.gallery.length} renders)</span>
                  </div>
                </div>
              </div>

              <!-- CARD METADATA -->
              <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-[#8E9593] font-mono mb-1">
                    <span>${p.location}</span>
                    <span>${p.areaSqFt.toLocaleString()} sq ft</span>
                  </div>
                  <h3 class="font-display text-2xl text-white group-hover:text-[#FF531F] transition-colors leading-none uppercase">
                    <a href="#/project/${p.id}">${p.title}</a>
                  </h3>
                  <p class="text-xs text-[#8E9593] line-clamp-2 mt-2 leading-relaxed">
                    ${p.summary}
                  </p>
                </div>

                <!-- ACTIONS -->
                <div class="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a href="#/project/${p.id}" class="text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF531F] flex items-center gap-1 transition-colors">
                    <span>Case & Blueprint</span>
                    ${renderIcon('arrowRight', 'w-3.5 h-3.5')}
                  </a>
                  <button type="button" class="portfolio-quote-btn text-xs text-[#FF531F] hover:underline font-bold cursor-pointer" data-title="${p.title}">
                    Get Quote
                  </button>
                </div>
              </div>

            </div>
          `).join('')}
        </div>
      ` : `
        <div class="text-center py-16 framer-card rounded-3xl p-8 space-y-4">
          <p class="font-display text-3xl text-white uppercase">No matching projects found.</p>
          <p class="text-xs text-[#8E9593]">Try adjusting your room or style filters.</p>
          <button id="reset-filters-btn" class="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#FF531F] text-black rounded-full cursor-pointer">
            Reset Filters
          </button>
        </div>
      `}

      <!-- BOTTOM BANNER -->
      <div class="p-8 sm:p-12 framer-card rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#141515] to-[#1A1817]">
        <div class="space-y-1">
          <h4 class="font-display text-3xl text-white uppercase">Have unique materials or proprietary CAD?</h4>
          <p class="text-xs text-[#8E9593]">We model bespoke joinery, match exact stone slabs, and build custom shaders.</p>
        </div>
        <button id="portfolio-bottom-quote-btn" class="px-7 py-3.5 bg-[#FF531F] hover:bg-[#E04212] text-black text-xs font-bold uppercase tracking-wider rounded-full transition-colors shrink-0 cursor-pointer shadow-lg">
          Request Custom Estimate
        </button>
      </div>

    </div>
  `;
}

export function initPortfolioPageEvents() {
  document.querySelectorAll('.room-filter-btn').forEach(btn => {
    btn.onclick = () => {
      activeRoomFilter = btn.getAttribute('data-room') || 'all';
      appState.notify();
    };
  });

  document.querySelectorAll('.style-filter-btn').forEach(btn => {
    btn.onclick = () => {
      activeStyleFilter = btn.getAttribute('data-style') || 'all';
      appState.notify();
    };
  });

  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) {
    resetBtn.onclick = () => {
      activeRoomFilter = 'all';
      activeStyleFilter = 'all';
      appState.notify();
    };
  }

  document.querySelectorAll('.portfolio-lightbox-trigger').forEach(card => {
    card.onclick = () => {
      const pid = card.getAttribute('data-project-id');
      const project = siteConfig.portfolio.find(p => p.id === pid);
      if (project) {
        appState.openLightbox(project.gallery, 0, project.title);
      }
    };
  });

  document.querySelectorAll('.portfolio-quote-btn').forEach(btn => {
    btn.onclick = () => {
      const title = btn.getAttribute('data-title');
      appState.openQuoteModal({ notes: `Quote for project inspired by: ${title}` });
    };
  });

  const bottomQuoteBtn = document.getElementById('portfolio-bottom-quote-btn');
  if (bottomQuoteBtn) {
    bottomQuoteBtn.onclick = () => appState.openQuoteModal();
  }
}
