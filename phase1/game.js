const player = require('./players');

class Game {
    constructor() {
        this.players = [];
        this.round = 0;
        this.currentNum = undefined;
        this.tournament = false;
        this.current2Players = [];
        this.bestOf = undefined
    }

    playTournament() {
        this.tournament = true
    }

    setPlayer(name) {
        const newPlayer = new player(name);
        this.players.push(newPlayer)
    }

    setRounds(num) {
        this.bestOf = num;
    }

    startGame() {
        this.round += 1;
        this.current2Players = [];
        if (this.tournament) {
            let index = 0;
            let i = 0;
            while (i < 2) {
                if (i == 0){
                    index = this.generatePlayer();
                    const cur = this.players[index];
                    this.current2Players.push(cur);
                    i++;
                } else if (i == 1) {
                    const newIndex = this.generatePlayer();
                    if (index === newIndex) {
                        i = 1;
                    } else {
                        const cur = this.players[index];
                        this.current2Players.push(cur);
                        i++;
                    }
                }
            };
            return this.generateNumber()
        } else {
            this.current2Players = this.players;
            return this.generateNumber()
        }
    }

    generatePlayer() {
        return Math.floor(Math.random() * ((this.players.length-1) - 0 + 1)) + 0;
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
        this.current2Players[0].wins += 1;
        return 'even'
    }

    oddNumber() {
        this.current2Players[1].wins += 1;
        return 'odd'
    }

    checkWins() {
        if (this.tournament) {
            if (this.current2Players[0].wins === this.bestOf-2) {
                this.tournament = false;
                return 1
            } else if (this.current2Players[1].wins === this.bestOf-2) {
                this.tournament = false;
                return 2
            }
        } else{
            if (this.current2Players[0].wins === 3) {
                return 1
            } else if (this.current2Players[1].wins === 3) {
                return 2
            }
        }
        return false
    } 

}

module.exports = Game