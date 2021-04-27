import { addPlant } from "./field.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";




export const plantSeeds = (yearlyPlan) => {
     yearlyPlan = []
  for (const row of yearlyPlan) {
    for (const plot of row) {
      if (plot === "Asparagus") {
        const asparagusSeed = createAsparagus();
        addPlant(asparagusSeed);
      }
      else if (plot === "Corn") {
        const cornSeed = createCorn();
        addPlant(cornSeed);
      }
      else if (plot === "Potato") {
        const potatoSeed = createPotato();
        addPlant(potatoSeed);
      }
      else if (plot === "Soybean") {
        const soybeanSeed = createSoybean();
        addPlant(soybeanSeed);
      }
      else if (plot === "Sunflower") {
        const sunflowerSeed = createSunflower();
        addPlant(sunflowerSeed);
      }
      else if (plot === "Wheat") {
        const wheatSeed = createWheat();
        addPlant(wheatSeed);
      }
    }
  }
};
