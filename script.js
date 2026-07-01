let box = document.getElementById("box");
let inputBox = document.getElementById("input");
let submit = document.getElementById("submit");
let scoreNumber = document.getElementById("score");
let restart = document.getElementById("restart");
let deleteCharacter = document.getElementById("back-space");
let num1;
let num2;

function introductionMessage() {
    alert("Rules:" + "\n" + "- 1 Point Gained for Correct Answer." + "\n" + "- 1 Point Loss for Wrong Answer." + "\n" + "\n" + "Note:" + "\n" + "Only one or two digit real number sum questions are placed." + "\n" + "\n" + "Goal:" + "\n" + "Answer the following questions displayed until you have received a total of 10 Points, meaning you have won the entire game!" + "\n" + "\n" + "Developer: Amanjot Girn (@GitHub - AsG520).");
}

introductionMessage(); 

const userConfirmedStart = confirm("Your Journey Begins :D. Good Luck!");

function negativeCheck() {
    if (scoreNumber.valueAsNumber < 0) {
        scoreNumber.value = "0";
    }
}

num1 = Math.ceil(Math.random() * 10);
num2 = Math.ceil(Math.random() * 10);
box.value = num1 + " + " + num2;

function updateInput(input) {
    inputBox.value += input;
}

function calculateSum() {
    let computerResult = eval(box.value);
    let userResult = inputBox.value;
    if (computerResult == userResult) {
        inputBox.value = "";
        scoreNumber.valueAsNumber += 1;
        num1 = Math.ceil(Math.random() * 10);
        num2 = Math.ceil(Math.random() * 10);
        box.value = num1 + " + " + num2;
    } else {
        inputBox.value = "";
        scoreNumber.valueAsNumber -= 1;
    }
}   

function backSpace() {
    input.value = input.value.slice(1, 0);
}

function grandWin() {
    if (scoreNumber.valueAsNumber >= 10) {
        alert("You're a Sum Champion! You've Beat the Entire Game.");
        scoreNumber.valueAsNumber = 0;
    }
}   

function restartGame() {
    const userConfirmedRestart = confirm("Do you want to restart? Will lose all progress!");
    if (userConfirmedRestart) {
        scoreNumber.valueAsNumber = 0;
        inputBox.value = "";
        num1 = Math.ceil(Math.random() * 10);
        num2 = Math.ceil(Math.random() * 10);
        box.value = num1 + "+" + num2;
    }
}

submit.addEventListener("click", calculateSum);
submit.addEventListener("click", grandWin);
submit.addEventListener("click", negativeCheck);
restart.addEventListener("click", restartGame);
deleteCharacter.addEventListener("click", backSpace);