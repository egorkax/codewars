function findUniq(arr) {
    let a = arr[0]
    let b = []
    let c = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) b.push(arr[i])
        if (arr[i] !== a) c.push(arr[i])
    }
    return b.length > c.length ? c[0] : b[0]
}