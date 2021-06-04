import { findById } from '../utils/utils.js';
import aniamls from '../quiz/animals/data.js';
import lebowski from '../quiz/lebowski/data.js';
import monster from '../quiz/monster/data.js';
import { getCharacter } from '../utils/local-Storage-utils.js';

const quizzes = [
    lebowski,
    aniamls,
    monster
];

const returnHomeBtn = document.querySelector('#return');


const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');
const quiz = findById(quizzes, id);

const char1 = findById(quiz.char, 1);
const char2 = findById(quiz.char, 2);
const char3 = findById(quiz.char, 3);
const char4 = findById(quiz.char, 4);
const char5 = findById(quiz.char, 5);
const char = getCharacter(char1, char2, char3, char4, char5, quiz.id);

const image = document.createElement('img');
const description = document.createElement('p');
const name = document.createElement('h3');

const resultsDiv = document.querySelector('#resultsDiv');

image.src = `${char.image}`;
image.classList.add('pics');

description.textContent = `${char.description}`;
name.textContent = `${char.name}`;

resultsDiv.append(image, name, description);

returnHomeBtn.addEventListener('click', () => {
    window.location = '../';
});