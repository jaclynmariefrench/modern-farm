console.log("Welcome to the main module")

import {createPlan} from "../scripts/plan.js";
import {createAsparagus} from "./seeds/asparagus";

const yearlyPlan = createPlan()

console.log(yearlyPlan)

const thisVeg = createAsparagus()

console.log(thisVeg)
