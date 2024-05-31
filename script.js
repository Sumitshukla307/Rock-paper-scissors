let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll("img");
 const msg = document.querySelector("#msg"); 
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector
 ("#comp-score");

const genCompChoices =  () =>{
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame =()=>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "rgb(61, 19, 61)";
}
const showWinner  = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "you Win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
            console.log("you lose!");
          msg.innerText = "you lose!";
           msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{ 
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoices();
    console.log("comp choice = ", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
         let userWin = true;
         if(userChoice  === "rock"){
            userWin = compChoice === "paper" ? false : true;
         }else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;
         }else if(userChoice  === "scissors"){
            userWin = compChoice === "rock" ? false : true;
         }else{
            userWin = compChoice === "scissors" ? false : true;
         }
         showWinner(userWin, userChoice,compChoice); 
    }

}


choices.forEach((img)=>{
    img.addEventListener("click",()=>{
        const userChoice = img.getAttribute("id"); 
        playGame(userChoice);
    })
})
