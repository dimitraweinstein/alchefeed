import aniamls from '../quiz/animals/data.js';
import lebowski from '../quiz/lebowski/data.js';
import monster from '../quiz/monster/data.js';
import { completeQuiz } from '../utils/local-Storage-utils.js';
import { findById } from '../utils/utils.js';
const quizzes = [
    lebowski,
    aniamls,
    monster
];

const main = document.querySelector('main');
const head = document.querySelector('head');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');
const quiz = findById(quizzes, id);
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = `${quiz.style}`;
head.append(link);
const question1 = findById(quiz.questions, 'q1');
const question2 = findById(quiz.questions, 'q2');
const question3 = findById(quiz.questions, 'q3');
const question4 = findById(quiz.questions, 'q4');
const question5 = findById(quiz.questions, 'q5');


const questions = [
    question1,
    question2,
    question3,
    question4,
    question5
];


const quizHeader = document.createElement('h1');
quizHeader.textContent = quiz.title;

const playerChoiceForm = document.createElement('form');
playerChoiceForm.classList.add('choice-form');

for (let choice of questions) { //grabs questions
    // console.log(choice);
    const qlabel = document.createElement('label');
    qlabel.classList.add('question');
    qlabel.append(choice.description);
    for (let question of choice.choices){ //grabs question answers
        // console.log(question);
        const label = document.createElement('label');
        const input = document.createElement('input');
        label.textContent = question.description;
        input.type = 'radio';
        input.name = 'choice';
        input.value = question.id;
        qlabel.append(label, input);
    }
    playerChoiceForm.append(qlabel);
}

const choiceButton = document.createElement('button');
choiceButton.classList.add('choice-button');
choiceButton.textContent = 'Make Your Choice';
playerChoiceForm.append(choiceButton);

// playerChoiceForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formData = new FormData(playerChoiceForm);
//     const choiceId = formData.get('choice');

//     const choiceSelection = findById(quiz.choices, choiceId);

//     completeQuiz(quiz.id);

//     const resultsDiv = document.createElement('div');
//     resultsDiv.classList.add('results-display');
//     resultsDiv.textContent = choiceSelection.result;

//     const redirectButton = document.createElement('button');
//     redirectButton.textContent = 'Back to the Map';
//     redirectButton.classList.add('choice-button');

//     redirectButton.addEventListener('click', () => {
//         window.location = '../map';
//     });

//     resultsDiv.append(redirectButton);
//     playerChoiceForm.remove();
//     main.append(resultsDiv);
// });

main.append(quizHeader, playerChoiceForm);