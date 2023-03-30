const solution = (inputArray) => {
  let highest = Number.NEGATIVE_INFINITY;

  inputArray.forEach((number, index, array) => {
    const nextNumber = array[index + 1];
    const product = number * nextNumber;

    if (product >= highest) {
      highest = product;
    }
  });

  return highest;
};

const inputArray = [3, 6, -2, -5, 7, 3];

const solution2 = (inputArray) => {
  return inputArray.reduce((acc, number, index, array) => {
    const nextNumber = array[index + 1];
    const product = number * nextNumber;

    if (product >= acc) {
      acc = product;
    }
    return acc;
  }, Number.NEGATIVE_INFINITY);
};
