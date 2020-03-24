const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})


const render=() =>{
    puzzleEl.innerHTML= game1.puzzle
    guessesEl.textContent = game1.statusmessage
}

const startgame = async ()=>{
 const puzzle= await getPuzzle('2')
 game1= new Hangman(puzzle,7)
 render()
}

document.querySelector('.reset').addEventListener('click',startgame)
startgame()

/*getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

/*getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})*/