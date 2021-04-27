import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js"
import { havestPlants } from "./harvester.js";
import { plantSeeds } from "./tractor.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { Catalog } from "./catalog.js";


const yearlyPlan = createPlan()

Catalog(yearlyPlan)



// WALKING THROUGH THE PROGRAM
// Step 1
// console.log(yearlyPlan)

// Step 2
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// Step 3
// let seed = []
// addPlant(seed)
// const used = usePlants()
// console.log(used) PRODUCED AN EMPTY ARRAY

// Step 4
// plantSeeds(yearlyPlan)
// const plants = usePlants()
// console.log(plants)
























