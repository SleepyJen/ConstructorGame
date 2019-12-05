class Letter {
    constructor(letter) {
        this.letter = letter;
        this.usedLetter = false;
    }

    getLetter() {
        if (this.usedLetter) {
            return this.letter;
        } else if (this.letter === ' ') {
            return this.letter;
        }
        return '_';
    }

    getUsedLetter() {
        return this.usedLetter;
    }

    guess(c) {
        if (c === ' ') {
            return ' ';
        } else if (c === '\'') {
            return '\'';
        }

        if (!this.letterGuessed(c)) {
            return "_";
        } else {
            return c;
        }
    }

    letterGuessed(letter) {
        if (this.usedLetter) {
            return true;
        } else {
            if (this.letter.toLowerCase() === letter.toLowerCase()) {
                this.usedLetter = true;
                return false;
            }
        }
    }

}

module.exports = Letter;