function solution(inputString) {
    let splitted = inputString.split('');
    let reversed = splitted.reverse();
    let joined = reversed.join('');

    return inputString == joined ? true : false;
}

function betterSolution(inputString) {
    let factorised = inputString.split('').reverse().join('')

    return inputString == factorised ? true : false;
}