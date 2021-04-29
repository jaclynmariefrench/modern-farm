const growingField = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    // It's corn and knows because it's the only array.
    for (const corn of seed) {
      growingField.push(corn);
    }
  } else {
    growingField.push(seed);
    
  }
  return growingField;
};

export const usePlants = () => {
  return growingField;
};
