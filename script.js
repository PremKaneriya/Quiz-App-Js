const questions = [
    {
        question: "What is the capital of France?",
        options: ["Madrid", "Rome", "Berlin", "Paris"],
        correctOption: 3
    },
    // Add more questions here...
    {
        question: "What is the largest planet in our solar system?",
        options: ["Venus", "Jupiter", "Saturn", "Neptune"],
        correctOption: 1
    },
    // Add more questions here...
    // Repeat the same format for additional questions.
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    answersElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctOption) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    answersElement.style.display = "none";
    nextButton.style.display = "none";
    resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener("click", () => selectAnswer(-1));

showQuestion();
