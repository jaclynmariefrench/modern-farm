
export const Catalog = (allPlants) => {
  let html = "<p>";
  
  for (const plant of allPlants) {
    html += `<section class="plant">${plant.type}</section>`;
  }

  html += "</p>"
  return html;
};
