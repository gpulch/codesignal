function solution(s) {
  const letterCounter = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const occurences = letterCounter[letter];

    if (!occurences) {
      letterCounter[letter] = 1;
    } else {
      letterCounter[letter]++;
    }
  }

  for (letter of s) {
    if (letterCounter[letter] === 1) return letter;
  }
  return "_";
}
