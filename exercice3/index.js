function solution(inputString) {
    const splitted = inputString.split('');
    const reversed = splitted.reverse();
    const joined = reversed.join('');

    return inputString === joined
}

const betterSolution = (inputString) => inputString === inputString.split('').reverse().join('')
