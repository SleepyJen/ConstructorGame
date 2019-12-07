var inq = require('inquirer');
var Word = require('./Word');
const color = require('colors');

var movieDatabase = ['The Avengers', 'Cinderella', 'The Little Mermaid', 'Frozen', 'Mulan', 'Mary Poppins',
    'The Lion King', 'Monsters Inc', 'Cars', 'Alice in Wonderland'];
var win = 0;
var lose = 0;
var guessesLeft = 10;
var guessedLetters = [];

function getRandomMovie() {
    let rand = Math.floor(Math.random() * movieDatabase.length);
    var movie = new Word(movieDatabase[rand]);
    console.log(movie.toString());
    inPlay();

    function inPlay() {
        inq.prompt({
            type: 'input',
            message: 'Please enter a letter or number',
            name: 'input'
        }).then(result => {
            let input = result.input;
            if (!guessedLetters.includes(input)) {
                guessedLetters.push(input);
                movie.userGuess(input);
                if (!movie.contains(input)) {
                    guessesLeft--;
                    console.log('Sorry, thats Wrong'.brightRed);
                }

                movie.toString();
                console.log("Guessed Left: ".cyan + guessesLeft);
                console.log("Guessed letters: ".blue + guessedLetters);

                console.log("Wins: ".green + win + "\nLose: ".red + lose);
                if (guessesLeft < 1) {
                    console.log("Sorry, better luck next time");
                    lose++;
                    main();
                } else if (!movie.finished()) {
                    inPlay();
                } else {
                    if (guessesLeft > 0) {
                        console.log("Congrats!! you did it!!! ".rainbow);
                        win++;
                        main();
                    } else {
                        console.log("Sorry, better luck next time".brightRed);
                        lose++;
                        main();
                    }
                }
            } else {
                console.log("Sorry, that letter was already chosen! Try again".brightRed);
                inPlay();
            }
        });
    }
}


function main() {
    inq.prompt({
        type: 'list',
        message: "What would you like to do?",
        choices: ['Play!', 'Exit'],
        name: 'choice'
    }).then(result => {
        guessesLeft = 10;
        guessedLetters = [];
        if (result.choice === 'Play!') {
            getRandomMovie();
        } else {
            process.exit();
        }
    });
}

main();
