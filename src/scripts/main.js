import {createPlan} from "../scripts/plan.js";
import {createAsparagus} from "../scripts/seeds/asparagus.js";
import {createCorn} from "../scripts/seeds/corn.js"
import {createPotato} from "../scripts/seeds/potato.js"
import {createSoybean} from "../scripts/seeds/soybean.js"
import {createSunflower} from "../scripts/seeds/sunflower.js"
import {createWheat} from "../scripts/seeds/wheat.js"
import { addPlant, usePlants } from "./field.js";

const yearlyPlan = createPlan()
// console.log("Welcome to the main module")
// console.log(yearlyPlan)

const seeds = {
//  add keys and value
    type: "Strawberries",
    height: 2,
    output: 5,
}

addPlant(seeds)

const growingField = usePlants()
console.log(growingField)


// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const corny = createCorn()
// console.log(corny)

// const pot = createPotato()
// console.log(pot) 

// const bean = createSoybean()
// console.log(bean) 

// const flower = createSunflower()
// console.log(flower)

// const flour = createWheat()
// console.log(flour)
