import { usePlants } from "./field.js";
import { createPlan } from "./plan.js"
import { havestPlants } from "./harvester.js";

createPlan()

const yearlyPlan = createPlan()

const havested = usePlants()

console.log(havested)



