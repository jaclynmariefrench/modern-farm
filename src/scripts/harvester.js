const havestArray = [];

export const havestPlants = (plantPlanted) => {
  for (const plant of plantPlanted) {
    if (plant.type === "Corn") {
      const cornPlant = plant.output/2;
      for (let i = 0; i < cornPlant; i++) {
        havestArray.push(plant);
      }
    } else {
      const plants = plant.output;
      for (let i = 0; i <plants; i++) {
        havestArray.push(plant);
      }
    }
  }
  return plantPlanted;
};
