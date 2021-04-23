import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

const plant = plantSeeds()
const growingField = usePlants()

console.log(plant)


