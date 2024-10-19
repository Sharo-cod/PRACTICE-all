let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const option = ["Rock" ,"Paper" ,"Scissors"]
}

const playGame = () =>{
    console.log("userChoice =", userChoice);
    
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});