const questions = [
    {
        question: "Which of the following is not a class of food?",
        answers: [
            { text: "carbohydrate", correct: false },
            { text: "protein", correct: false },
            { text: "Calcium", correct: true },
            { text: "Fat and Oil", correct: false },
        ]
    },
    {
        question: "Which of these is an hardware device?",
        answers: [
            { text: "Chrome Browser", correct: false },
            { text: "Diskette", correct: true },
            { text: "Linux", correct: false },
            { text: "Photoshop", correct: false },
        ]
    },
    {
        question: "Which among these is not a month of the year?",
        answers: [
            { text: "January", correct: false },
            { text: "Aprull", correct: true },
            { text: "May", correct: false },
            { text: "June", correct: false },
        ]
    },
    {
        question: "Which of these is equations is not equal to 8?",
        answers: [
            { text: "4+4", correct: false },
            { text: "10-2", correct: false },
            { text: "2x4", correct: false },
            { text: "14/2", correct: true },
        ]
    },

    {
        question: "Which of these is not a plannet?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Urus", correct: true },
            { text: "Pluto", correct: false },
            { text: "Jupiter", correct: false },
        ]
    },

    {
        question: "Which of these is spelt correctly?",
        answers: [
            { text: "corection", correct: false },
            { text: "fructure", correct: false },
            { text: "communnity", correct: false },
            { text: "preamble", correct: true },
        ]
    },

    {
        question: "who was the president of Nigeria between 2019 to 2023?",
        answers: [
            { text: "Olushegun Obasanjo", correct: false },
            { text: "Muhammed Buhari", correct: true },
            { text: "Goodluck Jonathan", correct: false },
            { text: "Ahmed Bola Tinubu", correct: false },
        ]
    }
];

const questionElement = document.getElementById("questionsection");
const correctAnswers = document.getElementById("correctanswers");
const nextButton = document.getElementById("next-button");



let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("ol");
        button.innerHTML = answer.text;
        button.classList.add("ans-btn");
        correctAnswers.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (correctAnswers.firstChild) {
        correctAnswers.removeChild(correctAnswers.firstChild);
    }
}

function selectAnswer(e) {
    const selectedAnswer = e.target;
    const isCorrect = selectedAnswer.dataset.correct === "true";
    if (isCorrect) {
        selectedAnswer.classList.add("correct");
        score++;
    } else {
        selectedAnswer.classList.add("incorrect");
    }
    Array.from(correctAnswers.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();