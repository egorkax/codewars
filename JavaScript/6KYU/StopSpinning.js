function spinWords(string) {
    let res = []
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= 4) {
            res.push(arr[i])
        }
        if (arr[i].length > 4) {
            res.push(arr[i].split('').reverse().join(''))
        }
    }
    return res.join(' ')
}