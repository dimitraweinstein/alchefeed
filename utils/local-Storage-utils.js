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

// export function completeQuiz(quizId) {
//     const user = getUser();

//     user.completed[quizId] = true;

//     setUser();
// }

export function userFinishedQuiz(quiz, result) { //result is the final calc of who you got
    const user = getUser();
    const newResult = { //gets result of who you got and adds to an obj
        quiz: quiz.id,
        result: result
    };
    user.push(newResult); //pushes result to user array
    setUser(user);
}

export function addScore(quizId, userChoice) { //changes points in a user obj in the array
    const user = getUser();

    if (!user[quizId]) {
        user[quizId] = {};
    }
    user[quizId].score = user[quizId].score + userChoice;

    setUser(user);
}

export function getCharacter(char1, char2, char3, char4, char5, quizId) {
    const user = getUser();
    const score = user[quizId].score;

    if (score >= 40) {
        return char1; //grab character data js of the quiz and grab the character for that ID
    }
    if (score >= 30) {
        return char2;
    }
    if (score >= 20) {
        return char3;
    }
    if (score >= 10) {
        return char4;
    }
    return char5;
}