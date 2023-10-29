const questions = [
    {
        question: "Identify the sentence with the correct use of the subjunctive mood:",
        answers: [
            { text: "If I was you, I would do it.", correct: false },
            { text: "He was happy if it rains.", correct: false },
            { text: "She were happy when he arrived.", correct: false },
            { text: "If I were you, I would do it.", correct: true },
        ]
    },
    {
        question: "Select the sentence with the proper placement of adverbs:",
        answers: [
            { text: "He speaks loudly.", correct: true },
            { text: "He loudly speaks.", correct: false },
            { text: "Speaks he loudly.", correct: false },
            { text: "Loudly he speaks.", correct: false },
        ]
    },
    {
        question: "Determine the sentence with the correct use of the past perfect tense:",
        answers: [
            { text: "I had gone to the store before he did.", correct: true },
            { text: "I went to the store before he did.", correct: false },
            { text: "I have gone to the store before he did.", correct: false },
            { text: "I went to the store before he has done.", correct: false },
        ]
    },
    {
        question: "Which sentence correctly uses the first conditional?",
        answers: [
            { text: "If it rains, we will go to the beach.", correct: true },
            { text: "I go to the beach when it rains.", correct: false },
            { text: "We go to the beach, and it rains.", correct: false },
            { text: "We will go to the beach, then it rains.", correct: false },
        ]
    },
    {
        question: "Choose the sentence with proper subject-verb agreement:",
        answers: [
            { text: "The team are playing well.", correct: false },
            { text: "The team is playing well.", correct: true },
            { text: "The teams are playing well.", correct: false },
            { text: "The team playing well.", correct: false },
        ]
    },
    {
        question: "Identify the sentence using the passive voice:",
        answers: [
            { text: "They read the book.", correct: false },
            { text: "The book is read by them.", correct: true },
            { text: "The book they read.", correct: false },
            { text: "Reading the book, they are.", correct: false },
        ]
    },
    {
        question: "Select the sentence with the correct use of modal verbs:",
        answers: [
            { text: "She can to sing beautifully.", correct: false },
            { text: "She can sing beautifully.", correct: true },
            { text: "She sings can beautifully.", correct: false },
            { text: "Beautifully can she sing.", correct: false },
        ]
    },
    {
        question: "Choose the sentence with proper use of articles:",
        answers: [
            { text: "I bought a car and a bicycle.", correct: true },
            { text: "I bought the car and the bicycle.", correct: false },
            { text: "I bought car and bicycle.", correct: false },
            { text: "I bought a the car and bicycle.", correct: false },
        ]
    },
    {
        question: "In which sentence is the third conditional used correctly?",
        answers: [
            { text: "If he eats pizza, he gets happy.", correct: false },
            { text: "If I had seen her earlier, I would have helped.", correct: true },
        ]
    },
    {
        question: "Identify the sentence with the correct use of the gerund:",
        answers: [
            { text: "She enjoys to swim at the beach.", correct: false },
            { text: "She enjoys swimming at the beach.", correct: true },
        ]
    },
];


// Quiz.js


const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    if(score === questions.length){
        questionElement.innerHTML ="Wow, your english is awesome!<br>";

    }else{
        questionElement.innerHTML ="don't give up and try later!<br>";
    }

    questionElement.innerHTML += `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
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
