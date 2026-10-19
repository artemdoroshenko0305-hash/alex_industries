import { AgentCard } from "../AgentCard.js";

export class SpiritualityCard extends AgentCard {
  constructor() {
    super({
      id: "spirituality",
      name: "AETHER",
      specialization: "Духовность",
      status: "Idle",
      task: "Удержание смыслового контура",
      load: "CPU 9%",
      cta: "OPEN AETHER",
      accent: "#c084fc",
      extraHtml: '<div class="mandala-dot" data-slot="stillness"></div>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <circle cx="40" cy="40" r="26" fill="none" stroke="currentColor" stroke-width="1"/>
          <circle cx="40" cy="40" r="16" fill="none" stroke="currentColor" stroke-width="1"/>
          <circle cx="40" cy="40" r="4" fill="currentColor"/>
          <path d="M40 10 V22 M40 58 V70 M10 40 H22 M58 40 H70" stroke="currentColor" stroke-width="1"/>
        </svg>`,
    });
    this.el.classList.add("card-spirituality");
  }
}
