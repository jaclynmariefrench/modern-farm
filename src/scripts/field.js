const growingField = [];

export const addPlant = (seed) => {
     growingField.push(seed);
     return growingField;
    }
  
let plantCopy = []

export const usePlants = () => {
  plantCopy = growingField.slice()
  return plantCopy;
};












