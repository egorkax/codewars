function isValidWalk(walk) {
    if (walk.length != 10) {
        return false;
    }
    let x = 0;
    let y = 0;
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
            y++;
        }
        if (walk[i] === 's') {
            y--;
        }
        if (walk[i] === 'e') {
            x++;
        }
        if (walk[i] === 'w') {
            x--;
        }
    }
    return x === 0 && y === 0;
}