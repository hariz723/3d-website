import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

export function renderLightbox() {
  if (!appState.lightboxData) return '';

  const { images, currentIndex, title } = appState.lightboxData;
  const currentImg = images[currentIndex] || images[0];

  return `
    <div id="lightbox-overlay" class="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 animate-fade-in select-none">
      
      <!-- TOP TOOLBAR -->
      <div class="flex items-center justify-between text-[#FAF9F6] z-10">
        <div class="flex items-center gap-3">
          <span class="font-serif text-lg tracking-wide">${title || 'Render Gallery'}</span>
          <span class="text-xs text-[#A8A49C] font-mono bg-white/10 px-2.5 py-0.5 rounded-full">
            ${currentIndex + 1} / ${images.length}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <button id="lightbox-zoom-btn" class="p-2 text-[#A8A49C] hover:text-white rounded-xs transition-colors cursor-pointer" title="Toggle Zoom">
            ${renderIcon('zoomIn', 'w-5 h-5')}
          </button>
          <button id="lightbox-close-btn" class="p-2 text-[#A8A49C] hover:text-white rounded-xs transition-colors cursor-pointer" title="Close (Esc)">
            ${renderIcon('x', 'w-6 h-6')}
          </button>
        </div>
      </div>

      <!-- MAIN IMAGE DISPLAY -->
      <div class="relative flex-1 flex items-center justify-center my-4 overflow-hidden" id="lightbox-stage">
        
        <!-- PREV BUTTON -->
        ${images.length > 1 ? `
          <button id="lightbox-prev-btn" class="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10">
            ${renderIcon('arrowLeft', 'w-6 h-6')}
          </button>
        ` : ''}

        <!-- IMAGE -->
        <img id="lightbox-main-img" src="${currentImg}" alt="3D Interior Render Fullscreen" class="max-h-[82vh] max-w-[92vw] object-contain transition-transform duration-300 rounded-xs shadow-2xl cursor-zoom-in">

        <!-- NEXT BUTTON -->
        ${images.length > 1 ? `
          <button id="lightbox-next-btn" class="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs border border-white/10">
            ${renderIcon('arrowRight', 'w-6 h-6')}
          </button>
        ` : ''}
      </div>

      <!-- BOTTOM THUMBNAILS (IF MULTIPLE) -->
      ${images.length > 1 ? `
        <div class="flex items-center justify-center gap-2.5 overflow-x-auto py-2 z-10 max-w-xl mx-auto">
          ${images.map((img, idx) => `
            <button class="lightbox-thumb w-14 h-10 rounded-xs overflow-hidden border-2 transition-all cursor-pointer ${idx === currentIndex ? 'border-[#C2A37D] scale-105' : 'border-transparent opacity-50 hover:opacity-100'}" data-index="${idx}">
              <img src="${img}" alt="thumbnail" class="w-full h-full object-cover">
            </button>
          `).join('')}
        </div>
      ` : '<div></div>'}

    </div>
  `;
}

export function initLightboxEvents() {
  const overlay = document.getElementById('lightbox-overlay');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const mainImg = document.getElementById('lightbox-main-img');
  const zoomBtn = document.getElementById('lightbox-zoom-btn');

  let isZoomed = false;

  function toggleZoom() {
    if (!mainImg) return;
    isZoomed = !isZoomed;
    if (isZoomed) {
      mainImg.classList.remove('cursor-zoom-in');
      mainImg.classList.add('cursor-zoom-out', 'scale-150');
    } else {
      mainImg.classList.remove('cursor-zoom-out', 'scale-150');
      mainImg.classList.add('cursor-zoom-in');
    }
  }

  if (mainImg) mainImg.onclick = toggleZoom;
  if (zoomBtn) zoomBtn.onclick = toggleZoom;

  if (closeBtn) {
    closeBtn.onclick = () => appState.closeLightbox();
  }

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    };
  }

  document.querySelectorAll('.lightbox-thumb').forEach(thumb => {
    thumb.onclick = (e) => {
      e.stopPropagation();
      const index = parseInt(thumb.getAttribute('data-index') || '0');
      if (appState.lightboxData) {
        appState.lightboxData.currentIndex = index;
        appState.notify();
      }
    };
  });

  // Keyboard navigation
  const keyHandler = (e) => {
    if (!appState.lightboxData) return;
    if (e.key === 'Escape') appState.closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  };

  window.addEventListener('keydown', keyHandler, { once: true });
}

function navigateLightbox(dir) {
  if (!appState.lightboxData) return;
  const { images, currentIndex } = appState.lightboxData;
  let next = currentIndex + dir;
  if (next < 0) next = images.length - 1;
  if (next >= images.length) next = 0;
  appState.lightboxData.currentIndex = next;
  appState.notify();
}
