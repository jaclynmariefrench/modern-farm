let growingField = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed) === true)
    for (const corn of seed) {
      growingField.push(corn);
    }
  else {
    growingField.push(seed);
  }
  return growingField;
};

let plantCopy = [];

export const usePlants = () => {
  plantCopy = growingField.slice();
  return plantCopy;
};
