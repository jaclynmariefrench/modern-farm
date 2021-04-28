import { usePlants } from "./field.js";

const plantArray = usePlants()

export const havestPlants = (seed) => {

  for (const seed of plantArray) {
      if (plant.type === "Corn") {
        const cornPlant = seed.output/2 
        cornPlant.push(seed)
      } else {
        const plants = seed.output
        plants.push(seed)
      }
  }
return plantArray
};

