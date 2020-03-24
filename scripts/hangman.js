class Hangman{
    constructor(word, remainingguesses){
        this.word = word.toLowerCase().split('')
        this.remainingguesses = remainingguesses
        this.guessedletters = []
        this.status = 'playing'   
    }
     get puzzle(){
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedletters.includes(letter) || letter === ' ') {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })
        return puzzle
    }
    calculatestatus()
    {
        let finished = true
        finished = this.word.every((letter) =>  this.guessedletters.includes(letter) || letter === ' ')
            
        if (this.remainingguesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        }
        else {
            this.status = 'playing'
        }
    }
    makeGuess(guess)
    {
        guess = guess.toLowerCase()
        const isunique = !this.guessedletters.includes(guess)
        const isbadguess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }
        if (isunique) {
            this.guessedletters.push(guess)
        }
        if (isunique && isbadguess) {
            this.remainingguesses--
        }
        this.calculatestatus()
    }
  calculatestatus()
  {
      let finished = true
      this.word.forEach((letter) => {
          if (this.guessedletters.includes(letter)) {

          } else {
              finished = false
          }
      })
      if (this.remainingguesses === 0) {
          this.status = 'failed'
      } else if (finished) {
          this.status = 'finished'
      }
      else {
          this.status = 'playing'
      }
  }
   get statusmessage()
  {
      if (this.status === 'playing') {
          return `Guesses left: ${this.remainingguesses}`
      }
      else if (this.status === 'failed') {
          return `Nice try! the word was "${this.word.join('')}"`
      }
      else {
          return `Great work! you guessed the word`
      }
  }
  }





