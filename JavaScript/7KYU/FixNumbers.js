function isItANum(str) {
    let res = str.replace(/[^\d+]/g, "")
    if (res[0] === '0' && res.length === 11) return res
    else return "Not a phone number"
}