import { appState } from '../utils/state.js';
import { siteConfig } from '../config/siteConfig.js';
import { renderIcon } from '../utils/icons.js';

export function renderQuoteModal() {
  if (!appState.isQuoteModalOpen) return '';

  return `
    <div id="quote-modal-overlay" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in">
      <div class="relative w-full max-w-3xl framer-card rounded-3xl bg-[#0D0E0E] border border-[#232525] shadow-2xl overflow-hidden my-6">
        
        <!-- MODAL HEADER -->
        <div class="px-6 py-5 bg-[#141515] text-white flex items-center justify-between border-b border-white/5">
          <div>
            <div class="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF531F] font-bold">
              ${renderIcon('sparkles', 'w-3.5 h-3.5')}
              <span>Instant 3D Render Estimate</span>
            </div>
            <h3 class="font-display text-2xl sm:text-3xl text-white mt-1 uppercase">
              Request Project Quote
            </h3>
          </div>
          <button id="modal-close-btn" class="p-2 text-[#8E9593] hover:text-white rounded-full transition-colors cursor-pointer" aria-label="Close modal">
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
      <div id="${formId}-success-alert" class="hidden p-6 bg-[#161717] border border-[#FF531F] rounded-2xl text-white">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-[#FF531F] text-black flex items-center justify-center shrink-0">
            ${renderIcon('check', 'w-5 h-5')}
          </div>
          <div class="flex-1 space-y-2">
            <h4 class="font-display text-2xl font-bold uppercase text-white">Quote Request Received!</h4>
            <p class="text-xs text-[#8E9593]">
              Thank you. Our architectural visualization director is analyzing your square footage and floor plans. You will receive an itemized quote within 2 hours.
            </p>
            <div class="p-4 bg-[#080909] rounded-xl border border-white/5 text-xs space-y-1 font-mono">
              <div><strong class="text-white">Reference Code:</strong> <span class="text-[#FF531F] font-bold" id="${formId}-ref-code">#AQ-84920</span></div>
              <div><strong class="text-white">Studio:</strong> ${appState.studioName} (${appState.city})</div>
              <div><strong class="text-white">Status:</strong> Under Architectural Review</div>
            </div>
            <div class="pt-2 flex flex-wrap gap-3">
              <a id="${formId}-whatsapp-quote-link" href="#" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#25D366] text-black text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2 shadow-lg">
                ${renderIcon('whatsapp', 'w-4 h-4')}
                <span>Send details to WhatsApp</span>
              </a>
              <button type="button" onclick="location.reload()" class="px-4 py-2 text-xs font-semibold text-[#8E9593] hover:text-white underline">
                Submit Another Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="${formId}-fields" class="space-y-6">
        
        <!-- STEP 1: CONTACT INFO -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              Full Name <span class="text-[#FF531F]">*</span>
            </label>
            <input type="text" name="name" required placeholder="e.g. Alex Morgan" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white placeholder-[#555]">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              Email Address <span class="text-[#FF531F]">*</span>
            </label>
            <input type="email" name="email" required placeholder="alex@studio.com" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white placeholder-[#555]">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              Phone Number <span class="text-[#FF531F]">*</span>
            </label>
            <input type="tel" name="phone" required placeholder="+1 (555) 000-0000" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white placeholder-[#555]">
          </div>
        </div>

        <!-- STEP 2: PROJECT TYPE & SQ FT -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              Project Type <span class="text-[#FF531F]">*</span>
            </label>
            <select name="projectType" id="${formId}-project-type" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white">
              <option value="residential-single">Single Space / Remodel (Living, Bath, Kitchen)</option>
              <option value="residential-full" selected>Full Home / Penthouse (Multi-Room Residence)</option>
              <option value="builder-developer">Builder / Developer Spec Home (Marketing Renders)</option>
              <option value="interior-designer">Interior Designer Client Presentation</option>
              <option value="commercial-hospitality">Commercial, Retail or Flagship</option>
              <option value="animation-walkthrough">Cinematic VR & 3D Walkthrough</option>
            </select>
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-xs uppercase tracking-wider font-semibold text-white">
                Approx. Area in Sq Ft
              </label>
              <span id="${formId}-sqft-display" class="font-mono text-xs font-bold text-[#FF531F]">
                1,850 sq ft
              </span>
            </div>
            <div class="flex items-center gap-3">
              <input type="range" id="${formId}-sqft-slider" min="200" max="10000" step="50" value="1850" class="w-full h-1.5 bg-[#232525] rounded-lg appearance-none cursor-pointer accent-[#FF531F]">
              <input type="number" id="${formId}-sqft-number" min="100" max="50000" value="1850" class="w-24 px-2 py-1 text-xs bg-[#161717] border border-[#232525] rounded-xl text-center text-white font-mono">
            </div>
          </div>
        </div>

        <!-- STEP 3: BUDGET & TIMELINE -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              Budget Range (USD)
            </label>
            <select name="budgetRange" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white">
              <option value="1k-2.5k">$1,000 – $2,500 (1 to 2 rooms)</option>
              <option value="2.5k-5k" selected>$2,500 – $5,000 (Complete apartment / 3-5 rooms)</option>
              <option value="5k-10k">$5,000 – $10,000 (Luxury residence / Full package)</option>
              <option value="10k+">$10,000+ (Large development / Cinematic CGI)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
              Target Turnaround
            </label>
            <select name="turnaround" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white">
              <option value="standard" selected>Standard (3 to 5 business days)</option>
              <option value="express">Express Rush (48 to 72 hours, +20%)</option>
              <option value="flexible">Flexible / Early Planning Stage</option>
            </select>
          </div>
        </div>

        <!-- STEP 4: FLOOR PLAN UPLOAD (DRAG & DROP) -->
        <div>
          <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
            Floor Plan & Reference Files (Auto-Preview)
          </label>
          <div id="${formId}-dropzone" class="border-2 border-dashed border-[#232525] hover:border-[#FF531F] rounded-2xl p-6 text-center bg-[#161717] cursor-pointer transition-colors relative">
            <input type="file" id="${formId}-file-input" multiple accept=".pdf,.dwg,.dxf,.jpg,.png,.zip" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
            <div id="${formId}-dropzone-idle" class="space-y-2 pointer-events-none">
              <div class="mx-auto w-10 h-10 rounded-full bg-white/5 text-[#FF531F] flex items-center justify-center">
                ${renderIcon('upload', 'w-5 h-5')}
              </div>
              <p class="text-xs text-white font-medium">
                Drag & drop floor plans, elevations, or sketches here
              </p>
              <p class="text-[11px] text-[#8E9593]">
                Supports CAD (.dwg, .dxf), PDF, High-Res JPEG, PNG or ZIP (Up to 50MB)
              </p>
            </div>
            <!-- UPLOADED PREVIEW LIST -->
            <div id="${formId}-file-list" class="hidden text-left space-y-2 pt-2"></div>
          </div>
        </div>

        <!-- STEP 5: MESSAGE -->
        <div>
          <label class="block text-xs uppercase tracking-wider font-semibold text-white mb-1.5">
            Project Notes & Specific Requirements
          </label>
          <textarea name="message" rows="3" placeholder="Tell us about your space (ceiling heights, preferred lighting mood, specific furniture brands, target date...)" class="w-full px-3.5 py-2.5 text-xs bg-[#161717] border border-[#232525] rounded-xl focus:outline-none focus:border-[#FF531F] text-white placeholder-[#555]"></textarea>
        </div>

        <!-- ESTIMATE BANNER -->
        <div class="p-4 bg-[#141515] border border-white/5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <div class="text-[11px] uppercase font-mono tracking-wider text-[#8E9593]">Estimated Investment Range:</div>
            <div class="font-display text-2xl font-bold text-white" id="${formId}-cost-preview">$1,850 – $2,400</div>
          </div>
          <div class="text-[11px] text-[#8E9593] sm:text-right font-mono">
            <span>Includes 4K Renders • 3 Revision Rounds • 48h Initial Whitecards</span>
          </div>
        </div>

        <!-- SUBMIT BUTTON -->
        <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button type="submit" id="${formId}-submit-btn" class="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#FF531F] hover:bg-[#E04212] rounded-full transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2 hover:scale-105">
            <span>Submit Quote Request</span>
            ${renderIcon('arrowRight', 'w-4 h-4')}
          </button>
          <p class="text-[11px] text-[#8E9593] text-center sm:text-right font-sans">
            Guaranteed response within 2 hours • Non-disclosure protected
          </p>
        </div>

      </div>
    </form>
  `;
}

export function initQuoteFormEvents(formId = 'modal-form') {
  const form = document.getElementById(formId);
  if (!form) return;

  const slider = document.getElementById(`${formId}-sqft-slider`);
  const numInput = document.getElementById(`${formId}-sqft-number`);
  const display = document.getElementById(`${formId}-sqft-display`);
  const projectType = document.getElementById(`${formId}-project-type`);
  const costPreview = document.getElementById(`${formId}-cost-preview`);

  function updateEstimate() {
    const sqft = parseInt(slider?.value || 1850);
    const type = projectType?.value || 'residential-full';

    let base = 450;
    if (type === 'residential-full') base = 1850;
    if (type === 'builder-developer') base = 3200;
    if (type === 'commercial-hospitality') base = 2800;
    if (type === 'animation-walkthrough') base = 4500;

    const sqftMultiplier = Math.max(1, Math.round(sqft / 1000 * 0.45 * 10) / 10);
    const low = Math.round(base * sqftMultiplier);
    const high = Math.round(low * 1.35);

    if (costPreview) {
      costPreview.innerText = `$${low.toLocaleString()} – $${high.toLocaleString()}`;
    }
  }

  if (slider && numInput && display) {
    slider.oninput = (e) => {
      const val = e.target.value;
      numInput.value = val;
      display.innerText = `${parseInt(val).toLocaleString()} sq ft`;
      updateEstimate();
    };

    numInput.oninput = (e) => {
      const val = e.target.value;
      slider.value = val;
      display.innerText = `${parseInt(val || 0).toLocaleString()} sq ft`;
      updateEstimate();
    };
  }

  if (projectType) {
    projectType.onchange = updateEstimate;
  }

  // File Upload handling
  const fileInput = document.getElementById(`${formId}-file-input`);
  const fileList = document.getElementById(`${formId}-file-list`);
  const dropzoneIdle = document.getElementById(`${formId}-dropzone-idle`);

  if (fileInput && fileList) {
    fileInput.onchange = (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        if (dropzoneIdle) dropzoneIdle.classList.add('hidden');
        fileList.classList.remove('hidden');
        fileList.innerHTML = files.map(f => `
          <div class="flex items-center justify-between p-2.5 bg-[#080909] border border-white/10 rounded-xl text-xs">
            <div class="flex items-center gap-2 overflow-hidden">
              <span class="text-[#FF531F] font-mono">📄</span>
              <span class="truncate font-medium text-white">${f.name}</span>
              <span class="text-[10px] text-[#8E9593]">(${(f.size / 1024 / 1024).toFixed(2)} MB)</span>
            </div>
            <span class="text-[10px] text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full font-medium">Ready</span>
          </div>
        `).join('');
      }
    };
  }

  // Submit handling
  form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'Valued Client';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const type = formData.get('projectType') || 'Interior 3D Renders';
    const sqft = slider?.value || 1850;

    const ref = 'LV-' + Math.floor(10000 + Math.random() * 90000);
    const refCode = document.getElementById(`${formId}-ref-code`);
    if (refCode) refCode.innerText = `#${ref}`;

    // Prepare WhatsApp Link
    const waLink = document.getElementById(`${formId}-whatsapp-quote-link`);
    if (waLink) {
      const msg = `Hi ${appState.studioName}! I just submitted Quote Request #${ref}. Name: ${name}, Project: ${type}, Area: ${sqft} sq ft, Email: ${email}, Phone: ${phone}. Please review my floor plans!`;
      waLink.href = `https://wa.me/${siteConfig.studio.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    }

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
