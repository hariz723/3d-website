import { renderIcon } from '../utils/icons.js';

export function renderBeforeAfterSlider(options = {}) {
  const {
    id = 'ba-slider',
    beforeImg = 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1400&q=80',
    afterImg = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    beforeLabel = 'Raw Framing & CAD Structure',
    afterLabel = '4K Photorealistic Render',
    aspect = 'aspect-16/10'
  } = options;

  return `
    <div id="${id}-container" class="ba-container relative ${aspect} w-full rounded-2xl overflow-hidden border border-[#232525] bg-[#111212] select-none cursor-ew-resize group shadow-2xl" style="--slider-pos: 50%;">
      
      <!-- AFTER IMAGE (BOTTOM BASE LAYER) -->
      <img src="${afterImg}" alt="${afterLabel}" class="absolute inset-0 w-full h-full object-cover pointer-events-none">
      
      <!-- AFTER BADGE -->
      <div class="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-[#080909]/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-lg border border-white/10 pointer-events-none flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-[#FF531F] inline-block"></span>
        <span>${afterLabel}</span>
      </div>

      <!-- BEFORE IMAGE (TOP CLIPPED LAYER VIA CLIP-PATH) -->
      <div id="${id}-clipper" class="absolute inset-0 w-full h-full pointer-events-none" style="clip-path: inset(0 calc(100% - var(--slider-pos, 50%)) 0 0);">
        <img src="${beforeImg}" alt="${beforeLabel}" class="absolute inset-0 w-full h-full object-cover pointer-events-none">
        
        <!-- BEFORE BADGE -->
        <div class="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-[#080909]/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-lg border border-white/10 pointer-events-none flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-white/70 inline-block"></span>
          <span>${beforeLabel}</span>
        </div>
      </div>

      <!-- SLIDER HANDLE LINE & BUTTON -->
      <div id="${id}-handle" class="ba-slider-handle" style="left: var(--slider-pos, 50%);">
        <div class="ba-handle-button">
          <svg class="w-4 h-4 text-[#FF531F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="m9 18-6-6 6-6"/>
            <path d="m15 6 6 6-6 6"/>
          </svg>
        </div>
      </div>

    </div>
  `;
}

export function initBeforeAfterSliderEvents(id = 'ba-slider') {
  const container = document.getElementById(`${id}-container`);
  if (!container) return;

  let isDragging = false;

  function setPos(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percentage = ((x / rect.width) * 100).toFixed(2);
    container.style.setProperty('--slider-pos', `${percentage}%`);
  }

  container.onmousedown = (e) => {
    isDragging = true;
    setPos(e.clientX);
  };

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setPos(e.clientX);
  });

  // Touch Support
  container.ontouchstart = (e) => {
    isDragging = true;
    if (e.touches && e.touches[0]) {
      setPos(e.touches[0].clientX);
    }
  };

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      setPos(e.touches[0].clientX);
    }
  });
}
