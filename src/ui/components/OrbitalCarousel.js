const ORBIT_PERIOD_MS = 120_000;

export class OrbitalCarousel {
  constructor({ stage, agents, onLaunch }) {
    this.stage = stage;
    this.agents = agents;
    this.onLaunch = onLaunch;
    this.focusIndex = 0;
    this.drift = 0;
    this.snapping = false;
    this.lastTs = 0;
    this.pointer = null;
    this.prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.stage.classList.add("orbit-stage");
    this.agents.forEach((card) => {
      this.stage.appendChild(card.el);
      card.el.addEventListener("click", (event) => this.onCardClick(card, event));
    });

    this.stage.addEventListener("wheel", (event) => {
      event.preventDefault();
      this.nudge(event.deltaY > 0 ? 1 : -1);
    }, { passive: false });

    this.stage.addEventListener("pointerdown", (event) => {
      if (event.target.closest(".card-cta")) return;
      this.pointer = { id: event.pointerId, x: event.clientX, moved: false };
      this.stage.setPointerCapture(event.pointerId);
    });
    this.stage.addEventListener("pointermove", (event) => {
      if (!this.pointer || event.pointerId !== this.pointer.id) return;
      const dx = event.clientX - this.pointer.x;
      if (Math.abs(dx) > 36 && !this.pointer.moved) {
        this.pointer.moved = true;
        this.nudge(dx < 0 ? 1 : -1);
        this.pointer.x = event.clientX;
      }
    });
    this.stage.addEventListener("pointerup", () => {
      this.pointer = null;
    });

    window.addEventListener("keydown", (event) => {
      if (event.target.matches("input, textarea")) return;
      if (event.key === "ArrowRight") this.nudge(1);
      if (event.key === "ArrowLeft") this.nudge(-1);
      if (event.key === "Enter" || event.key === " ") {
        if (document.activeElement?.classList.contains("agent-card") || event.target === document.body) {
          event.preventDefault();
          this.launchActive();
        }
      }
    });

    window.addEventListener("resize", () => this.layout(true));
    this.layout(true);
    requestAnimationFrame((ts) => this.tick(ts));
  }

  get active() {
    return this.agents[this.focusIndex];
  }

  onCardClick(card, event) {
    const index = this.agents.indexOf(card);
    if (index !== this.focusIndex) {
      this.setFocus(index, true);
      return;
    }
    if (event.target.closest(".card-cta") || card.el.classList.contains("is-center")) {
      this.launchActive();
    }
  }

  launchActive() {
    this.stage.classList.remove("pulse-wave");
    void this.stage.offsetWidth;
    this.stage.classList.add("pulse-wave");
    this.onLaunch?.(this.active);
  }

  nudge(step) {
    const next = (this.focusIndex + step + this.agents.length) % this.agents.length;
    this.setFocus(next, true);
  }

  setFocus(index, snap) {
    if (index === this.focusIndex) return;
    this.focusIndex = index;
    this.snapping = snap;
    this.layout(false);
    window.setTimeout(() => {
      this.snapping = false;
    }, 620);
  }

  tick(ts) {
    if (!this.lastTs) this.lastTs = ts;
    const dt = ts - this.lastTs;
    this.lastTs = ts;
    if (!this.prefersReduced) {
      this.drift = (this.drift + (360 * dt) / ORBIT_PERIOD_MS) % 360;
      const mode = getComputedStyle(document.documentElement).getPropertyValue("--orbit-mode").trim();
      if (mode === "steps") {
        this.drift = Math.round(this.drift / 45) * 45;
      }
    }
    this.layout(false);
    requestAnimationFrame((next) => this.tick(next));
  }

  layout(immediate) {
    const rect = this.stage.getBoundingClientRect();
    const rx = Math.max(rect.width * 0.36, 160);
    const ry = Math.max(rect.height * 0.32, 120);
    const parallax = getComputedStyle(document.documentElement).getPropertyValue("--orbit-mode").trim() === "parallax";
    const satellites = this.agents.filter((_, i) => i !== this.focusIndex);

    this.stage.classList.toggle("is-snapping", this.snapping && !immediate);

    this.agents.forEach((card, index) => {
      const isCenter = index === this.focusIndex;
      card.setCenter(isCenter);
      if (isCenter) {
        const centerScale = card.hovered ? 1.1 : 1;
        card.el.style.transform = `translate3d(-50%, -50%, 0) scale(${centerScale})`;
        card.el.style.zIndex = "40";
        card.el.style.opacity = "1";
        return;
      }
      const satIndex = satellites.indexOf(card);
      const angle = ((satIndex * 360) / satellites.length + this.drift) * (Math.PI / 180);
      const x = Math.cos(angle) * rx;
      const y = Math.sin(angle) * ry;
      const depth = (Math.sin(angle) + 1) / 2;
      const tilt = Math.sin(angle) * (parallax ? 16 : 10);
      const scale = (0.68 + depth * 0.1) * (card.hovered ? 1.1 : 1);
      const driftY = parallax ? Math.cos(angle) * 8 : 0;
      card.el.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y + driftY}px), 0) rotateZ(${tilt}deg) scale(${scale})`;
      card.el.style.zIndex = String(card.hovered ? 60 : 4 + Math.round(depth * 20));
      card.el.style.opacity = String(0.72 + depth * 0.28);
    });
  }
}
