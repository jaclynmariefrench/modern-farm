const harvestArray = [];

export const harvestPlants = (plantPlanted) => {
  for (const plant of plantPlanted) {
    if (Array.isArray(plant) === true) {
      for (const corn of plant) {
        for (let i = 0; i < corn.output/2; i++) {
        harvestArray.push(corn);
      }
    }
    }
    for (let i = 0; i <plant.output; i++) {
      harvestArray.push(plant);
    }
  }
  return harvestArray;
};


















