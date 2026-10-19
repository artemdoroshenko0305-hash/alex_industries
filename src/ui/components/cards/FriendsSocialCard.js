import { AgentCard } from "../AgentCard.js";

export class FriendsSocialCard extends AgentCard {
  constructor() {
    super({
      id: "friends_social",
      name: "CIRCLE",
      specialization: "Друзья и социальная жизнь",
      status: "Online",
      task: "Карта связей и ритуалов круга",
      load: "NET 39%",
      cta: "OPEN CIRCLE",
      accent: "#38bdf8",
      extraHtml: '<p class="agent-kpi" data-slot="nodes">NODES 12</p>',
      silhouette: `
        <svg viewBox="0 0 80 80" class="silhouette-svg">
          <circle cx="40" cy="22" r="7" fill="currentColor"/>
          <circle cx="20" cy="50" r="7" fill="currentColor"/>
          <circle cx="60" cy="50" r="7" fill="currentColor"/>
          <path d="M40 22 L20 50 L60 50 Z" fill="none" stroke="currentColor" stroke-width="1.2"/>
        </svg>`,
    });
    this.el.classList.add("card-friends-social");
  }
}
