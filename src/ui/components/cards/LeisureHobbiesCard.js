import { AgentCard } from "../AgentCard.js";

export class LeisureHobbiesCard extends AgentCard {
  constructor() {
    super({
      id: "leisure_hobbies",
      name: "PLAY",
      specialization: "Досуг и хобби",
      status: "Idle",
      task: "Подбор восстановления и игры",
      load: "CPU 11%",
      cta: "OPEN PLAY",
      accent: "#a855f7",
      extraHtml: '<p class="agent-kpi" data-slot="mood">SPARK 0.8</p>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <polygon points="32,20 64,40 32,60" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="24" cy="40" r="8" fill="none" stroke="currentColor" stroke-width="1.4"/>
        </svg>`,
    });
    this.el.classList.add("card-leisure-hobbies");
  }
}
