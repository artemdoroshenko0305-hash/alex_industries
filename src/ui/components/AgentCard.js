export class AgentCard {
  constructor(data) {
    this.data = {
      status: "Idle",
      task: "Ожидание директивы",
      load: "CPU 0%",
      cta: "LAUNCH AGENT",
      silhouette: "",
      extraHtml: "",
      ...data,
    };
    this.el = document.createElement("article");
    this.el.className = "agent-card";
    this.el.dataset.agent = this.data.id;
    this.el.dataset.status = this.data.status.toLowerCase();
    this.el.tabIndex = 0;
    this.el.setAttribute("role", "button");
    this.el.setAttribute("aria-label", `${this.data.name}, ${this.data.specialization}`);
    this.el.style.setProperty("--agent-accent", this.data.accent || "var(--accent)");
    this.hovered = false;
    this.el.addEventListener("pointerenter", () => {
      this.hovered = true;
    });
    this.el.addEventListener("pointerleave", () => {
      this.hovered = false;
    });
    this.render();
  }

  render() {
    this.el.innerHTML = `
      <div class="card-aura"></div>
      <div class="card-frame">
        <header class="card-status">
          <span class="status-dot" aria-hidden="true"></span>
          <span class="status-label">${this.data.status}</span>
        </header>
        <div class="card-silhouette" aria-hidden="true">${this.data.silhouette}</div>
        <h2 class="card-name">${this.data.name}</h2>
        <p class="card-spec">${this.data.specialization}</p>
        <p class="card-task">${this.data.task}</p>
        <p class="card-load">${this.data.load}</p>
        <div class="card-extra">${this.data.extraHtml}</div>
        <button class="card-cta" type="button">${this.data.cta}</button>
      </div>
    `;
  }

  setCenter(isCenter) {
    this.el.classList.toggle("is-center", isCenter);
    this.el.setAttribute("aria-pressed", String(isCenter));
  }
}
