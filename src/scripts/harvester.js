const havestArray = [];

export const havestPlants = (plantPlanted) => {
  for (const plant of plantPlanted) {
    if (plant.type === "Corn") {
      for (const corn of plantPlanted) {
        const cornPlant = corn.output / 2;
        havestArray.push(cornPlant);
      }
    } else {
      const plants = plant.output;
      havestArray.push(plants);
    }
  }
  return plantPlanted;
};
