import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';

export function renderTestimonialsSlider() {
  const testimonials = siteConfig.testimonials;

  return `
    <!-- SCROLL-ANIMATED STICKY TESTIMONIALS SECTION (Alexfolio) -->
    <div id="testimonials-scroll-track" class="relative h-[220vh] sm:h-[250vh]">
      
      <!-- STICKY VIEWPORT CONTAINER -->
      <div id="testimonials-sticky-box" class="sticky top-24 sm:top-32 w-full py-8 sm:py-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl shadow-2xl p-6 sm:p-12 overflow-hidden flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
        
        <!-- TOP CONTROLS & AVATAR BADGES (Alexfolio Style) -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--color-border)] gap-4">
          
          <div class="flex items-center gap-4">
            <div class="font-mono text-sm sm:text-base font-bold text-[var(--color-accent)] flex items-center gap-2">
              <span id="testimonial-active-count">01</span>
              <span class="text-[var(--color-text-muted)] font-normal">/</span>
              <span class="text-[var(--color-text-muted)] font-normal">03</span>
            </div>

            <!-- SCROLL PROGRESS INDICATOR BAR -->
            <div class="w-24 sm:w-36 h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div id="testimonial-scroll-fill" class="h-full bg-[var(--color-accent)] transition-all duration-300" style="width: 33.33%;"></div>
            </div>
            
            <span class="text-[11px] font-mono text-[var(--color-text-muted)] hidden lg:inline">// Scroll to advance</span>
          </div>

          <!-- THREE AVATAR SELECTORS (Direct Click + Active Glowing State) -->
          <div class="flex items-center gap-3">
            ${testimonials.map((t, idx) => `
              <button type="button" class="testimonial-avatar-btn relative group p-0.5 rounded-full transition-all cursor-pointer ${idx === 0 ? 'ring-2 ring-[var(--color-accent)] scale-110' : 'opacity-50 hover:opacity-100'}" data-index="${idx}" aria-label="View testimonial by ${t.name}">
                <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover">
                <span class="absolute -bottom-1 -right-1 text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-border)]">
                  0${idx + 1}
                </span>
              </button>
            `).join('')}

            <!-- PREV / NEXT MANUAL CONTROLS -->
            <div class="flex items-center gap-1.5 ml-2 border-l border-[var(--color-border)] pl-3">
              <button id="test-prev-btn" class="w-9 h-9 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black text-[var(--color-text)] flex items-center justify-center transition-all cursor-pointer" aria-label="Previous">
                <span class="text-xs">←</span>
              </button>
              <button id="test-next-btn" class="w-9 h-9 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black text-[var(--color-text)] flex items-center justify-center transition-all cursor-pointer" aria-label="Next">
                <span class="text-xs">→</span>
              </button>
            </div>
          </div>

        </div>

        <!-- STAGE: THREE TESTIMONIAL SLIDES -->
        <div class="relative py-8 sm:py-12 flex-grow flex items-center">
          ${testimonials.map((t, idx) => `
            <div class="testimonial-scroll-slide absolute inset-0 flex flex-col justify-between transition-all duration-700 ease-out ${idx === 0 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}" data-slide-idx="${idx}">
              
              <!-- EDITORIAL QUOTE WITH SCROLL LETTER HIGHLIGHT -->
              <blockquote class="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--color-text)] tracking-tight leading-[1.14] select-none" data-testimonial-quote="${idx}">
                “${t.quote}”
              </blockquote>

              <!-- CLIENT INFO -->
              <div class="flex items-center gap-4 pt-6">
                <div class="w-12 h-12 rounded-full overflow-hidden border border-[var(--color-accent)] shrink-0">
                  <img src="${t.avatar}" alt="${t.name}" class="w-full h-full object-cover">
                </div>
                <div>
                  <h4 class="font-heading text-base sm:text-lg font-bold uppercase text-[var(--color-text)] leading-tight">
                    ${t.name}
                  </h4>
                  <p class="text-xs font-mono text-[var(--color-text-muted)]">
                    ${t.role}, <span class="text-[var(--color-text)] font-semibold">${t.company}</span>
                  </p>
                </div>
              </div>

            </div>
          `).join('')}
        </div>

        <!-- BOTTOM STATUS & CHAPTER LABEL -->
        <div class="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)]">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
            <span id="testimonial-company-status">Verified Review // Fundwizz</span>
          </div>

          <div class="flex items-center gap-2 text-[11px]">
            <span>Scroll Animation Active</span>
            <span class="text-[var(--color-accent)] animate-bounce font-bold">↓</span>
          </div>
        </div>

      </div>

    </div>
  `;
}

export function initTestimonialsEvents() {
  const track = document.getElementById('testimonials-scroll-track');
  const stickyBox = document.getElementById('testimonials-sticky-box');
  const slides = document.querySelectorAll('.testimonial-scroll-slide');
  const avatars = document.querySelectorAll('.testimonial-avatar-btn');
  const countDisplay = document.getElementById('testimonial-active-count');
  const fillBar = document.getElementById('testimonial-scroll-fill');
  const statusDisplay = document.getElementById('testimonial-company-status');
  const prevBtn = document.getElementById('test-prev-btn');
  const nextBtn = document.getElementById('test-next-btn');

  if (!track || !slides.length) return;

  const total = slides.length;
  let activeIndex = 0;

  // Companies for status line
  const companies = siteConfig.testimonials.map(t => `${t.role}, ${t.company}`);

  function setActiveSlide(idx) {
    if (idx === activeIndex && slides[idx].classList.contains('opacity-100')) return;
    activeIndex = Math.max(0, Math.min(total - 1, idx));

    // Update slides
    slides.forEach((slide, i) => {
      if (i === activeIndex) {
        slide.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
        slide.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      } else {
        slide.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        slide.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');
      }
    });

    // Update avatar rings
    avatars.forEach((av, i) => {
      if (i === activeIndex) {
        av.classList.add('ring-2', 'ring-[var(--color-accent)]', 'scale-110');
        av.classList.remove('opacity-50');
      } else {
        av.classList.remove('ring-2', 'ring-[var(--color-accent)]', 'scale-110');
        av.classList.add('opacity-50');
      }
    });

    // Update counter
    if (countDisplay) {
      countDisplay.innerText = (activeIndex + 1).toString().padStart(2, '0');
    }

    // Update progress bar
    if (fillBar) {
      const pct = ((activeIndex + 1) / total) * 100;
      fillBar.style.width = `${pct}%`;
    }

    // Update status
    if (statusDisplay && companies[activeIndex]) {
      statusDisplay.innerText = `Verified Review // ${companies[activeIndex]}`;
    }
  }

  // Scroll Tracking Animation Listener
  function onScroll() {
    const rect = track.getBoundingClientRect();
    const trackHeight = track.offsetHeight - window.innerHeight;

    if (trackHeight <= 0) return;

    // Relative scroll progress through the track: 0 to 1
    const scrolled = -rect.top;
    let progress = scrolled / trackHeight;

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    // Divide into 3 segments
    let targetIndex = 0;
    if (progress < 0.33) {
      targetIndex = 0;
    } else if (progress < 0.66) {
      targetIndex = 1;
    } else {
      targetIndex = 2;
    }

    setActiveSlide(targetIndex);

    // Dynamic quote highlight based on within-segment progress
    const activeQuote = slides[targetIndex]?.querySelector('blockquote');
    if (activeQuote) {
      const segStart = targetIndex * 0.333;
      const segProgress = Math.min(1, Math.max(0, (progress - segStart) / 0.333));
      // Subtle glow based on reading progress
      activeQuote.style.opacity = `${0.7 + segProgress * 0.3}`;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Avatar Click Handlers
  avatars.forEach((av, i) => {
    av.onclick = () => {
      setActiveSlide(i);
      // Smoothly scroll to that section position
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const trackHeight = track.offsetHeight - window.innerHeight;
      const targetScroll = trackTop + (i / total) * trackHeight + 50;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };
  });

  // Manual Arrow controls
  if (prevBtn) {
    prevBtn.onclick = () => {
      const nextIdx = (activeIndex - 1 + total) % total;
      setActiveSlide(nextIdx);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      const nextIdx = (activeIndex + 1) % total;
      setActiveSlide(nextIdx);
    };
  }

  // Initial trigger
  onScroll();
}
