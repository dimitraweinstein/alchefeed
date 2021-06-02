import aniamls from '../quiz/animals/data.js';
import lebowski from '../quiz/lebowski/data.js';
import monster from '../quiz/monster/data.js';
import { findById } from './utils.js';
const quizzes = [
    lebowski,
    aniamls,
    monster
];

//need render header function



const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    if (!stringyUser) return [];

    const user = JSON.parse(stringyUser);

    return user;
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function completeQuiz(quizId) {
    const user = getUser();

    user.completed[quizId] = true;

    setUser();
}

export function userFinishedQuiz(quiz, result){ //result is the final calc of who you got
    const user = getUser();
    const newResult = { //gets result of who you got and adds to an obj
        quiz: quiz.id,
        result: result
    };
    user.push(newResult); //pushes result to user array
    setUser(user);
}

export function changeOpenness(userChoice){ //changes oppenness in a user obj in the array
    const user = getUser();
    const newUser = {
        openness: 0
    };
    if (user.openness){ //sees if user.openness is created if not the user newUser to create it.
        user.openness = user.openness + userChoice;
    } else {
        user.push(newUser);
    }

    setUser(user);
}
