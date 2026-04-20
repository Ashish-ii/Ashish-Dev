let MCU = 0 ;
let youPara = 0;
let user = document.querySelector("#user");
let computer = document.querySelector("#comp");

let res = document.querySelector("#result");
const all = document.querySelectorAll(".penny-box");

const compGen = () => {
    let arr = ['rock', 'scissor' , 'paper'];
    let compVal = Math.floor(Math.random () * 3);
    return arr[compVal];
}

const playGame = (mark) => {
    console.log('user choice :',mark)
    let random = compGen() ;
    console.log("Computer choice :", random);
if(mark === random){
    console.log("this is draw");
    res.innerText = "DRAW !"
    res.style.background = "green";
} else{
    let userWin = true ;
    if( mark ===  "paper"){
        userWin = random === "rock" ? true  : false ;
        
       
    } else if(mark === "rock"){
        userWin = random === "scissor" ? true : false ;
    } else if(mark === "scissor"){
        userWin = random === "paper" ? true : false ;
    } 
    showWinner(userWin);
}

}
 const showWinner = (userWin) => {
    if(userWin){
        console.log("You won !");
        res.innerText = "YOU WON !"
        res.style.background = "red";
        youPara++;
        user.innerText=youPara;
    } else {
        console.log("computer won");
        res.innerText = "COMPUTER WON!"
        res.style.background = "orange";
        MCU++;
        computer.innerText = MCU;
    }
 }


all.forEach((box) => {
    box.addEventListener("click", ()=> {
        const mark = box.getAttribute("id");
        playGame(mark);
    })
})