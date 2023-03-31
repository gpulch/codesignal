const solution = (statues) => {
    const sorted = statues.sort((a, b) => a-b)
    const mini = sorted[0]
    const maxi = sorted.at(-1)

    return maxi - mini - sorted.length + 1
}
