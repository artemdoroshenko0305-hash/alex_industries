import { THEMES } from "../data/themes.js";

export class ThemeDock {
  constructor({ host, currentId, onChange }) {
    this.host = host;
    this.onChange = onChange;
    this.host.className = "theme-dock";
    this.host.setAttribute("role", "toolbar");
    this.host.setAttribute("aria-label", "Переключение UI-стиля");

    THEMES.forEach((theme) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "theme-btn";
      button.dataset.themeId = theme.id;
      button.title = theme.name;
      button.setAttribute("aria-label", theme.name);
      button.innerHTML = `<span class="theme-btn-id">${theme.dock}</span><span class="theme-btn-name">${theme.name}</span>`;
      button.addEventListener("click", () => this.onChange(theme.id));
      this.host.appendChild(button);
    });

    this.setActive(currentId);
  }

  setActive(id) {
    this.host.querySelectorAll(".theme-btn").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.themeId === id);
      button.setAttribute("aria-pressed", String(button.dataset.themeId === id));
    });
  }
}
