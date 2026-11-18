/**
 * ===================================================================
 * 🖱️ ALEXFOLIO CUSTOM INTERACTIVE CURSOR
 * ===================================================================
 * Fluid follower dot & magnetic ring with context-sensitive morphing.
 */

export function renderCustomCursor() {
  return `
    <div id="custom-cursor-container" class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none hidden md:block">
      <!-- INNER PRECISE DOT -->
      <div id="cursor-dot" class="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"></div>
      
      <!-- OUTER FLUID FOLLOWER RING -->
      <div id="cursor-ring" class="fixed top-0 left-0 w-10 h-10 rounded-full border border-[var(--color-accent)]/70 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-0 flex items-center justify-center transition-[width,height,background-color,border-color,opacity] duration-200 ease-out">
        <span id="cursor-text" class="text-[9px] font-mono font-bold uppercase tracking-wider text-black bg-[var(--color-accent)] px-2 py-0.5 rounded-full opacity-0 scale-75 transition-all duration-200 whitespace-nowrap"></span>
      </div>
    </div>
  `;
}

export function initCustomCursor() {
  const container = document.getElementById('custom-cursor-container');
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const text = document.getElementById('cursor-text');

  if (!container || !dot || !ring) return;

  // Touch screen guard
  if (window.matchMedia('(pointer: coarse)').matches) {
    container.style.display = 'none';
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isVisible = false;
  let isHovered = false;
  let isMouseDown = false;
  let currentMode = 'default'; // 'default', 'link', 'project', 'scroll', 'drag'

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }

    // Direct placement for inner dot (zero lag)
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });

  document.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    isVisible = true;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });

  document.addEventListener('mousedown', () => {
    isMouseDown = true;
    updateCursorState();
  });

  document.addEventListener('mouseup', () => {
    isMouseDown = false;
    updateCursorState();
  });

  // Smooth lerp loop for the outer ring
  let rafId;
  function updateRing() {
    // Lerp factor
    const ease = 0.18;
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;

    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(updateRing);
  }
  rafId = requestAnimationFrame(updateRing);

  function setCursorMode(mode, label = '') {
    currentMode = mode;
    updateCursorState(label);
  }

  function updateCursorState(label = '') {
    // Reset ring classes
    ring.classList.remove('cursor-mode-link', 'cursor-mode-project', 'cursor-mode-scroll', 'cursor-mode-drag', 'cursor-mode-down');

    if (isMouseDown) {
      ring.classList.add('cursor-mode-down');
    }

    if (currentMode === 'link') {
      ring.classList.add('cursor-mode-link');
      if (text) {
        text.style.opacity = '0';
        text.style.transform = 'scale(0.7)';
      }
    } else if (currentMode === 'project') {
      ring.classList.add('cursor-mode-project');
      if (text) {
        text.innerText = label || 'VIEW ↗';
        text.style.opacity = '1';
        text.style.transform = 'scale(1)';
      }
    } else if (currentMode === 'scroll') {
      ring.classList.add('cursor-mode-scroll');
      if (text) {
        text.innerText = label || 'SCROLL ↓';
        text.style.opacity = '1';
        text.style.transform = 'scale(1)';
      }
    } else if (currentMode === 'drag') {
      ring.classList.add('cursor-mode-drag');
      if (text) {
        text.innerText = label || 'DRAG ↔';
        text.style.opacity = '1';
        text.style.transform = 'scale(1)';
      }
    } else {
      if (text) {
        text.style.opacity = '0';
        text.style.transform = 'scale(0.7)';
      }
    }
  }

  // Event delegation for cursor context morphing
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (!target) return;

    // 1. Projects
    const projectRow = target.closest('.project-row, [data-cursor="view"]');
    if (projectRow) {
      setCursorMode('project', 'VIEW ↗');
      return;
    }

    // 2. Testimonials
    const testimonialZone = target.closest('#testimonials, .testimonial-scroll-area');
    if (testimonialZone) {
      setCursorMode('scroll', 'SCROLL ↓');
      return;
    }

    // 3. Before/After slider
    const baSlider = target.closest('.ba-container');
    if (baSlider) {
      setCursorMode('drag', 'DRAG ↔');
      return;
    }

    // 4. Links & Buttons
    const interactive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
    if (interactive) {
      setCursorMode('link');
      return;
    }

    // Default
    setCursorMode('default');
  });

  return {
    destroy: () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
    }
  };
}
