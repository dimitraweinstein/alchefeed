import aniamls from './quiz/animals/data.js';
import lebowski from './quiz/lebowski/data.js';
import monster from './quiz/monster/data.js';


const quizzes = [
    lebowski,
    aniamls,
    monster
];

const quizD = document.querySelector('#quizDiv');




for (let quiz of quizzes){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const image = document.createElement('img');
    a.href = `./quiz/?id=${quiz.id}`;
    image.src = quiz.image;
    image.classList.add(`${quiz.id}`);
    a.append(image);
    li.append(a);
    quizD.append(li);
}

