import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';

export function renderQuoteModal() {
  if (!appState.isQuoteModalOpen) return '';

  return `
    <div id="quote-modal-overlay" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in">
      <div class="relative w-full max-w-3xl rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl overflow-hidden my-6">
        
        <!-- MODAL HEADER -->
        <div class="px-6 py-5 bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-between border-b border-[var(--color-border)]">
          <div>
            <div class="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-accent)] font-mono font-bold">
              ${renderIcon('sparkles', 'w-3.5 h-3.5')}
              <span>// Let's Talk</span>
            </div>
            <h3 class="font-heading text-2xl sm:text-3xl text-[var(--color-text)] mt-1 uppercase font-black">
              Start a New Project
            </h3>
          </div>
          <button id="modal-close-btn" class="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] rounded-full transition-colors cursor-pointer" aria-label="Close modal">
            ${renderIcon('x', 'w-6 h-6')}
          </button>
        </div>

        <!-- FORM CONTENT -->
        <div class="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          ${renderQuoteFormHtml('modal-form')}
        </div>

      </div>
    </div>
  `;
}

export function renderQuoteFormHtml(formId = 'standalone-quote-form') {
  return `
    <form id="${formId}" class="space-y-6" onsubmit="return false;">
      <div id="${formId}-success-alert" class="hidden p-6 bg-[var(--color-surface)] border border-[var(--color-accent)] rounded-2xl text-[var(--color-text)]">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-[var(--color-accent)] text-black flex items-center justify-center shrink-0">
            ${renderIcon('check', 'w-5 h-5')}
          </div>
          <div class="flex-1 space-y-2">
            <h4 class="font-heading text-2xl font-bold uppercase text-[var(--color-text)]">Message Delivered!</h4>
            <p class="text-xs text-[var(--color-text-muted)]">
              Thank you for reaching out. I will review your requirements and respond with a project proposal and timeline within 24 hours.
            </p>
            <div class="p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] text-xs space-y-1 font-mono">
              <div><strong class="text-[var(--color-text)]">Project Ref:</strong> <span class="text-[var(--color-accent)] font-bold" id="${formId}-ref-code">#AG-2024</span></div>
              <div><strong class="text-[var(--color-text)]">Studio:</strong> ${siteConfig.studio.name} (${siteConfig.studio.city})</div>
              <div><strong class="text-[var(--color-text)]">Direct Email:</strong> ${siteConfig.contact.mailValue}</div>
            </div>
            <div class="pt-2 flex flex-wrap gap-3">
              <button type="button" onclick="location.reload()" class="px-5 py-2.5 bg-[var(--color-accent)] text-black text-xs font-bold uppercase font-mono tracking-wider rounded-full shadow-lg">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="${formId}-fields" class="space-y-6">
        
        <!-- STEP 1: CONTACT INFO -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs uppercase tracking-wider font-mono font-semibold text-[var(--color-text)] mb-1.5">
              Your Name <span class="text-[var(--color-accent)]">*</span>
            </label>
            <input type="text" name="name" required placeholder="e.g. Maya Lopez" class="w-full px-3.5 py-2.5 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] placeholder-[var(--color-text-muted)]">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider font-mono font-semibold text-[var(--color-text)] mb-1.5">
              Email Address <span class="text-[var(--color-accent)]">*</span>
            </label>
            <input type="email" name="email" required placeholder="e.g. maya@company.com" class="w-full px-3.5 py-2.5 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] placeholder-[var(--color-text-muted)]">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider font-mono font-semibold text-[var(--color-text)] mb-1.5">
              Phone / WhatsApp
            </label>
            <input type="tel" name="phone" placeholder="e.g. +49 170 1234567" class="w-full px-3.5 py-2.5 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] placeholder-[var(--color-text-muted)]">
          </div>
        </div>

        <!-- STEP 2: PROJECT TYPE -->
        <div class="space-y-2">
          <label class="block text-xs uppercase tracking-wider font-mono font-semibold text-[var(--color-text)]">
            Service Required <span class="text-[var(--color-accent)]">*</span>
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            ${[
              { id: 'branding', label: 'Branding & Strategy' },
              { id: 'web-design', label: 'Website Design' },
              { id: 'development', label: 'Web Development' },
              { id: 'app-design', label: 'Application Design' }
            ].map((s, idx) => `
              <label class="flex items-center gap-2 p-3 bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)] rounded-xl cursor-pointer text-xs transition-colors">
                <input type="radio" name="service" value="${s.id}" ${idx === 0 ? 'checked' : ''} class="accent-[var(--color-accent)]">
                <span class="text-[var(--color-text)] font-medium text-[11px]">${s.label}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- STEP 3: DETAILS -->
        <div>
          <label class="block text-xs uppercase tracking-wider font-mono font-semibold text-[var(--color-text)] mb-1.5">
            Tell me about your idea <span class="text-[var(--color-accent)]">*</span>
          </label>
          <textarea name="notes" rows="4" required placeholder="Describe your product, timeline, current stage, or specific goals..." class="w-full px-3.5 py-2.5 text-xs bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl focus:outline-none focus:border-[var(--color-accent)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] leading-relaxed"></textarea>
        </div>

        <!-- SUBMIT BUTTON -->
        <div>
          <button type="submit" class="w-full py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black text-xs font-bold uppercase font-mono tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01]">
            <span>Send Message</span>
            ${renderIcon('arrowRight', 'w-4 h-4')}
          </button>
        </div>

      </div>
    </form>
  `;
}

export function initQuoteFormEvents(formId = 'modal-form') {
  const form = document.getElementById(formId);
  if (!form) return;

  form.onsubmit = (e) => {
    e.preventDefault();
    const fields = document.getElementById(`${formId}-fields`);
    const success = document.getElementById(`${formId}-success-alert`);
    if (fields) fields.classList.add('hidden');
    if (success) success.classList.remove('hidden');
  };
}

export function initQuoteModalEvents() {
  const overlay = document.getElementById('quote-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.onclick = () => appState.closeQuoteModal();
  }

  if (overlay) {
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        appState.closeQuoteModal();
      }
    };
  }

  initQuoteFormEvents('modal-form');
}
