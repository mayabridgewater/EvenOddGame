const Game = require('./game');
const game = new Game();
const readline = require('readline-sync');

function play() {
    const user1 = readline.question('Player 1, please enter name ');
    const user2 = readline.question('Player 2, please enter name ');
    game.setPlayers(user1, user2);
    while (game.round < 5) {
        const start = game.startGame();
        if (start === 'even') {
            console.log(`Round #${game.round}, random # is ${game.currentNum}, ${game.player1.name} scored!`);
            console.log(`Status: ${game.player1.name} ${game.player1.wins},  ${game.player2.name} ${game.player2.wins}`);
            const winner = game.checkWins();
            if (winner === 1) {
                console.log(`${game.player1.name} wins!`)
                return
            }
        } else {
            console.log(`Round #${game.round}, random # is ${game.currentNum}, ${game.player2.name} scored!`);
            console.log(`Status: ${game.player1.name} ${game.player1.wins},  ${game.player2.name} ${game.player2.wins}`);
            const winner = game.checkWins();
            if (winner === 2) {
                console.log(`${game.player2.name} wins!`);
                return
            }
        }
    }
    console.log('No winners');
    return false
}

play()

