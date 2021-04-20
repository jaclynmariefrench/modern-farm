import { addPlant } from "./field"
import {createAsparagus} from "./seeds/asparagus"

export const plantSeeds = (yearlyPlan) => {
    for(const row of yearlyPlan) {
        for (const plot of row) {
            if (plot === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
        }
    }
}

