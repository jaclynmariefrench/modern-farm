const harvestArray = [];

export const harvestPlants = (plantPlanted) => {
  for (const plant of plantPlanted) {
    if (plant.type === "Corn") {
      
        for (let i = 0; i < plant.output/2; i++) {
        // const corns = plant.output
        // const cornHalf = corns * .5
        harvestArray.push(plant);
      }
    }
    else {
    for (let i = 0; i <plant.output; i++) {
      harvestArray.push(plant);
    }
  }
}
  return harvestArray;
};


















