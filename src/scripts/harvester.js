import { plantSeeds } from "./tractor.js";

const seeds = plantSeeds();

export const havestPlants = (seed) => {
  seeds = [];

  for (const seed of seeds) {
      console.log(seed.output)
  }
  return seed;
};
