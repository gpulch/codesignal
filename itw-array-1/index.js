const solution = (a) => {
  const numberCounter = {};

  for (let i = 0; i < a.length; i++) {
    const number = a[i];
    const occurences = numberCounter[number];
    if (!occurences) {
      numberCounter[number] = 1;
    } else {
      return number;
    }
  }
  return -1;
};
