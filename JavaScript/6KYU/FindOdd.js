function findOdd(a) {
    let arr = a
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        let ar = arr.filter(e => e === num)
        if (ar.length % 2 === 0) {
            arr.filter(e !== num)
        } else return num
    }
}