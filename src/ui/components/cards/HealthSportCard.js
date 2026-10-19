import { AgentCard } from "../AgentCard.js";

export class HealthSportCard extends AgentCard {
  constructor() {
    super({
      id: "health_sport",
      name: "VITAL",
      specialization: "Здоровье и спорт",
      status: "Online",
      task: "Мониторинг ритма и восстановления",
      load: "BIO 54%",
      cta: "OPEN VITALS",
      accent: "#30d158",
      extraHtml: '<div class="pulse-line" data-slot="heartbeat"></div>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <path d="M8 40 H24 L30 28 L38 52 L46 22 L54 40 H72" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" opacity="0.35"/>
        </svg>`,
    });
    this.el.classList.add("card-health-sport");
  }
}
