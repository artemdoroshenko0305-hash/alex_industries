import { AgentCard } from "../AgentCard.js";

export class FamilyRelationshipsCard extends AgentCard {
  constructor() {
    super({
      id: "family_relationships",
      name: "HEARTH",
      specialization: "Семья и отношения",
      status: "Idle",
      task: "Удержание поля близкого круга",
      load: "CPU 18%",
      cta: "OPEN HEARTH",
      accent: "#f0c987",
      extraHtml: '<p class="agent-kpi" data-slot="bonds">BONDS 3/5</p>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <circle cx="30" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="50" cy="32" r="10" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M18 58 Q40 72 62 58" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>`,
    });
    this.el.classList.add("card-family-relationships");
  }
}
