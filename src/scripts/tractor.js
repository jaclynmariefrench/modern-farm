import { usePlants } from "./field.js"
import { createPlan } from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const year = createPlan()

export const plantSeeds = (year) => {
    for(const row of year) {
        for (const plot of row) {
            if (plot === "Asparagus") {
                const asparagusSeed = createAsparagus()
                usePlants(asparagusSeed)
            } else if (plot === "Corn") {
                const cornSeed = createCorn()
                usePlants(cornSeed)
            } else if (plot === "Potato") {
                const potatoSeed = createPotato()
                usePlants(potatoSeed)
            } else if (plot === "Soybean") {
                const soybeanSeed = createSoybean()
                usePlants(soybeanSeed)
            } else if (plot === "Sunflower") {
                const sunflowerSeed = createSunflower()
                usePlants(sunflowerSeed)
            } else if (plot === "Wheat") {
                const wheatSeed = createWheat()
                usePlants(wheatSeed)
            }
        }
    }
}
