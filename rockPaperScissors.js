function rockPaperScissors(){

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let playerTurn;
    let computerMove;

    const readline = require ('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    
    let recurciveAsyncReadLine = function() {
        readline.question("Player's Move with  (r-rock, p-paper, s-scissors): ", move => {

            playerTurn = move;

            if (playerTurn === 'r' || playerTurn === 'rock') {
                playerTurn = rock;
            } else if (playerTurn === 'p' || playerTurn === 'paper') {
                playerTurn = paper;
            } else if (playerTurn === 's' || playerTurn === 'scissors') {
                playerTurn = scissors;
            } else {
                console.log('Invalid Input. Try Agaiin...');
                recurciveAsyncReadLine();
            }

            let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
            

            switch(computerRandomNumber) {
                case 1: 
                    computerMove = rock;
                    break;
                case 2: 
                    computerMove = paper;
                    break;
                case 3: 
                    computerMove = scissors;
                    break;
            }
               
            console.log(`The computer chooses ${computerMove} \x1b[44m]`);

            if((playerTurn === rock && computerMove === scissors) || 
                (playerTurn === paper && computerMove === rock ) ||
                (playerTurn === scissors && computerMove === paper)) {

                    console.log('\x1b[33m You win! \x1b[44m');
            } else if((computerMove === rock && playerTurn === scissors) ||
                (computerMove === paper && playerTurn === rock) ||
                (computerMove === scissors && playerTurn === paper)) {

                    console.log('\x1b[31m You lose! \x1b[0m');
            } else {

                console.log('This game was a draw!');
            }
        });
    }

    recurciveAsyncReadLine();
}

rockPaperScissors();