function solution(year) {
    century = (year/100)
    if (Number.isInteger(century)) {
        return century
    } else {
        return Math.trunc(century +1)
    }
}
