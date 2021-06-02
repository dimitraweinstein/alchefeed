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

export function addScore(userChoice){ //changes points in a user obj in the array
    const user = getUser();
    
    if (user.score){ //sees if points is created if not the user newUser to create it.
        user.score = user.score + userChoice;
    } 

    setUser(user);
}

