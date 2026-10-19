import { AgentCard } from "../AgentCard.js";

export class FinanceCard extends AgentCard {
  constructor() {
    super({
      id: "finance",
      name: "LEDGER",
      specialization: "Финансы",
      status: "Idle",
      task: "Сверка резерва и обязательств",
      load: "CPU 22%",
      cta: "OPEN TREASURY",
      accent: "#f59e0b",
      extraHtml: '<p class="agent-kpi" data-slot="liquidity">LIQ STABLE</p>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="40" cy="40" r="14" fill="none" stroke="currentColor" stroke-width="1"/>
          <text x="40" y="45" text-anchor="middle" font-size="16" fill="currentColor">¤</text>
        </svg>`,
    });
    this.el.classList.add("card-finance");
  }
}
