import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';

export function renderFooter() {
  return `
    <footer class="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] py-8 transition-colors">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--color-text-muted)] gap-4">
        
        <div class="flex items-center gap-2">
          <span>© ${new Date().getFullYear()} ${appState.studioName}</span>
          <span>// ${appState.city}</span>
        </div>

        <div class="flex items-center gap-6">
          <span>Millimeter Scale Fidelity Guaranteed</span>
          <span>•</span>
          <a href="#hero" class="text-[var(--color-text)] hover:text-[#FF531F] transition-colors">
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
