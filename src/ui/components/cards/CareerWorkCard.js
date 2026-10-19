import { AgentCard } from "../AgentCard.js";

export class CareerWorkCard extends AgentCard {
  constructor() {
    super({
      id: "career_work",
      name: "FORGE",
      specialization: "Карьера и работа",
      status: "Online",
      task: "Сборка профессионального контура",
      load: "CPU 67%",
      cta: "LAUNCH FORGE",
      accent: "#ff9f0a",
      extraHtml: '<meter class="agent-meter" min="0" max="100" value="67"></meter>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <rect x="18" y="38" width="44" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M28 38 V28 h24 v10" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M40 18 v10" stroke="currentColor" stroke-width="2"/>
          <path d="M22 64 h36" stroke="currentColor" stroke-width="1.4"/>
        </svg>`,
    });
    this.el.classList.add("card-career-work");
  }
}
