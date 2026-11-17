import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';

export function renderTestimonialsSlider() {
  const testimonials = siteConfig.testimonials;

  return `
    <div class="relative max-w-5xl mx-auto" id="testimonials-slider-container">
      
      <!-- TOP COUNTER & CONTROLS -->
      <div class="flex items-center justify-between pb-6 border-b border-[var(--color-border)] mb-8">
        <div class="font-mono text-sm sm:text-base font-bold text-[#FF531F] flex items-center gap-2">
          <span id="testimonial-active-count">01</span>
          <span class="text-[var(--color-text-muted)] font-normal">/</span>
          <span class="text-[var(--color-text-muted)] font-normal">03</span>
        </div>

        <!-- ARROW CONTROLS -->
        <div class="flex items-center gap-3">
          <button id="test-prev-btn" class="w-12 h-12 rounded-full border border-[var(--color-border)] hover:border-[#FF531F] hover:bg-[#FF531F] hover:text-black bg-[var(--color-surface)] text-[var(--color-text)] flex items-center justify-center transition-all cursor-pointer shadow-md" aria-label="Previous Testimonial">
            ${renderIcon('arrowLeft', 'w-4 h-4')}
          </button>
          <button id="test-next-btn" class="w-12 h-12 rounded-full border border-[var(--color-border)] hover:border-[#FF531F] hover:bg-[#FF531F] hover:text-black bg-[var(--color-surface)] text-[var(--color-text)] flex items-center justify-center transition-all cursor-pointer shadow-md" aria-label="Next Testimonial">
            ${renderIcon('arrowRight', 'w-4 h-4')}
          </button>
        </div>
      </div>

      <!-- SLIDES WRAPPER -->
      <div class="relative overflow-hidden min-h-[320px] sm:min-h-[260px]">
        ${testimonials.map((t, idx) => `
          <div class="testimonial-slide transition-all duration-500 absolute inset-0 ${idx === 0 ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-12 pointer-events-none'}" data-slide-index="${idx}" data-count="${t.count}" data-total="${t.total}">
            
            <div class="space-y-8">
              
              <!-- LARGE EDITORIAL QUOTE -->
              <blockquote class="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--color-text)] tracking-tight leading-[1.15]">
                "${t.quote}"
              </blockquote>

              <!-- CLIENT INFO & SMALL PHOTO -->
              <div class="flex items-center gap-4 pt-2">
                <img src="${t.image}" alt="${t.author}" class="w-12 h-12 rounded-full object-cover border border-[#FF531F]">
                <div>
                  <h4 class="text-sm font-bold text-[var(--color-text)]">${t.author}</h4>
                  <p class="text-xs font-mono text-[var(--color-text-muted)]">${t.role} // ${t.firm}</p>
                </div>
              </div>

            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
}

export function initTestimonialsEvents() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const counter = document.getElementById('testimonial-active-count');
  const prevBtn = document.getElementById('test-prev-btn');
  const nextBtn = document.getElementById('test-next-btn');
  const container = document.getElementById('testimonials-slider-container');

  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function goToSlide(idx) {
    current = (idx + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      if (i === current) {
        slide.classList.remove('opacity-0', 'translate-x-12', 'pointer-events-none');
        slide.classList.add('opacity-100', 'translate-x-0', 'pointer-events-auto');
        if (counter) {
          counter.innerText = (i + 1).toString().padStart(2, '0');
        }
      } else {
        slide.classList.remove('opacity-100', 'translate-x-0', 'pointer-events-auto');
        slide.classList.add('opacity-0', 'translate-x-12', 'pointer-events-none');
      }
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    timer = setInterval(() => goToSlide(current + 1), 6500);
  }

  function stopAutoPlay() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      goToSlide(current - 1);
      startAutoPlay();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      goToSlide(current + 1);
      startAutoPlay();
    };
  }

  if (container) {
    container.onmouseenter = stopAutoPlay;
    container.onmouseleave = startAutoPlay;
  }

  startAutoPlay();
}
