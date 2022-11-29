function duplicateEncode(word) {
    let res = ''
    let w = word.toLowerCase()
    for (let i = 0; i < w.length; i++) {
        if (w.split('').filter(e => e === w[i]).length > 1) res += ')'
        else res += '('
    }
    return res
}