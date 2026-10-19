import { MainPage } from "./components/MainPage.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  new MainPage(root);
});
