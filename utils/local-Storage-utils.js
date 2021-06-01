import aniamls from '../quiz/animals/data.js';
import lebowski from '../quiz/lebowski/data.js';
import monster from '../quiz/monster/data.js';
const quizzes = [
    lebowski,
    aniamls,
    monster
];

//need render header function



const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    if (!stringyUser) return {};

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

export function userHasCompletedAllQuizzes() {
    const user = getUser();

    for (let quiz of quizzes) {
        if (!user.completed[quiz.id]) return false;
    }
    return true;
}    

export function changeOpenness(){

    
}
