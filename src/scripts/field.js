const growingField = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed) === true) {
    for (const corn of seed) {
      growingField.push(corn);
    }
  } else {
    growingField.push(seed);
  }
  return growingField
};

export const usePlants = () => {
  return growingField;
};

