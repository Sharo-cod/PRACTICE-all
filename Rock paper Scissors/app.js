let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["Rock" ,"Paper" ,"Scissors"]
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx]; 
}
const drawGame = () => {
    console.log("GAME WAS DRAW");
}


const playGame = (userChoice) =>{
    console.log("userChoice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice =", compChoice);

    if( userChoice === compChoice){
        drawGame();
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});