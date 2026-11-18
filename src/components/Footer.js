import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';

export function renderFooter() {
  return `
    <footer class="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-10 transition-colors">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--color-text-muted)] gap-6">
        
        <div class="flex flex-wrap items-center gap-3">
          <span class="text-[var(--color-text)] font-semibold">© ${new Date().getFullYear()} ${siteConfig.studio.name}</span>
          <span>//</span>
          <span>${siteConfig.studio.city} & Worldwide</span>
        </div>

        <div class="flex flex-wrap items-center gap-6 sm:gap-8">
          ${siteConfig.socialLinks.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--color-accent)] transition-colors">
              ${s.name} ↗
            </a>
          `).join('')}
          <span class="text-[var(--color-border)]">•</span>
          <a href="#hero" class="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors font-bold">
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  `;
}

export function initFooterEvents() {
  // Handled
}
