function arrayDiff(a, b) {
    let arrA = a
    let setB = new Set(b)
    let arrB = [...setB]

    for (let i = 0; i < arrB.length; i++) {
        if (arrA.includes(arrB[i])) {
            arrA = arrA.filter(e => e !== arrB[i])
        }
    }
    return arrA
}