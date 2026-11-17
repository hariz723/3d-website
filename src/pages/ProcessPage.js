import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

export function renderProcessPage() {
  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      <!-- HERO -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-[#8E9593]">
          <span>Structured Workflow</span>
          <span>•</span>
          <span class="text-[#FF531F] font-bold">5 Proven Milestones</span>
        </div>
        <h1 class="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none uppercase">
          From CAD to Photorealism
        </h1>
        <p class="text-xs sm:text-sm text-[#8E9593] max-w-2xl leading-relaxed">
          From first blueprint to final 4K master delivery, every step is transparent and intentional. Keep full artistic direction of camera angles, lighting temperature, and materials.
        </p>
      </div>

      <!-- 5-STEP TIMELINE -->
      <div class="space-y-6">
        ${siteConfig.process.map(step => `
          <div class="framer-card rounded-3xl p-8 sm:p-12 hover:border-[#FF531F]/50 transition-all duration-300 relative overflow-hidden group">
            
            <!-- WATERMARK NUMBER -->
            <div class="absolute -right-4 -bottom-8 font-display text-9xl sm:text-[14rem] font-bold text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors">
              ${step.step}
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              <!-- STEP HEADER -->
              <div class="lg:col-span-5 space-y-3">
                <div class="flex items-center gap-3">
                  <span class="font-display text-4xl font-bold text-[#FF531F]">
                    ${step.step}
                  </span>
                  <span class="px-3 py-1 bg-white/5 border border-white/10 text-[#8E9593] font-mono text-[11px] uppercase tracking-wider rounded-full">
                    ${step.duration}
                  </span>
                </div>
                <h3 class="font-display text-3xl sm:text-4xl text-white uppercase leading-none group-hover:text-[#FF531F] transition-colors">
                  ${step.name}
                </h3>
                <p class="text-xs font-semibold text-white/80 italic">
                  "${step.tagline}"
                </p>
              </div>

              <!-- STEP DESCRIPTION & DELIVERABLES -->
              <div class="lg:col-span-7 space-y-4">
                <p class="text-xs sm:text-sm text-[#8E9593] leading-relaxed">
                  ${step.description}
                </p>

                <!-- DELIVERABLE BADGE -->
                <div class="p-4 bg-[#080909] border border-white/5 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <span class="text-[10px] uppercase font-mono tracking-wider text-[#8E9593]">Phase Deliverable:</span>
                    <p class="text-xs font-bold text-white flex items-center gap-2 mt-0.5">
                      <span class="text-[#FF531F]">${renderIcon('sparkles', 'w-3.5 h-3.5')}</span>
                      <span>${step.deliverable}</span>
                    </p>
                  </div>
                  <span class="text-[10px] uppercase font-mono px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full shrink-0">
                    Milestone Verified
                  </span>
                </div>
              </div>

            </div>

          </div>
        `).join('')}
      </div>

      <!-- FILE PREPARATION GUIDE -->
      <div class="framer-card rounded-3xl p-8 sm:p-14 space-y-8 bg-gradient-to-b from-[#141515] to-[#0A0B0B]">
        <div class="max-w-2xl space-y-2">
          <span class="text-xs uppercase tracking-widest text-[#FF531F] font-bold">Onboarding Checklist</span>
          <h3 class="font-display text-4xl text-white uppercase">What Can You Provide?</h3>
          <p class="text-xs text-[#8E9593]">
            We accept virtually any file format—from raw AutoCAD files to napkin sketches.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="p-6 bg-[#080909] border border-white/5 rounded-2xl space-y-2">
            <span class="font-mono text-xs text-[#FF531F] font-bold">01. Architectural CAD</span>
            <h5 class="text-xs font-bold text-white uppercase">DWG / PDF / Revit</h5>
            <p class="text-[11px] text-[#8E9593] leading-relaxed">
              AutoCAD .dwg, .dxf, Revit .rvt, SketchUp .skp, or dimensioned PDF floor plans and elevations.
            </p>
          </div>

          <div class="p-6 bg-[#080909] border border-white/5 rounded-2xl space-y-2">
            <span class="font-mono text-xs text-[#FF531F] font-bold">02. Finishes & Schedules</span>
            <h5 class="text-xs font-bold text-white uppercase">Materials & Codes</h5>
            <p class="text-[11px] text-[#8E9593] leading-relaxed">
              Paint brand references (Benjamin Moore, Farrow & Ball), flooring specifications, and wood stains.
            </p>
          </div>

          <div class="p-6 bg-[#080909] border border-white/5 rounded-2xl space-y-2">
            <span class="font-mono text-xs text-[#FF531F] font-bold">03. FF&E Specifications</span>
            <h5 class="text-xs font-bold text-white uppercase">Furniture & Fixtures</h5>
            <p class="text-[11px] text-[#8E9593] leading-relaxed">
              Tear sheets, web links, or catalog references for key lighting fixtures, custom joinery, and sofas.
            </p>
          </div>
        </div>

        <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
          <p class="text-xs text-[#8E9593]">
            Ready to upload your project drawings?
          </p>
          <button id="process-quote-btn" class="w-full sm:w-auto px-8 py-3.5 bg-[#FF531F] hover:bg-[#E04212] text-black text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg hover:scale-105">
            Initiate Phase 01: Request Quote
          </button>
        </div>
      </div>

    </div>
  `;
}

export function initProcessPageEvents() {
  const quoteBtn = document.getElementById('process-quote-btn');
  if (quoteBtn) {
    quoteBtn.onclick = () => appState.openQuoteModal();
  }
}
