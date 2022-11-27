const rps = (p1, p2) => {
    let a = "scissors"
    let b = "paper"
    let c = "rock"

    if (p1 === p2) return "Draw!"
    if (p1 === a && p2 === b) return "Player 1 won!"
    if (p1 === a && p2 === c) return "Player 2 won!"

    if (p1 === b && p2 === a) return "Player 2 won!"
    if (p1 === b && p2 === c) return "Player 1 won!"


    if (p1 === c && p2 === a) return "Player 1 won!"

    if (p1 === c && p2 === b) return "Player 2 won!"


};