import { renderIcon } from '../utils/icons.js';
import { appState } from '../utils/state.js';

export function renderFloorPlanViewer(project) {
  const hotspots = project.hotspots || [
    { id: "h1", x: "32%", y: "45%", label: "Main Living Salon", desc: "Panoramic floor-to-ceiling glass exposure" },
    { id: "h2", x: "65%", y: "55%", label: "Monolithic Kitchen Island", desc: "Bespoke Calacatta marble & concealed Gaggenau joinery" },
    { id: "h3", x: "78%", y: "28%", label: "Primary Suite Retreat", desc: "Custom slatted oak partition & morning sun ingress" }
  ];

  return `
    <div class="framer-card rounded-3xl p-6 sm:p-8 space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 gap-2">
        <div class="space-y-1">
          <span class="text-xs uppercase font-mono tracking-widest text-[#FF531F] font-bold flex items-center gap-1.5">
            ${renderIcon('layers', 'w-3.5 h-3.5')}
            <span>Architectural CAD Blueprint</span>
          </span>
          <h4 class="font-display text-3xl text-white uppercase">Interactive Floor Plan & Camera Positions</h4>
        </div>
        <p class="text-xs text-[#8E9593] font-mono">Click numbered camera pin to view angle</p>
      </div>

      <!-- BLUEPRINT CONTAINER WITH HOTSPOTS -->
      <div class="relative w-full aspect-16/9 bg-[#0B0D0F] rounded-2xl overflow-hidden border border-[#212529] shadow-inner select-none" id="blueprint-stage">
        
        <!-- BLUEPRINT GRID BACKGROUND -->
        <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#60A5FA 1px, transparent 1px), radial-gradient(#60A5FA 1px, #0B0D0F 1px); background-size: 24px 24px;"></div>
        
        <!-- SCHEMATIC ROOM WALLS -->
        <svg class="absolute inset-0 w-full h-full stroke-blue-400/40 fill-none" stroke-width="1.5" viewBox="0 0 800 450">
          <rect x="60" y="50" width="680" height="350" rx="4" stroke="#60A5FA" stroke-width="2" />
          <line x1="320" y1="50" x2="320" y2="400" stroke-dasharray="4 4" />
          <line x1="560" y1="50" x2="560" y2="240" />
          <line x1="320" y1="240" x2="800" y2="240" stroke-dasharray="2 2" />
          
          <text x="140" y="90" fill="#93C5FD" font-size="11" font-family="monospace">GREAT ROOM / SALON (34' x 22')</text>
          <text x="360" y="90" fill="#93C5FD" font-size="11" font-family="monospace">CHEF'S KITCHEN & DINING</text>
          <text x="590" y="90" fill="#93C5FD" font-size="11" font-family="monospace">PRIMARY SUITE</text>
          <text x="590" y="320" fill="#93C5FD" font-size="11" font-family="monospace">SPA ENSUITE BATH</text>
        </svg>

        <!-- CAMERA HOTSPOTS -->
        ${hotspots.map((spot, idx) => `
          <div class="hotspot-pin absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style="left: ${spot.x}; top: ${spot.y};" data-index="${idx}" data-label="${spot.label}" data-desc="${spot.desc}">
            <div class="relative flex items-center justify-center">
              <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#FF531F] opacity-50"></span>
              <div class="w-8 h-8 rounded-full bg-[#FF531F] text-black border-2 border-white flex items-center justify-center font-bold text-xs shadow-xl group-hover:scale-125 transition-transform font-mono">
                ${idx + 1}
              </div>
            </div>
            
            <!-- POPUP CARD ON HOVER -->
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-52 p-3 bg-[#080909] text-white text-left rounded-xl shadow-2xl border border-white/10 z-30 pointer-events-none">
              <div class="text-[10px] uppercase font-mono text-[#FF531F] font-bold">Angle 0${idx + 1}</div>
              <div class="text-xs font-bold">${spot.label}</div>
              <div class="text-[10px] text-[#8E9593] mt-0.5">${spot.desc}</div>
            </div>
          </div>
        `).join('')}

        <!-- BOTTOM LEGEND BAR -->
        <div class="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-white text-[11px]">
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1.5 font-medium">
              <span class="w-2.5 h-2.5 rounded-full bg-[#FF531F] inline-block"></span>
              <span>Camera Perspective</span>
            </span>
            <span class="text-white/30">|</span>
            <span class="font-mono text-white/70">Scale: 1/4" = 1'-0"</span>
          </div>
          <button id="view-cad-lightbox-btn" class="text-[#FF531F] hover:underline flex items-center gap-1 font-bold">
            ${renderIcon('zoomIn', 'w-3.5 h-3.5')}
            <span>High-Res Blueprint</span>
          </button>
        </div>

      </div>

      <!-- ACTIVE CAMERA PERSPECTIVE CARD -->
      <div id="hotspot-detail-card" class="p-4 bg-[#141515] border border-white/5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span class="text-[10px] uppercase font-mono text-[#FF531F] font-bold">Active Camera Angle</span>
          <h5 class="text-sm font-bold text-white" id="active-spot-title">${hotspots[0].label}</h5>
          <p class="text-xs text-[#8E9593]" id="active-spot-desc">${hotspots[0].desc}</p>
        </div>
        <button id="hotspot-view-render-btn" class="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#FF531F] hover:bg-[#E04212] rounded-full transition-all shrink-0 cursor-pointer shadow-md">
          View 4K Render
        </button>
      </div>

    </div>
  `;
}

export function initFloorPlanEvents(project) {
  const pins = document.querySelectorAll('.hotspot-pin');
  const title = document.getElementById('active-spot-title');
  const desc = document.getElementById('active-spot-desc');
  const viewBtn = document.getElementById('hotspot-view-render-btn');
  const cadBtn = document.getElementById('view-cad-lightbox-btn');

  let activeIndex = 0;

  pins.forEach(pin => {
    pin.onclick = () => {
      activeIndex = parseInt(pin.getAttribute('data-index') || '0');
      const spot = project.hotspots[activeIndex] || project.hotspots[0];
      if (title) title.innerText = spot.label;
      if (desc) desc.innerText = spot.desc;
    };
  });

  if (viewBtn) {
    viewBtn.onclick = () => {
      const img = project.gallery[activeIndex % project.gallery.length] || project.coverImage;
      appState.openLightbox([img], 0, `${project.title} - ${project.hotspots[activeIndex]?.label || 'Perspective'}`);
    };
  }

  if (cadBtn) {
    cadBtn.onclick = () => {
      appState.openLightbox([project.floorPlanImage || project.coverImage], 0, `${project.title} - Architectural CAD Layout`);
    };
  }
}
