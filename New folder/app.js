// let quizForm = document.querySelector("form");
// let finishedScreen = document.querySelector(".finished");
// let pointsLabel = document.querySelector(".points-label");
// let sendButton = document.querySelector(".send-button");


// sendButton.addEventListener("click", handleForm);

// function handleForm() {
//     let points = 0;
//     let answers = document.querySelectorAll("input:checked");
//     for (let answer = 0; answer < answers.length; answer++) {
//         points += parseInt(answers[answer].value, 10);
//     }
//     quizForm.classList.toggle("hidden");
//     pointsLabel.innerHTML = points;
//     finishedScreen.classList.toggle("hidden");
// }

let questions = document.querySelectorAll("form");
console.log(questions);
questions.forEach((question) => { question.classList.add("hidden") });
questions[0].classList.remove("hidden");    
let currentQuestion = 0;

let samuel = document.querySelectorAll(".samuel");
for (let a = 0; a < samuel.length; a++) {
    samuel[a].addEventListener("click", HidesQuestion);
}

function HidesQuestion() {
    currentQuestion++;
    questions.forEach((question) => { question.classList.add("hidden") });
    questions[currentQuestion].classList.remove("hidden");
}


