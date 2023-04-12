// array v1 ------------------
const fibo = (n) => {
  const sums = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (i === 1) {
      result = 1;
    } else {
      sums.push(result);
      result = sums[i - 1] + sums[i - 2];
    }
  }
  console.log(sums);
  return result;
};

// array v2 ------------------
const fibonarrino = (n) => {
  const collection = [0, 1];
  let result = 0;

  for (let i = 0; i < n; i++) {
    result = collection[i] + collection[i + 1];
    collection.push(result);
  }

  return collection[n - 1];
};

n = 13;
fibonarrino(n);

// array v3 ------------------
const fibonarrino = (n) => {
  const collection = [0, 1];

  for (let i = 0; i < n; i++) {
    collection.push(collection[i] + collection[i + 1]);
  }
  return collection[n];
};

n = 14;
fibonarrino(n);

// no array v1 ------------------
const fibonarra = (n) => {
  let result = 0;
  let previous = 0;
  let next = 1;

  for (let i = 0; i < n - 1; i++) {
    result = previous + next;
    previous = next;
    next = result;
  }
  return result;
};

n = 8;
fibonarra(n);

// no array v2  ------------------
const fibonarra = (n) => {
  let previous = 0;
  let next = 1;

  for (let i = 0; i < n - 1; i++) {
    next += previous;
    previous = next - previous;
    console.log("previous :", previous, "next :", next);
  }
  return next;
};

n = 18;
fibonarra(n);

// Edouard temp var ------------------
const fibonarro = (n) => {
  let previous = 0;
  let next = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = next + previous;
    previous = next;
    next = temp;
  }
  return next;
};

n = 18;
fibonarro(n);

// reduce ------------------
const test = (a) => {
  const array = new Array(a).fill(null);
  return array.reduce(
    (acc) => {
      if (acc.previous === null) {
        return {
          ...acc,
          previous: 0,
        };
      } else if (acc.last === null) {
        return {
          ...acc,
          last: 1,
        };
      }
      return {
        previous: acc.last,
        last: acc.previous + acc.last,
      };
    },
    { previous: null, last: null }
  ).last;
};

n = 10;
test(n);
