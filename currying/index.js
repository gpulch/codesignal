const hello = {
  myFunction: () => "hello world",
  myFunction2: (a) => () => {
    return a + " super";
  },
};
hello.myFunction();
hello.myFunction2("toto")();

// --------------

const curry = (f) => {
  return function (str) {
    return function () {
      return f(str, " super");
    };
  };
};
const concatenator = (a, b) => {
  return a + b;
};
const myFunction2 = curry(concatenator);

myFunction2("tata")();
