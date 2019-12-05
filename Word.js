var Letter = require('./Letter');

class Word {
    constructor(word) {
        this.word = word;
        this.letters = [];
        for (let i = 0; i < word.length; i++) {
            let letter = new Letter(word[i])
            this.letters.push(letter);
        }
    }

    toString() {
        let result = '';
        for (let i = 0; i < this.letters.length; i++) {
            result = result + this.letters[i].getLetter() + ' ';
        }
        console.log(result);
    }

    userGuess(c) {
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].guess(c);
        }
    }

    finished() {
        this.done = false;
        let count = 0;
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].getUsedLetter()) {
                count++;
            }
            if (this.letters[i].getLetter() === ' ') {
                count++;
            }
        }
        console.log(count);

        if (count === this.letters.length) {
            this.done = true;
        } else {
            this.done = false;
        }
        return this.done;
    }
}

module.exports = Word;