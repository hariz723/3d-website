import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

export function renderServicesPage() {
  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      <!-- HERO HEADER -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#8E9593]">
          <span>Clear Scope • Flat Price</span>
          <span>•</span>
          <span class="text-[#FF531F] font-bold">No Hidden Retainers</span>
        </div>
        <h1 class="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none uppercase">
          Flexible Plans
        </h1>
        <p class="text-xs sm:text-sm text-[#8E9593] max-w-2xl leading-relaxed">
          Tailored, flexible 3D visualization tiers designed to scale with your architectural pipeline—whether you need a single room preview or full tower pre-sale marketing.
        </p>
      </div>

      <!-- PRICING TIERS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${siteConfig.services.map(s => `
          <div class="framer-card rounded-3xl p-8 flex flex-col justify-between space-y-8 relative ${s.popular ? 'border-[#FF531F] bg-gradient-to-b from-[#181514] to-[#111212]' : ''}">
            
            ${s.popular ? `
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#FF531F] text-black text-[10px] font-mono font-bold uppercase tracking-wider rounded-full shadow-lg">
                ${s.badge}
              </div>
            ` : ''}

            <div class="space-y-6">
              <div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-[#8E9593]">${s.target}</span>
                <h3 class="font-display text-3xl text-white uppercase leading-none mt-1">${s.name}</h3>
              </div>

              <!-- PRICE -->
              <div class="py-4 border-y border-white/10">
                <div class="flex items-baseline gap-1.5">
                  <span class="font-display text-4xl font-bold text-white">${s.price}</span>
                  <span class="text-xs text-[#8E9593] font-mono">${s.unit}</span>
                </div>
                <div class="text-[11px] text-[#FF531F] font-mono mt-1 flex items-center gap-1">
                  ${renderIcon('sparkles', 'w-3 h-3')}
                  <span>Turnaround: ${s.leadTime}</span>
                </div>
              </div>

              <!-- FEATURES LIST -->
              <ul class="space-y-2.5 text-xs text-[#A1A8A6]">
                ${s.features.map(f => `
                  <li class="flex items-start gap-2">
                    <span class="text-[#FF531F] mt-0.5 shrink-0">${renderIcon('check', 'w-3.5 h-3.5')}</span>
                    <span class="leading-tight">${f}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- CTA BUTTON -->
            <button class="service-quote-btn w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 ${s.popular ? 'bg-[#FF531F] hover:bg-[#E04212] text-black shadow-lg hover:scale-105' : 'bg-white/10 hover:bg-white/20 text-white'}" data-service="${s.name}">
              <span>${s.cta}</span>
              ${renderIcon('arrowRight', 'w-3.5 h-3.5')}
            </button>

          </div>
        `).join('')}
      </div>

      <!-- FAQ ACCORDION -->
      <div class="max-w-4xl mx-auto space-y-8">
        <div class="space-y-3 text-center">
          <span class="text-xs uppercase tracking-widest text-[#FF531F] font-bold">Frequently Asked</span>
          <h2 class="font-display text-4xl sm:text-5xl text-white tracking-tight leading-none uppercase">
            FAQ
          </h2>
        </div>

        <div class="space-y-3">
          ${siteConfig.faqs.map((faq, idx) => `
            <div class="faq-card framer-card rounded-2xl overflow-hidden transition-all">
              <button class="faq-toggle-btn w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer" data-index="${idx}">
                <div class="flex items-center gap-4">
                  <span class="font-mono text-xs font-bold text-[#FF531F]">${faq.num}</span>
                  <span class="font-sans text-sm sm:text-base font-semibold text-white">${faq.q}</span>
                </div>
                <span class="faq-icon text-[#8E9593] transform transition-transform">
                  ${renderIcon('chevronDown', 'w-4 h-4')}
                </span>
              </button>
              <div class="faq-content hidden px-6 pb-6 text-xs text-[#8E9593] leading-relaxed border-t border-white/5 pt-4">
                ${faq.a}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- BOTTOM BANNER -->
      <div class="framer-card p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#141515] to-[#1A1817]">
        <div class="space-y-1">
          <h4 class="font-display text-3xl text-white uppercase">Need a multi-phase development retainer?</h4>
          <p class="text-xs text-[#8E9593]">We offer dedicated rendering capacity for architecture studios and developers.</p>
        </div>
        <button id="services-quote-btn" class="px-8 py-3.5 bg-[#FF531F] hover:bg-[#E04212] text-black text-xs font-bold uppercase tracking-wider rounded-full transition-all shrink-0 cursor-pointer shadow-lg">
          Build Custom Estimate
        </button>
      </div>

    </div>
  `;
}

export function initServicesPageEvents() {
  document.querySelectorAll('.service-quote-btn').forEach(btn => {
    btn.onclick = () => {
      const s = btn.getAttribute('data-service');
      appState.openQuoteModal({ projectType: s });
    };
  });

  const quoteBtn = document.getElementById('services-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => appState.openQuoteModal();
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-toggle-btn').forEach(btn => {
    btn.onclick = () => {
      const card = btn.closest('.faq-card');
      const content = card?.querySelector('.faq-content');
      const icon = card?.querySelector('.faq-icon');

      if (content) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        if (icon) {
          icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
          icon.classList.toggle('text-[#FF531F]', isHidden);
        }
      }
    };
  });
}
