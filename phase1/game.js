const player = require('./players');

class Game {
    constructor() {
        this.players = [];
        this.round = 0;
        this.currentNum = undefined;
        this.tournament = false;
        this.current2Players = [];
    }

    playTournament() {
        this.tournament = true
    }

    setPlayer(name) {
        const newPlayer = new player(name);
        this.players.push(newPlayer)
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
        this.players[0].wins += 1;
        return 'even'
    }

    oddNumber() {
        this.players[1].wins += 1;
        return 'odd'
    }

    checkWins() {
        if (this.players[0].wins === 3) {
            return 1
        } else if (this.players[1].wins === 3) {
            return 2
        }
        return false
    } 

}

module.exports = Game