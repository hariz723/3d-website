import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

export function renderWhatsAppButton() {
  const url = `https://wa.me/${siteConfig.studio.whatsappNumber}?text=${encodeURIComponent(`Hi ${appState.studioName}, I would like to request a quote for my interior 3D rendering project.`)}`;

  return `
    <!-- FLOATING WHATSAPP BUTTON -->
    <div id="floating-whatsapp-container" class="fixed bottom-6 right-6 z-40 flex items-center group">
      
      <!-- HOVER TOOLTIP -->
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 bg-[#0D0E0E] text-white text-xs font-semibold py-2 px-4 rounded-full shadow-2xl border border-white/10 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto">
        <span class="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Chat with 3D Visualizer on WhatsApp</span>
      </a>

      <!-- FLOATING BUTTON -->
      <a href="${url}" target="_blank" rel="noopener noreferrer" id="whatsapp-fab" aria-label="Chat with our studio on WhatsApp" class="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-black rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
        <span class="absolute -top-1 -right-1 flex h-4 w-4">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-4 w-4 bg-[#080909] border-2 border-white text-[9px] font-bold text-white items-center justify-center font-mono">1</span>
        </span>
        ${renderIcon('whatsapp', 'w-7 h-7 text-black')}
      </a>

    </div>
  `;
}
