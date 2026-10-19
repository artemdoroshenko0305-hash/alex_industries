import { THEMES } from "../data/themes.js";
import { createAgents } from "../data/createAgents.js";
import { OrbitalCarousel } from "./OrbitalCarousel.js";
import { ThemeDock } from "./ThemeDock.js";

const STORAGE_KEY = "alex-industries-ui-theme";

export class MainPage {
  constructor(root) {
    this.root = root;
    this.themeId = this.readTheme();
    this.mount();
  }

  readTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES.some((theme) => theme.id === saved)) return saved;
    return "1";
  }

  mount() {
    this.root.innerHTML = `
      <div class="app-shell">
        <header class="hub-header">
          <p class="hub-kicker"></p>
          <h1 class="hub-title"></h1>
          <label class="thought-dump">
            <span class="thought-prompt" aria-hidden="true">&gt;</span>
            <input class="thought-input" type="text" name="thought" autocomplete="off" />
          </label>
        </header>
        <section class="orbit-stage" aria-label="Орбита ИИ-агентов"></section>
        <div class="workspace-layer" hidden>
          <div class="workspace-panel">
            <p class="workspace-kicker">AGENT DESK</p>
            <h2 class="workspace-title"></h2>
            <p class="workspace-copy">Полноценное рабочее пространство агента ещё не подключено. Импульс запуска принят.</p>
            <button class="workspace-close" type="button">Вернуться на орбиту</button>
          </div>
        </div>
        <nav class="theme-dock"></nav>
      </div>
    `;

    this.titleEl = this.root.querySelector(".hub-title");
    this.kickerEl = this.root.querySelector(".hub-kicker");
    this.inputEl = this.root.querySelector(".thought-input");
    this.workspace = this.root.querySelector(".workspace-layer");
    this.workspaceTitle = this.root.querySelector(".workspace-title");
    this.root.querySelector(".workspace-close").addEventListener("click", () => this.closeWorkspace());
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") this.closeWorkspace();
    });

    this.agents = createAgents();
    this.carousel = new OrbitalCarousel({
      stage: this.root.querySelector(".orbit-stage"),
      agents: this.agents,
      onLaunch: (agent) => this.openWorkspace(agent),
    });
    this.dock = new ThemeDock({
      host: this.root.querySelector(".theme-dock"),
      currentId: this.themeId,
      onChange: (id) => this.setTheme(id),
    });

    this.applyTheme(this.themeId, { animate: false });
  }

  setTheme(id) {
    if (id === this.themeId) return;
    this.themeId = id;
    localStorage.setItem(STORAGE_KEY, id);
    this.applyTheme(id, { animate: true });
    this.dock.setActive(id);
  }

  applyTheme(id, { animate }) {
    const theme = THEMES.find((item) => item.id === id) ?? THEMES[0];
    const root = document.documentElement;
    if (animate) {
      root.classList.add("theme-crossfade");
      window.setTimeout(() => root.classList.remove("theme-crossfade"), 220);
    }
    root.dataset.theme = theme.id;
    this.titleEl.textContent = theme.title;
    this.kickerEl.textContent = theme.subtitle;
    this.inputEl.placeholder = theme.placeholder;
    document.title = `${theme.name} · Alex Industries`;
  }

  openWorkspace(agent) {
    this.workspace.hidden = false;
    this.workspaceTitle.textContent = `${agent.data.name} — ${agent.data.specialization}`;
    this.root.querySelector(".workspace-close").focus();
  }

  closeWorkspace() {
    this.workspace.hidden = true;
  }
}
