
export const Catalog = (allPlants) => {
  let html = "";
  
  for (const plant of allPlants) {
    html += `<section class="plant">${plant.type}</section>`;
  }
  return html;
};
