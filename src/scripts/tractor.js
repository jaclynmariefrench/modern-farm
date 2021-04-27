import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantPlan) => {
  for (const row of plantPlan) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "Asparagus") {
        const asparagusSeed = createAsparagus();
        addPlant(asparagusSeed);
      }
      else if (row[i] === "Corn") {
        const cornSeed = createCorn();
        addPlant(cornSeed);
      }
      else if (row[i] === "Potato") {
        const potatoSeed = createPotato();
        addPlant(potatoSeed);
      }
      else if (row[i] === "Soybean") {
        const soybeanSeed = createSoybean();
        addPlant(soybeanSeed);
      }
      else if (row[i] === "Sunflower") {
        const sunflowerSeed = createSunflower();
        addPlant(sunflowerSeed);
      }
      else {
        const wheatSeed = createWheat();
        addPlant(wheatSeed);
      }
    }
  }
};













