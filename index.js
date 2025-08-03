console.log("Javascript loaded ...");

const rollDiceButton = document.getElementById("roll-button");
const mainDice = document.getElementById("dice");
const rollHistory = document.getElementById("roll-history");
const sumValue = document.getElementById("sum-value");


let historyList = [];


function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    mainDice.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
    updateSum();
}

function updateRollHistory() {
    rollHistory.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
            historyList[i]
        )}</span>`;
        rollHistory.appendChild(listItem);
    }
}

const updateSum = () => sumValue.innerHTML = historyList.reduce((a, b) => a + b, 0);


function getDiceFace(rollResult) {

    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }

}

rollDiceButton.addEventListener("click", () => {
    mainDice.classList.add("roll-animation");
    // 1 sec
    setTimeout(() => {
        mainDice.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});