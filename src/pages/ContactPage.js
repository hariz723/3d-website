import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';
import { renderQuoteFormHtml, initQuoteFormEvents } from '../components/QuoteModal.js';

export function renderContactPage() {
  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <!-- HERO -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#8E9593]">
          <span>Get in Touch</span>
          <span>•</span>
          <span class="text-[#FF531F] font-bold">2-Hour Quote Response</span>
        </div>
        <h1 class="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none uppercase">
          Initiate 3D Project
        </h1>
        <p class="text-xs sm:text-sm text-[#8E9593] max-w-2xl leading-relaxed">
          Ready to experience your space in photorealism? Complete the quote builder below, or reach out to our architectural directors directly via WhatsApp or phone.
        </p>
      </div>

      <!-- CONTACT INFO CARDS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="framer-card p-6 rounded-3xl space-y-2">
          <div class="w-10 h-10 rounded-2xl bg-white/5 text-[#FF531F] flex items-center justify-center">
            ${renderIcon('mapPin', 'w-5 h-5')}
          </div>
          <span class="text-[10px] font-mono uppercase tracking-wider text-[#8E9593]">Studio Location</span>
          <h4 class="text-sm font-bold text-white">${appState.city}</h4>
          <p class="text-xs text-[#8E9593] leading-snug">${siteConfig.studio.address}</p>
        </div>

        <div class="framer-card p-6 rounded-3xl space-y-2">
          <div class="w-10 h-10 rounded-2xl bg-white/5 text-[#FF531F] flex items-center justify-center">
            ${renderIcon('mail', 'w-5 h-5')}
          </div>
          <span class="text-[10px] font-mono uppercase tracking-wider text-[#8E9593]">Direct Inquiries</span>
          <h4 class="text-sm font-bold text-white">Email Studio</h4>
          <a href="mailto:${siteConfig.studio.email}" class="text-xs text-[#FF531F] hover:underline font-medium block truncate">${siteConfig.studio.email}</a>
        </div>

        <div class="framer-card p-6 rounded-3xl space-y-2">
          <div class="w-10 h-10 rounded-2xl bg-white/5 text-[#FF531F] flex items-center justify-center">
            ${renderIcon('phone', 'w-5 h-5')}
          </div>
          <span class="text-[10px] font-mono uppercase tracking-wider text-[#8E9593]">Telephone Line</span>
          <h4 class="text-sm font-bold text-white">${siteConfig.studio.hours}</h4>
          <a href="tel:${siteConfig.studio.phone}" class="text-xs text-white hover:text-[#FF531F] font-mono block">${siteConfig.studio.phoneDisplay}</a>
        </div>

        <a href="https://wa.me/${siteConfig.studio.whatsappNumber}?text=${encodeURIComponent(siteConfig.studio.whatsappDefaultMessage)}" target="_blank" rel="noopener noreferrer" class="framer-card p-6 rounded-3xl space-y-2 hover:border-[#25D366] transition-colors block group">
          <div class="w-10 h-10 rounded-2xl bg-[#25D366] text-black flex items-center justify-center shadow-lg">
            ${renderIcon('whatsapp', 'w-5 h-5')}
          </div>
          <span class="text-[10px] font-mono uppercase tracking-wider text-[#25D366] font-bold">Fastest Response</span>
          <h4 class="text-sm font-bold text-white">Instant WhatsApp</h4>
          <p class="text-xs text-[#25D366] font-medium flex items-center gap-1 group-hover:underline">
            <span>Send plans now</span>
            ${renderIcon('arrowRight', 'w-3 h-3')}
          </p>
        </a>

      </div>

      <!-- MAIN QUOTE FORM -->
      <div class="framer-card rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#141515] to-[#0A0B0B]">
        <div class="max-w-2xl mb-8 space-y-2">
          <span class="text-xs uppercase tracking-widest text-[#FF531F] font-bold flex items-center gap-2">
            ${renderIcon('sparkles', 'w-4 h-4')}
            <span>Project Specification</span>
          </span>
          <h3 class="font-display text-4xl text-white uppercase">
            Custom Quote Specification
          </h3>
          <p class="text-xs sm:text-sm text-[#8E9593]">
            Provide as much detail as available. We will analyze your square footage and floor plans and deliver an itemized quote within 2 hours.
          </p>
        </div>

        ${renderQuoteFormHtml('contact-page-quote-form')}
      </div>

    </div>
  `;
}

export function initContactPageEvents() {
  initQuoteFormEvents('contact-page-quote-form');
}
