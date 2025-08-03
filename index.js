console.log("Javascript loaded ...");

const rollDiceButton = document.getElementById("roll-button");
const mainDice = document.getElementById("dice");

rollDiceButton.addEventListener("click", ()=>{
    mainDice.classList.add("roll-animation");
    // 1 sec
    setTimeout(()=>{
        mainDice.classList.remove("roll-animation");
    },1000);
});