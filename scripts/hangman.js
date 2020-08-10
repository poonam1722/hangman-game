class Hangman {
  constructor(word, remainingguesses) {
    this.word = word.toLowerCase().split('');
    this.remainingguesses = remainingguesses;
    this.guessedletters = [];
    this.status = 'playing';
  }
  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedletters.includes(letter) || letter === ' '
    );

    if (this.remainingguesses === 0) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }
  get statusmessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingguesses}`;
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}".`;
    } else {
      return 'Great work! You guessed the word.';
    }
  }
  get puzzle() {
    let puzzle = '';

    this.word.forEach((letter) => {
      if (this.guessedletters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });

    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedletters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') {
      return;
    }

    if (isUnique) {
      this.guessedletters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingguesses--;
    }

    this.calculateStatus();
  }
}





