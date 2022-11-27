function digital_root(n) {
    let summ = 0
    let arr = ('' + n).split('')
    for (let i = 0; i < arr.length; i++) {
        summ += Number(arr[i])
        if (String(summ).length > 1) {
            let newArr = ('' + summ).split('')
            let newSumm = 0
            for (let i = 0; i < newArr.length; i++) {
                newSumm += Number(newArr[i])
                summ = newSumm
            }
        }
    }
    return summ
}