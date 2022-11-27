function magNumber(info) {
    const arrOfGuns = {'PT92': 17, 'M4A1': 30, 'M16A2': 30, 'PSG1': 5};
    const numOfRoundsInClip = arrOfGuns[info[0]];
    const numOfSpentBullets = info[1] * 3;
    const numOfSpentMagazines = Math.ceil(numOfSpentBullets / numOfRoundsInClip);

    return numOfSpentMagazines;
}