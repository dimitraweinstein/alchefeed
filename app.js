import aniamls from '../quiz/animals/data.js';
import lebowski from '../quiz/lebowski/data.js';
import monster from '../quiz/monster/data.js';
import { findById } from '../utils/utils.js';

// initialize state

const quizzes = [
    lebowski,
    aniamls,
    monster
];

const quizD = document.querySelector('#quizDiv');



const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');





for (let quiz of quizzes){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `./quiz/?id=${quiz.id}`;
    a.textContent = quiz.title;
    li.append(a);
    quizD.append(li);
}
