function XO(stry) {
    let resO = 0
    let resX = 0
    const str = stry.toLowerCase().split('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "o") resO += 1
        if (str[i] === "x") resX += 1
    }
    return resO === resX
}