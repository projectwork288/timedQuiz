const clockMechanizm = document.getElementById('clock');
const startBtnEl = document.getElementById('start-btn');
const finishButton = document.getElementById('finish-button');
const startPage = document.getElementById('start');
const quizContainerPage = document.getElementById('quiz-container');
const resultContainerPage = document.getElementById('result-container');

let nIntervId;
var timerInit = 90;
let correctAnswer = 0; 
let inCorrectAnswer = 0; 

function init() {
    console.log("Checking")
    startPage.style.display = "none";
    quizContainerPage.style.display = "block"
    nIntervId = setInterval(timer, 1000);
}

startBtnEl.onclick = init;
finishButton.onclick = resultFunction;

function resultFunction() {
    const checkElement=document.getElementsByClassName("correctAnswer");
    console.log(checkElement)
    for (var i=0; i<checkElement.length; i++){
        
        if(checkElement[i].checked) {

            correctAnswer = correctAnswer+1;
          } else  {
            inCorrectAnswer = inCorrectAnswer+1;
          }    
    }    
    console.log(correctAnswer, inCorrectAnswer);
    quizContainerPage.style.display = "none";
    resultContainerPage.style.display = "block";

    const displayCorrectEl = document.getElementById('display-correct');
    const displayInCorrectEl = document.getElementById('display-incorrect');

    displayCorrectEl.innerText = correctAnswer + " out of 10 correctly answered.";
    displayInCorrectEl.innerText = inCorrectAnswer + " out of 10 incorrectly answered.";
}

function timer() {
    let testEnd;
    if (timerInit >= 1) {
        timerInit=timerInit - 1;         
        clockMechanizm.innerText=timerInit; }
    if (timerInit === 0) {
        // stop execution of the timer
        clearInterval(nIntervId);
        document.write('<h2 style="text-align: center;">Time has expired the Quiz has ended.</h2>');
       
        }

function testQuestions() {}    
}