const Game = require('./game');
const game = new Game();
const readline = require('readline-sync');

function play() {
    const typeOfGame = readline.question('For regular game enter 1. For tournament enter 2. ');
    if (typeOfGame == 1) {
        for (let i = 1; i < 3; i++)  {
            const user = readline.question(`Player ${i}, please enter name `);
            game.setPlayer(user);
        }
        const player1 = game.players[0];
        const player2 = game.players[1];
        while (game.round < 5) {
            const start = game.startGame();
            if (start === 'even') {
                console.log(`Round #${game.round}, random # is ${game.currentNum}, ${player1.name} scored!`);
                console.log(`Status: ${player1.name} ${player1.wins},  ${player2.name} ${player2.wins}`);
                const winner = game.checkWins();
                if (winner === 1) {
                    console.log(`${player1.name} wins!`)
                    return
                }
            } else {
                console.log(`Round #${game.round}, random # is ${game.currentNum}, ${player2.name} scored!`);
                console.log(`Status: ${player1.name} ${player1.wins},  ${player2.name} ${player2.wins}`);
                const winner = game.checkWins();
                if (winner === 2) {
                    console.log(`${player2.name} wins!`);
                    return
                }
            }
        }
        console.log('No winners');
        return false
    } else {
        game.playTournament();
        const numOfPlayers = readline.question('Please enter how many players between 2-7. ');
        for (let i = 1; i <= numOfPlayers; i++) {
            const user = readline.question(`Player ${i}, please enter name `);
            game.setPlayer(user);
        }
        const rounds = readline.question('Best out of how many? ');
        game.setRounds(rounds);
        while (game.tournament) {
            const start = game.startGame();
            const player1 = game.current2Players[0];
            const player2 = game.current2Players[1];
            if (start === 'even') {
                console.log(`Round #${game.round}, random # is ${game.currentNum}, ${player1.name} scored!`);
                console.log(`Status: ${player1.name} ${player1.wins},  ${player2.name} ${player2.wins}`);
                const winner = game.checkWins();
                if (winner === 1) {
                    console.log(`${player1.name} wins!`)
                    return
                }
            } else {
                console.log(`Round #${game.round}, random # is ${game.currentNum}, ${player2.name} scored!`);
                console.log(`Status: ${player1.name} ${player1.wins},  ${player2.name} ${player2.wins}`);
                const winner = game.checkWins();
                if (winner === 2) {
                    console.log(`${player2.name} wins!`);
                    return
                }
            }
        }
    }
}

play()

