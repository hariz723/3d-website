import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';
import { renderQuoteFormHtml, initQuoteFormEvents } from '../components/QuoteModal.js';

export function renderContactPage() {
  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
      
      <!-- HERO (Alexfolio Style) -->
      <div class="space-y-4 border-b border-[var(--color-border)] pb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
          <span>// Contact & Inquiries</span>
          <span>•</span>
          <span class="text-[var(--color-accent)] font-bold">Open for Sprints</span>
        </div>
        <h1 class="font-heading text-5xl sm:text-7xl lg:text-9xl font-black text-[var(--color-text)] tracking-tight leading-[0.88] uppercase">
          ${siteConfig.contact.headline}
        </h1>
        <p class="text-base sm:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
          ${siteConfig.contact.subtext}
        </p>
      </div>

      <!-- MAIN CONTACT GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- LEFT: COORDINATES & CHANNELS -->
        <div class="lg:col-span-5 space-y-10">
          <div class="space-y-6">
            <h3 class="font-heading text-2xl uppercase font-bold text-[var(--color-text)]">
              Direct Contact
            </h3>
            
            <div class="space-y-6 font-mono text-xs">
              <div class="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl space-y-1">
                <span class="text-[var(--color-accent)] font-bold block">// Service Reach</span>
                <p class="text-sm text-[var(--color-text)] font-semibold">${siteConfig.contact.officeValue}</p>
                <p class="text-[var(--color-text-muted)]">Serving businesses in India and worldwide</p>
              </div>

              <div class="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl space-y-1">
                <span class="text-[var(--color-accent)] font-bold block">// Email</span>
                <a href="mailto:${siteConfig.contact.mailValue}" class="text-sm text-[var(--color-text)] font-semibold hover:text-[var(--color-accent)] transition-colors block">
                  ${siteConfig.contact.mailValue}
                </a>
                <p class="text-[var(--color-text-muted)]">Average response time: &lt; 24 hours</p>
              </div>

              <div class="p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl space-y-1">
                <span class="text-[var(--color-accent)] font-bold block">// WhatsApp & Phone</span>
                <a href="tel:${siteConfig.contact.phoneValue}" class="text-sm text-[var(--color-text)] font-semibold hover:text-[var(--color-accent)] transition-colors block">
                  ${siteConfig.contact.phoneValue}
                </a>
                <p class="text-[var(--color-text-muted)]">Direct WhatsApp & phone consultations</p>
              </div>
            </div>
          </div>

          <!-- SOCIAL PROFILES -->
          <div class="space-y-3 pt-4 border-t border-[var(--color-border)]">
            <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-bold">
              Follow & Connect
            </span>
            <div class="flex flex-wrap gap-4 text-xs font-mono uppercase">
              ${siteConfig.socialLinks.map(s => `
                <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  <span>${s.name}</span>
                  <span class="text-[10px]">↗</span>
                </a>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- RIGHT: INTERACTIVE FORM -->
        <div class="lg:col-span-7 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div class="mb-8 space-y-2">
            <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">// Start Project</span>
            <h3 class="font-heading text-3xl sm:text-4xl font-black uppercase text-[var(--color-text)]">
              Send Message
            </h3>
            <p class="text-xs text-[var(--color-text-muted)] font-mono">
              Fill out the details below to receive a project proposal and timeline within 24 hours.
            </p>
          </div>

          ${renderQuoteFormHtml('contact-page-form')}
        </div>

      </div>

    </div>
  `;
}

export function initContactPageEvents() {
  initQuoteFormEvents('contact-page-form');
}
