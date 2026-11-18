import { siteConfig } from '../config/siteConfig.js';
import { appState } from '../utils/state.js';
import { renderIcon } from '../utils/icons.js';

export function renderAboutPage() {
  return `
    <div class="pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-5 sm:px-8 space-y-24">
      
      <!-- HERO -->
      <div class="space-y-6 border-b border-[var(--color-border)] pb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
          <span>About Alex Graham</span>
          <span>•</span>
          <span class="text-[var(--color-accent)] font-bold">Design & Strategy</span>
        </div>
        <h1 class="font-heading text-5xl sm:text-7xl lg:text-9xl font-black text-[var(--color-text)] tracking-tight leading-[0.88] uppercase">
          Alex Graham —
        </h1>
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 font-mono text-xs sm:text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
          <div class="text-[var(--color-text)] font-bold">// ${siteConfig.studio.roles[0]} & ${siteConfig.studio.roles[1]}</div>
          <div>// Based in ${siteConfig.studio.city} & Available Worldwide</div>
        </div>
      </div>

      <!-- STORY & IMAGE -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-6 rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl">
          <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85" alt="Alex Graham Atelier" class="w-full h-full object-cover">
        </div>
        
        <div class="lg:col-span-6 space-y-8">
          <div class="space-y-4">
            <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">// Philosophy</span>
            <h2 class="font-heading text-3xl sm:text-5xl text-[var(--color-text)] uppercase font-black leading-tight">
              Design Systems That Scale With Ambition.
            </h2>
            <p class="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Bringing your vision to life quickly and efficiently—whether it's branding, apps, or websites—I've got it covered, delivering smooth and effective solutions from start to finish.
            </p>
            <p class="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
              Not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.
            </p>
          </div>

          <div class="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl space-y-3 text-xs font-mono">
            <div class="flex items-center gap-2 text-[var(--color-text)] font-bold">
              <span class="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
              <span>Collaborative Process & Fast Turnaround</span>
            </div>
            <p class="text-[var(--color-text-muted)] leading-relaxed">
              Every project is executed in tight, iterative sprints with weekly deliverables, live prototypes in Figma & Framer, and production-ready code handoffs.
            </p>
          </div>

          <div class="flex flex-wrap gap-4 pt-2">
            <a href="#contact" class="px-8 py-4 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-black text-xs font-bold font-mono uppercase tracking-wider transition-all shadow-lg hover:scale-105">
              Let's Talk
            </a>
            <a href="#projects" class="px-8 py-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] text-xs font-bold font-mono uppercase tracking-wider transition-all">
              Explore Works
            </a>
          </div>
        </div>
      </div>

      <!-- RECOGNITION AND AWARDS (Alexfolio) -->
      <div class="space-y-8">
        <div class="border-t border-[var(--color-border)] pt-8 flex items-center justify-between">
          <span class="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] font-bold">
            // Recognition and Awards
          </span>
          <span class="text-xs font-mono text-[var(--color-text-muted)]">Verified Industry Honors</span>
        </div>

        <div class="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)]">
          ${siteConfig.awards.map(a => `
            <div class="py-5 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm font-mono group hover:bg-[var(--color-surface)] px-3 -mx-3 rounded-lg transition-colors">
              <div class="flex items-center gap-4 sm:gap-6">
                <span class="text-xs text-[var(--color-accent)] font-bold">${a.num}</span>
                <span class="font-heading text-lg sm:text-xl font-bold uppercase text-[var(--color-text)]">${a.project}</span>
              </div>
              
              <div class="flex items-center justify-between sm:justify-end gap-6 text-xs text-[var(--color-text-muted)]">
                <span class="text-[var(--color-text)] font-medium">${a.award}</span>
                <span class="px-2 py-0.5 rounded bg-[var(--color-border)] text-[var(--color-text)] font-semibold">${a.platform}</span>
                <span>(${a.year})</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

export function initAboutPageEvents() {
  // Handled
}
