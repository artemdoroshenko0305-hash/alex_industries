import { AgentCard } from "../AgentCard.js";

export class PersonalGrowthCard extends AgentCard {
  constructor() {
    super({
      id: "personal_growth",
      name: "ASCENT",
      specialization: "Личностный рост",
      status: "Online",
      task: "Разбор привычек и траектории роста",
      load: "CPU 44%",
      cta: "OPEN ASCENT",
      accent: "#00e5ff",
      extraHtml: '<p class="agent-kpi" data-slot="level">LVL 7</p>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <path d="M16 64 H32 V50 H46 V36 H60 V22" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <path d="M52 22 H60 V30" fill="none" stroke="currentColor" stroke-width="1.8"/>
        </svg>`,
    });
    this.el.classList.add("card-personal-growth");
  }
}
