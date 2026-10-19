import { AgentCard } from "../AgentCard.js";

export class MainCompanionCard extends AgentCard {
  constructor() {
    super({
      id: "main_companion",
      name: "ALEX",
      specialization: "Главный компаньон",
      status: "Online",
      task: "Оркестрация восьми сфер жизни",
      load: "CORE 41%",
      cta: "OPEN CORE",
      accent: "#d4af37",
      extraHtml: '<div class="core-ring" data-slot="companion-orbit"></div>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="40" cy="40" r="12" fill="currentColor" opacity="0.35"/>
          <path d="M40 8 L46 32 L72 40 L46 48 L40 72 L34 48 L8 40 L34 32 Z" fill="none" stroke="currentColor" stroke-width="1.2"/>
        </svg>`,
    });
    this.el.classList.add("card-main-companion");
  }
}
