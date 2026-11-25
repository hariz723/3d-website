import './styles/main.css';
import { appState } from './utils/state.js';
import { siteConfig } from './config/siteConfig.js';
import { initScrollEngine } from './utils/scrollEngine.js';

// Components
import { renderHeader, initHeaderEvents } from './components/Header.js';
import { renderFooter, initFooterEvents } from './components/Footer.js';
import { renderWhatsAppButton } from './components/WhatsAppButton.js';
import { renderQuoteModal, initQuoteModalEvents } from './components/QuoteModal.js';
import { renderLightbox, initLightboxEvents } from './components/Lightbox.js';
import { renderCustomizerDrawer, initCustomizerEvents } from './components/CustomizerDrawer.js';
import { renderCustomCursor, initCustomCursor } from './components/CustomCursor.js';

// Pages
import { renderHomePage, initHomePageEvents } from './pages/HomePage.js';
import { renderPortfolioPage, initPortfolioPageEvents } from './pages/PortfolioPage.js';
import { renderProjectDetailPage, initProjectDetailPageEvents } from './pages/ProjectDetailPage.js';
import { renderServicesPage, initServicesPageEvents } from './pages/ServicesPage.js';
import { renderProcessPage, initProcessPageEvents } from './pages/ProcessPage.js';
import { renderAboutPage, initAboutPageEvents } from './pages/AboutPage.js';
import { renderContactPage, initContactPageEvents } from './pages/ContactPage.js';

function updateSEOMeta() {
  const title = `${siteConfig.studio.name} | Build Smarter. Grow Bigger.`;
  document.title = title;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute('content', `Vesaree Technologies — AI automation, lead generation and software development for businesses in India and worldwide.`);
  }

  // Update JSON-LD structured data
  const jsonLdScript = document.getElementById('schema-json-ld');
  if (jsonLdScript) {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": siteConfig.studio.legalName || siteConfig.studio.name,
      "description": siteConfig.intro.subtext,
      "areaServed": siteConfig.contact.officeValue,
      "telephone": siteConfig.studio.phone,
      "email": siteConfig.studio.email,
      "url": window.location.origin
    };
    jsonLdScript.textContent = JSON.stringify(schemaData);
  }
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  updateSEOMeta();

  const route = appState.activeRoute;
  let pageContentHtml = '';

  if (route.startsWith('#/project/')) {
    const id = route.replace('#/project/', '');
    pageContentHtml = renderProjectDetailPage(id);
  } else if (route.startsWith('#/portfolio') || route === '#projects-archive') {
    pageContentHtml = renderPortfolioPage();
  } else if (route === '#/services') {
    pageContentHtml = renderServicesPage();
  } else if (route === '#/process') {
    pageContentHtml = renderProcessPage();
  } else if (route === '#/about') {
    pageContentHtml = renderAboutPage();
  } else if (route === '#/contact') {
    pageContentHtml = renderContactPage();
  } else {
    pageContentHtml = renderHomePage();
  }

  app.innerHTML = `
    <!-- TOP HAIRLINE SCROLL PROGRESS BAR (Alexfolio) -->
    <div id="scroll-progress-bar" class="fixed top-0 left-0 h-[2px] bg-[var(--color-accent)] z-50 transition-all duration-75 pointer-events-none" style="width: 0%;"></div>

    <!-- FLOATING SCROLL CHAPTER SPY BADGE (Alexfolio) -->
    <div class="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181717]/90 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] shadow-2xl pointer-events-none select-none">
      <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-ping"></span>
      <span id="scroll-spy-badge" class="tracking-wider">// 01 INTRO</span>
    </div>

    <div class="min-h-screen flex flex-col justify-between selection:bg-[var(--color-accent)] selection:text-black bg-[var(--color-bg)] text-[var(--color-text)]">
      
      <!-- STICKY GLASS HEADER -->
      ${renderHeader()}

      <!-- DYNAMIC PAGE CONTENT -->
      <main class="flex-grow">
        ${pageContentHtml}
      </main>

      <!-- ARCHITECTURAL FOOTER -->
      ${renderFooter()}

      <!-- FLOATING WHATSAPP CTA -->
      ${renderWhatsAppButton()}

      <!-- INTERACTIVE QUOTE MODAL -->
      ${renderQuoteModal()}

      <!-- FULLSCREEN LIGHTBOX -->
      ${renderLightbox()}

      <!-- LIVE STUDIO CUSTOMIZER DRAWER -->
      ${renderCustomizerDrawer()}

      <!-- ALEXFOLIO CUSTOM INTERACTIVE CURSOR -->
      ${renderCustomCursor()}

    </div>
  `;

  // Initialize interactive event listeners
  initCustomCursor();
  initHeaderEvents();
  initFooterEvents();
  initQuoteModalEvents();
  initLightboxEvents();
  initCustomizerEvents();

  // Page-specific events
  if (route.startsWith('#/project/')) {
    const id = route.replace('#/project/', '');
    initProjectDetailPageEvents(id);
  } else if (route.startsWith('#/portfolio')) {
    initPortfolioPageEvents();
  } else if (route === '#/services') {
    initServicesPageEvents();
  } else if (route === '#/process') {
    initProcessPageEvents();
  } else if (route === '#/about') {
    initAboutPageEvents();
  } else if (route === '#/contact') {
    initContactPageEvents();
  } else {
    initHomePageEvents();
  }

  // Initialize Lenis Smooth Scroll & Scroll Actions
  setTimeout(() => {
    initScrollEngine();
  }, 50);
}

// Subscribe to state changes (route change, modal open/close, studio customize)
appState.subscribe(() => {
  renderApp();
});

// Hashchange handler
window.addEventListener('hashchange', () => {
  appState.setRoute(window.location.hash || '#home');
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) {
    window.location.hash = '#home';
  } else {
    appState.setRoute(window.location.hash);
  }
  renderApp();
});
