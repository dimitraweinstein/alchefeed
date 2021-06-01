import aniamls from './animals/data.js';
import lebowski from './lebowski/data.js';
import monster from './monster/data.js';
import { findById } from '../utils/utils.js';

//need render header function

const quizzes = [
    lebowski,
    aniamls,
    monster
];

const quizD = document.querySelector('#quizDiv');



const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const quiz = findById(quizzes, id);


const playerChoiceForm = document.createElement('form');
playerChoiceForm.classList.add('choice-form');

for (let quiz of quizzes){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `./?id=${quiz.id}`;
    a.textContent = quiz.title;
    li.append(a);
    quizD.append(li);
}

const choiceButton = document.createElement('button');
choiceButton.classList.add('choice-button');
choiceButton.textContent = 'Make Your Choice';
playerChoiceForm.append(choiceButton);

playerChoiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(playerChoiceForm);
    const choiceId = formData.get('choice');

    const choiceSelection = findById(quiz.questions.choices, choiceId);

    

    const resultsDiv = document.createElement('div');
    resultsDiv.classList.add('results-display');
    resultsDiv.textContent = choiceSelection.result;

    const redirectButton = document.createElement('button');
    redirectButton.textContent = 'Back to quiz list';
    redirectButton.classList.add('choice-button');

    redirectButton.addEventListener('click', () => {
        window.location = '/index';
    });

    resultsDiv.append(redirectButton);
    playerChoiceForm.remove();
});


