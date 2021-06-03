import aniamls from '../quiz/animals/data.js';
import lebowski from '../quiz/lebowski/data.js';
import monster from '../quiz/monster/data.js';
import { addScore, getCharacter } from '../utils/local-Storage-utils.js';
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
link.href = `${quiz.style}`;
head.append(link);
const question1 = findById(quiz.questions, 'q1');
const question2 = findById(quiz.questions, 'q2');
const question3 = findById(quiz.questions, 'q3');
const question4 = findById(quiz.questions, 'q4');
const question5 = findById(quiz.questions, 'q5');

const char1 = findById(quiz.char, '1');
const char2 = findById(quiz.char, '2');
const char3 = findById(quiz.char, '3');
const char4 = findById(quiz.char, '4');
const char5 = findById(quiz.char, '5');

// console.log(char1.name);

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
        input.name = `${choice.id}`;
        input.value = question.id;
        qlabel.append(label, input);
    }
    playerChoiceForm.append(qlabel);
}
const redirectButton = document.createElement('button');
redirectButton.textContent = 'see results';
redirectButton.classList.add('choice-button');

const choiceButton = document.createElement('button');
choiceButton.classList.add('choice-button');
choiceButton.textContent = 'Make Your Choice';
playerChoiceForm.append(choiceButton);

playerChoiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(playerChoiceForm);
    const choiceId = formData.get('q1');
    const choiceId2 = formData.get('q2');
    const choiceId3 = formData.get('q3');
    const choiceId4 = formData.get('q4');
    const choiceId5 = formData.get('q5');

    const q1Choices = findById(quiz.questions, 'q1');
    const choiceSelection = findById(q1Choices.choices, choiceId);
    const q2Choices = findById(quiz.questions, 'q2');
    const choiceSelection2 = findById(q2Choices.choices, choiceId2);
    const q3Choices = findById(quiz.questions, 'q3');
    const choiceSelection3 = findById(q3Choices.choices, choiceId3);
    const q4Choices = findById(quiz.questions, 'q4');
    const choiceSelection4 = findById(q4Choices.choices, choiceId4);
    const q5Choices = findById(quiz.questions, 'q5');
    const choiceSelection5 = findById(q5Choices.choices, choiceId5);

    addScore(choiceSelection.points);
    addScore(choiceSelection2.points);
    addScore(choiceSelection3.points);
    addScore(choiceSelection4.points);
    addScore(choiceSelection5.points);

    const char = getCharacter(char1, char2, char3, char4, char5);
    console.log(char);
    // const resultsDiv = document.createElement('div');
    // resultsDiv.classList.add('results-display');
    // resultsDiv.textContent = choiceSelection.result;





    // resultsDiv.append(redirectButton);
    // playerChoiceForm.remove();
    // main.append(resultsDiv);
});
    redirectButton.addEventListener('click', () => {
        window.location = `../results/?id=${quiz.id}`;
    });
main.append(quizHeader, playerChoiceForm, redirectButton);
