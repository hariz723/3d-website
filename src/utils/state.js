import { siteConfig } from '../config/siteConfig.js';

class StateManager {
  constructor() {
    const saved = this.loadSavedConfig();
    this.studioName = saved.name || siteConfig.studio.name;
    this.city = saved.city || siteConfig.studio.city;
    this.primaryColor = saved.primaryColor || siteConfig.colors.primary;
    this.accentColor = saved.accentColor || siteConfig.colors.accent;

    this.activeRoute = window.location.hash || '#home';
    this.activeProjectId = null;
    this.listeners = new Set();
    this.lightboxData = null;
    this.isQuoteModalOpen = false;
    this.isCustomizerOpen = false;

    this.applyColors();
  }

  loadSavedConfig() {
    try {
      const stored = localStorage.getItem('lovera_studio_custom_config');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  saveConfig() {
    try {
      localStorage.setItem('lovera_studio_custom_config', JSON.stringify({
        name: this.studioName,
        city: this.city,
        primaryColor: this.primaryColor,
        accentColor: this.accentColor
      }));
    } catch {
      // Ignore
    }
  }

  resetConfig() {
    this.studioName = siteConfig.studio.name;
    this.city = siteConfig.studio.city;
    this.primaryColor = siteConfig.colors.primary;
    this.accentColor = siteConfig.colors.accent;
    try {
      localStorage.removeItem('lovera_studio_custom_config');
    } catch {}
    this.applyColors();
    this.notify();
  }

  applyColors() {
    document.documentElement.style.setProperty('--color-primary', this.primaryColor);
    document.documentElement.style.setProperty('--color-accent', this.accentColor);
    document.documentElement.style.setProperty('--color-accent-hover', this.adjustBrightness(this.accentColor, -15));
  }

  adjustBrightness(hex, percent) {
    try {
      let num = parseInt(hex.replace('#', ''), 16);
      let amt = Math.round(2.55 * percent);
      let R = (num >> 16) + amt;
      let G = (num >> 8 & 0x00FF) + amt;
      let B = (num & 0x0000FF) + amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    } catch {
      return hex;
    }
  }

  updateStudio(name, city, primaryColor, accentColor) {
    if (name !== undefined) this.studioName = name;
    if (city !== undefined) this.city = city;
    if (primaryColor !== undefined) this.primaryColor = primaryColor;
    if (accentColor !== undefined) this.accentColor = accentColor;
    this.applyColors();
    this.saveConfig();
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this);
      } catch (err) {
        console.error("Listener error:", err);
      }
    }
  }

  setRoute(hash) {
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
    this.activeRoute = hash;
    if (hash.startsWith('#/project/')) {
      this.activeProjectId = hash.replace('#/project/', '');
    } else {
      this.activeProjectId = null;
    }
    this.notify();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openQuoteModal(prefill = {}) {
    this.isQuoteModalOpen = true;
    this.quotePrefill = prefill;
    this.notify();
  }

  closeQuoteModal() {
    this.isQuoteModalOpen = false;
    this.notify();
  }

  openLightbox(images, startIndex = 0, title = "") {
    this.lightboxData = {
      images: Array.isArray(images) ? images : [images],
      currentIndex: startIndex,
      title
    };
    this.notify();
  }

  closeLightbox() {
    this.lightboxData = null;
    this.notify();
  }

  toggleCustomizer() {
    this.isCustomizerOpen = !this.isCustomizerOpen;
    this.notify();
  }
}

export const appState = new StateManager();
