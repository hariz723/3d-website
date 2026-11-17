import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';

export function renderCustomizerDrawer() {
  if (!appState.isCustomizerOpen) return '';

  return `
    <div id="customizer-overlay" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex justify-end animate-fade-in">
      <div class="w-full max-w-md bg-[#0D0E0E] h-full shadow-2xl flex flex-col justify-between border-l border-[#232525] overflow-y-auto">
        
        <!-- HEADER -->
        <div class="p-6 bg-[#141515] text-white flex items-center justify-between border-b border-white/5">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-[#FF531F] text-black">
              ${renderIcon('sliders', 'w-5 h-5')}
            </span>
            <div>
              <h3 class="font-display text-2xl uppercase tracking-wide text-white">Live Brand Customizer</h3>
              <p class="text-[11px] text-[#8E9593]">Test [STUDIO NAME], [CITY] & [BRAND COLORS]</p>
            </div>
          </div>
          <button id="customizer-close-btn" class="p-1.5 text-[#8E9593] hover:text-white rounded-full cursor-pointer" aria-label="Close customizer">
            ${renderIcon('x', 'w-5 h-5')}
          </button>
        </div>

        <!-- FORM BODY -->
        <div class="p-6 space-y-6 flex-1 text-white">
          <div class="p-4 bg-[#141515] border border-white/5 rounded-2xl text-xs text-[#8E9593] space-y-1">
            <p class="font-bold text-white flex items-center gap-1.5">
              ${renderIcon('sparkles', 'w-3.5 h-3.5 text-[#FF531F]')}
              <span>Easy To Edit Text & Brand Colors</span>
            </p>
            <p>
              Type your custom studio details below to test them live across the entire website. These can also be permanently saved in 
              <code class="px-1.5 py-0.5 bg-black border border-white/10 rounded text-[#FF531F] font-mono text-[10px]">src/config/siteConfig.js</code>.
            </p>
          </div>

          <!-- STUDIO NAME -->
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              [STUDIO NAME]
            </label>
            <input type="text" id="cust-studio-name" value="${appState.studioName}" placeholder="e.g. LOVERA 3D" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white font-display text-base">
          </div>

          <!-- CITY -->
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              [CITY / LOCATION]
            </label>
            <input type="text" id="cust-studio-city" value="${appState.city}" placeholder="e.g. Los Angeles, CA or New York, NY" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white">
          </div>

          <!-- BRAND COLOR PRESETS -->
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-2">
              Lovera Palette Presets
            </label>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <button class="palette-preset-btn p-3 border border-[#232525] rounded-2xl text-left hover:border-[#FF531F] transition-colors cursor-pointer bg-[#141515]" data-accent="#FF531F">
                <div class="flex items-center gap-2 mb-1">
                  <span class="w-4 h-4 rounded-full" style="background: #FF531F;"></span>
                  <span class="font-bold text-white text-xs">Lovera Flame</span>
                </div>
                <span class="text-[10px] text-[#8E9593]">Signature Orange</span>
              </button>

              <button class="palette-preset-btn p-3 border border-[#232525] rounded-2xl text-left hover:border-[#C2A37D] transition-colors cursor-pointer bg-[#141515]" data-accent="#C2A37D">
                <div class="flex items-center gap-2 mb-1">
                  <span class="w-4 h-4 rounded-full" style="background: #C2A37D;"></span>
                  <span class="font-bold text-white text-xs">Champagne</span>
                </div>
                <span class="text-[10px] text-[#8E9593]">Warm Bronze</span>
              </button>

              <button class="palette-preset-btn p-3 border border-[#232525] rounded-2xl text-left hover:border-[#00E5FF] transition-colors cursor-pointer bg-[#141515]" data-accent="#00E5FF">
                <div class="flex items-center gap-2 mb-1">
                  <span class="w-4 h-4 rounded-full" style="background: #00E5FF;"></span>
                  <span class="font-bold text-white text-xs">Cyber Cyan</span>
                </div>
                <span class="text-[10px] text-[#8E9593]">High-Tech Blue</span>
              </button>

              <button class="palette-preset-btn p-3 border border-[#232525] rounded-2xl text-left hover:border-[#10B981] transition-colors cursor-pointer bg-[#141515]" data-accent="#10B981">
                <div class="flex items-center gap-2 mb-1">
                  <span class="w-4 h-4 rounded-full" style="background: #10B981;"></span>
                  <span class="font-bold text-white text-xs">Emerald</span>
                </div>
                <span class="text-[10px] text-[#8E9593]">Italian Forest</span>
              </button>
            </div>
          </div>

          <!-- CUSTOM ACCENT COLOR PICKER -->
          <div class="pt-2">
            <label class="block text-[11px] uppercase tracking-wider font-semibold text-[#8E9593] mb-1">
              Custom Accent Color
            </label>
            <div class="flex items-center gap-3 border border-[#232525] rounded-xl p-2 bg-[#161717]">
              <input type="color" id="cust-color-accent" value="${appState.accentColor}" class="w-8 h-8 border-0 cursor-pointer rounded-lg bg-transparent">
              <span class="text-xs font-mono font-bold text-white" id="cust-hex-accent">${appState.accentColor}</span>
            </div>
          </div>

        </div>

        <!-- FOOTER ACTIONS -->
        <div class="p-6 bg-[#141515] border-t border-white/5 flex items-center justify-between gap-3">
          <button id="cust-reset-btn" type="button" class="text-xs font-semibold text-[#8E9593] hover:text-white underline cursor-pointer">
            Reset Defaults
          </button>
          <button id="cust-apply-btn" type="button" class="px-6 py-2.5 bg-[#FF531F] hover:bg-[#E04212] text-black text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg hover:scale-105">
            Apply Live Changes
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initCustomizerEvents() {
  const overlay = document.getElementById('customizer-overlay');
  const closeBtn = document.getElementById('customizer-close-btn');
  const applyBtn = document.getElementById('cust-apply-btn');
  const resetBtn = document.getElementById('cust-reset-btn');

  const nameInput = document.getElementById('cust-studio-name');
  const cityInput = document.getElementById('cust-studio-city');
  const accInput = document.getElementById('cust-color-accent');

  if (closeBtn) {
    closeBtn.onclick = () => appState.toggleCustomizer();
  }

  if (overlay) {
    overlay.onclick = (e) => {
      if (e.target === overlay) appState.toggleCustomizer();
    };
  }

  if (accInput) {
    accInput.oninput = (e) => {
      document.getElementById('cust-hex-accent').innerText = e.target.value;
      appState.accentColor = e.target.value;
      appState.applyColors();
    };
  }

  document.querySelectorAll('.palette-preset-btn').forEach(btn => {
    btn.onclick = () => {
      const a = btn.getAttribute('data-accent');
      if (accInput) accInput.value = a;
      document.getElementById('cust-hex-accent').innerText = a;
      appState.accentColor = a;
      appState.applyColors();
    };
  });

  if (applyBtn) {
    applyBtn.onclick = () => {
      appState.updateStudio(
        nameInput?.value.trim() || siteConfig.studio.name,
        cityInput?.value.trim() || siteConfig.studio.city,
        "#FFFFFF",
        accInput?.value || siteConfig.colors.accent
      );
      appState.toggleCustomizer();
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      appState.resetConfig();
      appState.toggleCustomizer();
    };
  }
}
