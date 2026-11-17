import Lenis from 'lenis';

let lenisInstance = null;
let rafId = null;

export function initScrollEngine() {
  if (lenisInstance) {
    lenisInstance.destroy();
    if (rafId) cancelAnimationFrame(rafId);
  }

  // Initialize Lenis with smooth inertial scrolling
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    infinite: false,
  });

  function raf(time) {
    lenisInstance.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  // Initialize Character/Letter Highlighting on Scroll
  initScrollLetterHighlight();

  // Scroll listener
  lenisInstance.on('scroll', onScrollHandler);
  window.addEventListener('scroll', onScrollHandler, { passive: true });

  // Initial trigger
  setTimeout(() => {
    updateLetterHighlight();
  }, 100);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

function onScrollHandler(e) {
  const scrollY = typeof e === 'object' && e.scroll !== undefined ? e.scroll : window.scrollY;

  // 1. Top Hairline Progress Bar
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollMax > 0 ? (scrollY / scrollMax) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }

  // 2. Letter-by-Letter Highlight on Scroll
  updateLetterHighlight();

  // 3. Section Chapter Spy Badge
  updateSectionSpy();
}

/**
 * Letter-by-Letter Highlighting on Scroll
 * Wraps words and letters so words wrap naturally while letters light up one by one
 */
export function initScrollLetterHighlight() {
  const elements = document.querySelectorAll('[data-scroll-highlight]');
  
  elements.forEach(container => {
    if (container.dataset.lettersInitialized) return;
    container.dataset.lettersInitialized = 'true';

    const originalText = container.innerText.trim();
    const words = originalText.split(/\s+/);
    
    let globalCharIndex = 0;

    container.innerHTML = words.map(word => {
      const isAccentWord = word.toLowerCase().includes('photoreal') || 
                           word.toLowerCase().includes('interiors') || 
                           word.toLowerCase().includes('precision') ||
                           word.toLowerCase().includes('built');

      const lettersHtml = word.split('').map(char => {
        const span = `<span class="scroll-char inline-block transition-colors duration-75" data-char-idx="${globalCharIndex}" data-accent="${isAccentWord}">${char}</span>`;
        globalCharIndex++;
        return span;
      }).join('');

      // Add a space character
      globalCharIndex++;
      return `<span class="inline-block whitespace-nowrap mr-[0.28em]">${lettersHtml}</span>`;
    }).join(' ');

    container.dataset.totalChars = globalCharIndex;
  });

  updateLetterHighlight();
}

/**
 * Calculates scroll position and illuminates characters sequentially
 */
export function updateLetterHighlight() {
  const elements = document.querySelectorAll('[data-scroll-highlight]');
  const vh = window.innerHeight;

  elements.forEach(container => {
    const rect = container.getBoundingClientRect();
    const top = rect.top;
    const height = rect.height;

    // Start lighting up when top is at 80% viewport height, finish by 30% viewport height
    const startPoint = vh * 0.85;
    const endPoint = vh * 0.25;

    let progress = (startPoint - top) / (startPoint - endPoint + height * 0.5);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    const chars = container.querySelectorAll('.scroll-char');
    const totalChars = chars.length;
    const activeCount = Math.floor(progress * totalChars);

    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';

    chars.forEach((c, idx) => {
      const isAccent = c.getAttribute('data-accent') === 'true';

      if (idx <= activeCount) {
        // Highlighted State
        if (isAccent) {
          c.style.color = 'var(--color-accent, #FF531F)';
          c.style.opacity = '1';
          c.style.textShadow = '0 0 12px rgba(255, 83, 31, 0.4)';
        } else {
          c.style.color = isLightMode ? '#111212' : '#FFFFFF';
          c.style.opacity = '1';
          c.style.textShadow = isLightMode ? 'none' : '0 0 8px rgba(255, 255, 255, 0.3)';
        }
      } else {
        // Dim / Unreached State
        if (isAccent) {
          c.style.color = 'var(--color-accent, #FF531F)';
          c.style.opacity = isLightMode ? '0.25' : '0.22';
          c.style.textShadow = 'none';
        } else {
          c.style.color = isLightMode ? '#111212' : '#FFFFFF';
          c.style.opacity = isLightMode ? '0.2' : '0.18';
          c.style.textShadow = 'none';
        }
      }
    });
  });
}

function updateSectionSpy() {
  const sections = document.querySelectorAll('section[id]');
  const spyText = document.getElementById('scroll-spy-badge');
  if (!spyText) return;

  let currentSection = '// 01 INTRO';
  const vh = window.innerHeight;

  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= vh * 0.4 && rect.bottom >= vh * 0.1) {
      const id = sec.id;
      if (id === 'hero') currentSection = '// 01 HERO';
      else if (id === 'intro') currentSection = '// 02 INTRO';
      else if (id === 'services') currentSection = '// 03 SERVICES';
      else if (id === 'projects') currentSection = '// 04 PROJECTS';
      else if (id === 'testimonials') currentSection = '// 05 REVIEWS';
      else if (id === 'contact') currentSection = '// 06 REACH OUT';
    }
  });

  if (spyText.innerText !== currentSection) {
    spyText.innerText = currentSection;
  }
}
