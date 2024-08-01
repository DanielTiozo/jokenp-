const result = document.querySelector(".result")
const userPoints = document.querySelector("#userPoints")
const machinePoints = document.querySelector("#machinePoints")
const confetti = document.getElementById("confetti")
const crying = document.getElementById("crying")
const playAgain = document.getElementById("playAgain")

let userVictories = 0 // camel case = como corcova de camelo
let machineVictories = 0

const GAME_OPTIONS = { // ENUM = snake case - ligado com underline
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const play = item => {
    closeGif()
    point(item, playMachine())
}

const playMachine = () => {
    const itens = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return itens[randomNumber]
}

const point = (itemUser, itemMachine) => {
    if (itemUser === itemMachine){
        result.innerHTML = "Deu empate"
        celebrate()
    } else if ( itemUser === GAME_OPTIONS.ROCK && itemMachine === GAME_OPTIONS.SCISSORS ||
        itemUser === GAME_OPTIONS.PAPER && itemMachine === GAME_OPTIONS.ROCK ||
        itemUser === GAME_OPTIONS.SCISSORS && itemMachine === GAME_OPTIONS.PAPER){
            userVictories++
            userPoints.innerHTML = userVictories
            result.innerHTML = "Você venceu"
            celebrate()
        } else {
            machineVictories++
            machinePoints.innerHTML = machineVictories
            result.innerHTML = "Você perdeu"
            celebrate()
        }
}

const closeGif = () => {
    confetti.style.marginLeft = "-2500px"
    crying.style.marginLeft = "-2500px"
    playAgain.style.marginLeft = "-2500px"
}

const celebrate = () => {
    console.log("i am here")
    if (result.innerHTML == "Você venceu"){
        confetti.style.marginLeft = "100px"
    } else if (result.innerHTML == "Você perdeu"){
        crying.style.marginLeft = "100px"
    } else {
        playAgain.style.marginLeft = "100px"
    }
}