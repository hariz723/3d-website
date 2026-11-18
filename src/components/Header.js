import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';

export function renderHeader() {
  const currentRoute = appState.activeRoute;

  return `
    <header id="main-header" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 header-glass">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        
        <!-- STUDIO NAME / LOGO (Alexfolio Style) -->
        <a href="#home" class="flex items-center gap-2.5 group text-left">
          <span class="font-mono text-sm sm:text-base font-bold tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
            © ${siteConfig.studio.name}
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
        </a>

        <!-- DESKTOP EDITORIAL LINKS (Alexfolio Style) -->
        <nav class="hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest font-mono font-semibold">
          <a href="#projects" class="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            Projects
          </a>
          <a href="#about" class="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            About
          </a>
          <a href="#contact" class="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
            Contact
          </a>
        </nav>

        <!-- ACTIONS: THEME TOGGLE & LET'S TALK BUTTON -->
        <div class="flex items-center gap-3">
          
          <!-- THEME TOGGLE (Off-White / Black) -->
          <button id="theme-toggle-btn" type="button" title="Toggle Light / Dark Theme" class="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] rounded-full transition-colors cursor-pointer text-xs font-mono" aria-label="Toggle Theme">
            <span id="theme-icon">◐</span>
          </button>

          <!-- LET'S TALK / GET IN TOUCH BUTTON (Alexfolio) -->
          <button id="header-quote-btn" type="button" class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold font-mono uppercase tracking-wider text-black bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] rounded-full transition-all duration-300 shadow-md cursor-pointer hover:scale-105">
            <span>Let's Talk</span>
          </button>

          <!-- MOBILE HAMBURGER MENU BUTTON -->
          <button id="mobile-menu-toggle" type="button" class="p-2 text-[var(--color-text)] md:hidden focus:outline-none cursor-pointer" aria-label="Toggle Menu">
            <div class="w-6 h-4 flex flex-col justify-between">
              <span class="w-full h-0.5 bg-current"></span>
              <span class="w-full h-0.5 bg-current"></span>
              <span class="w-full h-0.5 bg-current"></span>
            </div>
          </button>

        </div>

      </div>

      <!-- MOBILE NAV DRAWER -->
      <div id="mobile-nav" class="hidden md:hidden bg-[var(--color-surface)] border-b border-[var(--color-border)] px-6 py-6 space-y-4 shadow-2xl transition-all">
        <a href="#projects" class="block py-2 text-sm uppercase tracking-wider font-mono font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">
          Projects
        </a>
        <a href="#about" class="block py-2 text-sm uppercase tracking-wider font-mono font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">
          About
        </a>
        <a href="#services" class="block py-2 text-sm uppercase tracking-wider font-mono font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">
          Services
        </a>
        <a href="#contact" class="block py-2 text-sm uppercase tracking-wider font-mono font-bold text-[var(--color-text)] border-b border-[var(--color-border)]">
          Contact
        </a>
        <div class="pt-2 flex flex-col gap-2.5">
          <button id="mobile-quote-btn" type="button" class="w-full py-3 text-center text-xs font-bold font-mono uppercase tracking-wider text-black bg-[var(--color-accent)] rounded-full shadow-md">
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  `;
}

export function initHeaderEvents() {
  const quoteBtn = document.getElementById('header-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => appState.openQuoteModal();
  }

  const mobileQuoteBtn = document.getElementById('mobile-quote-btn');
  if (mobileQuoteBtn) {
    mobileQuoteBtn.onclick = () => {
      document.getElementById('mobile-nav')?.classList.add('hidden');
      appState.openQuoteModal();
    };
  }

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileToggle && mobileNav) {
    mobileToggle.onclick = () => {
      mobileNav.classList.toggle('hidden');
    };
  }

  // Smooth anchor scroll on mobile
  document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.onclick = () => {
      document.getElementById('mobile-nav')?.classList.add('hidden');
    };
  });

  // Theme Toggle (Off-White / Black)
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.onclick = () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('studio_portfolio_theme', next);
    };
  }
}
