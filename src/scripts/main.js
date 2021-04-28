import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js"
import { havestPlants } from "./harvester.js";
import { plantSeeds } from "./tractor.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { Catalog } from "./catalog.js";

// STEP 1
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// STEP 2
const what = plantSeeds(yearlyPlan);
console.log(what)


// STEP 3
// const plantsUse = usePlants();
// console.log(plantsUse)


// STEP 4
// const harvest = havestPlants(plantsUse)
// console.log(harvest)


// STEP 5
// const catalogHTML = Catalog(harvest)
// console.log(catalogHTML)


// STEP 6
// const mainContainer = document.querySelector(".container");


// STEP 7
// const applicationHTML = `${catalogHTML}`;


// STEP 8
// mainContainer.innerHTML = applicationHTML;




















// WALKING THROUGH THE PROGRAM
// Step 1
// console.log(yearlyPlan)

// Step 2
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// Step 3
// const used = []
// addPlant(used)
// console.log(used) 
// PRODUCED AN EMPTY ARRAY

// Step 4
// plantSeeds(yearlyPlan)
// const plants = usePlants()
// console.log(plants)
























