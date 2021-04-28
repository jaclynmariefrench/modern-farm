const growingField = [];

export const addPlant = (seed) => {
    if(Array.isArray(seed)) {
      // Its corn
     for (const corn of seed) {
       growingField.push(corn)
     } 
    }
    
    growingField.push(seed);
    }
  


export const usePlants = () => {
 const plantCopy = growingField.slice()
  return plantCopy;
};












