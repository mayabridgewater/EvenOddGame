const player = require('./players');

class Game {
    constructor() {
        this.player1 = null;
        this.player2 = null;
        this.round = 0;
        this.currentNum = undefined;
    }

    setPlayers(name1, name2) {
        this.player1 = new player(name1);
        this.player2 = new player(name2);
    }

    startGame() {
        this.round += 1;
        return this.generateNumber()
    }

    generateNumber() {
        const currentNumber = Math.floor(Math.random() * (13 - (-5) + 1)) + (-5);
        this.currentNum = currentNumber;
        if (currentNumber % 2 === 0) {
            return this.evenNumber()
        } else {
            return this.oddNumber()
        }
    }

    evenNumber() {
        this.player1.wins += 1;
        return 'even'
    }

    oddNumber() {
        this.player2.wins += 1;
        return 'odd'
    }

    checkWins() {
        if (this.player1.wins === 3) {
            return 1
        } else if (this.player2.wins === 3) {
            return 2
        }
        return false
    } 

}

module.exports = Game