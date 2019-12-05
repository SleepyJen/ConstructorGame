var inq = require('inquirer');
var Word = require('./Word');

var movieDatabase = ['The Avengers', 'Cinderella', 'The Little Mermaid', 'Frozen'];

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
            movie.userGuess(result.input);
            movie.toString();
            if (!movie.finished()) {
                inPlay();
            } else {
                process.exit();
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
        if (result.choice === 'Play!') {
            getRandomMovie();
        } else {
            process.exit();
        }
    });
}

main();
