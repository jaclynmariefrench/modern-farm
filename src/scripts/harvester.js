import { plantSeeds } from "./tractor.js";

const seeds = plantSeeds();

export const havestPlants = (seed) => {
  seeds = [];

  for (const seed of seeds) {
      if (seeds.type === "Corn") {
        const cornPlant = seeds.output/2 
        cornPlant.push(seeds)
      } else {
        const plants = seeds.output
        plants.push(seeds)
      }
  }
return seeds
};

