import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

export function renderAboutPage() {
  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      <!-- HERO -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#8E9593]">
          <span>Studio Heritage</span>
          <span>•</span>
          <span class="text-[#FF531F] font-bold">Est. 2018 in ${appState.city}</span>
        </div>
        <h1 class="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none uppercase">
          Architecture Meets Photographic Art
        </h1>
        <p class="text-xs sm:text-sm text-[#8E9593] max-w-2xl leading-relaxed">
          Founded by architects and CGI artists, our studio exists to bridge the gap between flat architectural drawings and the visceral emotion of a finished luxury space.
        </p>
      </div>

      <!-- STORY & IMAGE -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 rounded-3xl overflow-hidden framer-card shadow-2xl">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85" alt="3D Studio Atelier" class="w-full h-full object-cover">
        </div>
        
        <div class="lg:col-span-5 space-y-6">
          <span class="text-xs uppercase tracking-widest text-[#FF531F] font-bold">Our Philosophy</span>
          <h2 class="font-display text-3xl sm:text-4xl text-white uppercase leading-none">
            We Don't Make "3D Models"—We Craft Architectural Photographs.
          </h2>
          <p class="text-xs sm:text-sm text-[#8E9593] leading-relaxed">
            Instead of generic 3D assets, we model bespoke joinery, calibrate real-world material IORs (Index of Refraction), and simulate accurate solar illumination.
          </p>
          <div class="p-6 bg-[#141515] border border-white/5 rounded-2xl space-y-2 text-xs">
            <div class="flex items-center gap-2 text-white font-bold">
              ${renderIcon('sparkles', 'w-4 h-4 text-[#FF531F]')}
              <span>Optical Raytracing & Sun Calibration</span>
            </div>
            <p class="text-[#8E9593]">
              Every render undergoes optical color science correction matching real DSLR architectural cameras (aperture f/8, 24mm/35mm architectural tilt-shift lenses).
            </p>
          </div>
        </div>
      </div>

      <!-- 4 STUDIO GUARANTEES -->
      <div class="space-y-6">
        <div class="space-y-2">
          <span class="text-xs uppercase tracking-widest text-[#FF531F] font-bold">Client Commitment</span>
          <h3 class="font-display text-4xl text-white uppercase">The ${appState.studioName} Standard</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${[
            { title: "Scale Fidelity", desc: "Every render is built directly to your CAD/DWG scale down to the millimeter." },
            { title: "Finish Accuracy", desc: "We match Benjamin Moore / Farrow & Ball paint codes and real stone slab textures." },
            { title: "Strict NDAs", desc: "We sign NDAs for celebrity, private residential, and commercial pre-release projects." },
            { title: "On-Time Delivery", desc: "We respect your client presentation deadlines with clear milestone tracking." }
          ].map(g => `
            <div class="framer-card rounded-3xl p-6 space-y-2.5 hover:border-[#FF531F]/50 transition-colors">
              <span class="text-[#FF531F]">${renderIcon('shieldCheck', 'w-6 h-6')}</span>
              <h4 class="font-display text-2xl text-white uppercase leading-none">${g.title}</h4>
              <p class="text-xs text-[#8E9593] leading-relaxed">${g.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- SOFTWARE PIPELINE -->
      <div class="framer-card rounded-3xl p-8 sm:p-12 space-y-6">
        <div class="space-y-2">
          <span class="text-xs uppercase tracking-widest text-[#FF531F] font-bold">Precision Engine</span>
          <h3 class="font-display text-4xl text-white uppercase">Software Stack</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${[
            { name: "3ds Max", role: "Polygonal geometry & precise architectural modeling" },
            { name: "Corona Renderer", role: "Unbiased physical photorealistic light calculation" },
            { name: "Chaos V-Ray", role: "Refractive glass & multi-layered material shaders" },
            { name: "Unreal Engine 5", role: "Real-time interactive virtual reality & 60fps walkthroughs" },
            { name: "Marvelous Designer", role: "Physically simulated fabric, bedding & drapery physics" },
            { name: "Adobe Photoshop", role: "Architectural color grading, tone mapping & lens correction" }
          ].map(s => `
            <div class="p-5 bg-[#080909] border border-white/5 rounded-2xl space-y-1">
              <span class="font-mono text-xs font-bold text-[#FF531F]">${s.name}</span>
              <p class="text-xs text-[#8E9593] leading-relaxed">${s.role}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- BOTTOM BANNER -->
      <div class="framer-card p-8 sm:p-12 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#141515] to-[#1A1817]">
        <div>
          <span class="text-xs uppercase font-mono tracking-widest text-[#FF531F] font-bold">Studio Headquarters</span>
          <h4 class="font-display text-3xl text-white uppercase mt-1">${siteConfig.studio.address}</h4>
          <p class="text-xs text-[#8E9593] mt-1">Serving clients in ${appState.city} and globally via digital delivery.</p>
        </div>
        <button id="about-quote-btn" class="px-8 py-3.5 bg-[#FF531F] hover:bg-[#E04212] text-black text-xs font-bold uppercase tracking-wider rounded-full transition-all shrink-0 cursor-pointer shadow-lg hover:scale-105">
          Collaborate With Us
        </button>
      </div>

    </div>
  `;
}

export function initAboutPageEvents() {
  const quoteBtn = document.getElementById('about-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => appState.openQuoteModal();
  }
}
