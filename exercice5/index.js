const solution = (n) => (n - 1) * (n - 1) + n * n;

const solution = (n) => {
  const grid = (n * 2 - 1) * (n * 2 - 1);
  const result = Math.floor(grid / 2 + (grid % n));
  return n !== 1 ? result : 1;
};

const solution = (n) => {
  const base = n * 2 - 1;
  let sum = base;

  for (let i = base; i > 1; i -= 2) {
    sum += (i - 2) * 2;
  }
  return sum;
};
