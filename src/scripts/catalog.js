import { havestPlants } from "./harvester.js";

export const Catalog = () => {
  const havestArray = havestPlants();
  let html = "<div>";
  for (const harvest of havestArray) {
    html += `<section class="plant">${havest.type}</section>`;
  }
  html += "</div>";
  return html;
};
