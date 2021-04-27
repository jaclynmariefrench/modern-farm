import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js"
import { havestPlants } from "./harvester.js";
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)

const fieldSeeds = usePlants()


// const havested = usePlants()

console.log(fieldSeeds)



