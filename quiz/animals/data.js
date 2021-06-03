const question1 = {
    id: 'q1',
    title: 'Question 1',
    description: `How do you feel about new experiences?`,
    choices: [{
        id: 'High',
        description: 'I go where the wind blows.',
        points: 10  //kk slider
    }, {
        id: 'MidHigh',
        description: `I saw some things on the travel channel.`,
        points: 7   // isabelle
    }, {
        id: 'Mid',
        description: `Are there bells involved?`,
        points: 5   // tom
    }, {
        id: 'MidLow',
        description: `As aong as there are not any bugs!`,
        points: 3  // blathers
    }, {
        id: 'Low',
        description: `All I do is travel, I live on a boat.`,
        points: 1   // red
    }]
};
const question2 = {
    id: 'q2',
    title: 'Question 2',
    description: `How responsible are you?`,
    choices: [{
        id: 'High', 
        description: 'Planing ahead for the future is my favorite past time.',
        points: 10 // Tom 
    }, {
        id: 'MidHigh', 
        description: `My cousin thinks im really responsible! `,
        points: 7 // red
    }, {
        id: 'Mid', 
        description: `As a curator of rare artifacts, I take responsibility very seriously`,
        points: 5 // blathers
    }, {
        id: 'MidLow', 
        description: `Sometimes I am forgetful but I try`,
        points: 3 // isabelle
    }, {
        id: 'Low', 
        description: `I actually just finsished a song about this. *music plays*`,
        points: 1 // kk slider
    }]
};
const question3 = {
    id: 'q3',
    title: 'Question 3',
    description: `How much do you know about island life?`,
    choices: [{
        id: 'High',
        description: 'I could tell you anything about island life but I dont know why you would want to learn about the bugs they are wicked things.',
        points: 10 // Blathers 
    }, {
        id: 'MidHigh',
        description: `I know the most because I give announcements every morning!`,
        points: 7 // isabelle
    }, {
        id: 'Mid',
        description: `Well I know how much everything costs.`,
        points: 5 // tom
    }, {
        id: 'MidLow',
        description: `Catching bugs and fish is not my scene, but you will find me in the courtyard.`,
        points: 3 // kk slider
    }, {
        id: 'Low',
        description: `I could tell you all about the shore life.`,
        points: 1 //  redd
    }]
};
const question4 = {
    id: 'q4',
    title: 'Question 4',
    description: `How willing are you to help others?`, 
    choices: [{
        id: 'High',
        description: 'I am very willing to help facilitate the enjoyment of the island.',
        points: 10 // isabelle
    }, {
        id: 'MidHigh',
        description: `I spend most of my time reading but I am willing to help`,
        points: 7 // blathers 
    }, {
        id: 'Mid',
        description: `If there is bells to be made I am in.`,
        points: 5 // tom
    }, {
        id: 'MidLow',
        description: `Always ready to serenade`,
        points: 3 // kk slider 
    }, {
        id: 'Low',
        description: `Ahoy, come aboard my ship for a deal of life time!`,
        points: 1 // redd
    }]
};
const question5 = {
    id: 'q5',
    title: 'Question 5',
    description:
    `How honest are you?`,
    choices: [{
        id: 'High',
        description: 'I will tell you what I told my cousin, all my paintings are real.',
        points: 10 // red
    }, {
        id: 'MidHigh',
        description: `My music never lies`,
        points: 7 // kk slider
    }, {
        id: 'Mid',
        description: `I believe I give a fair price for everthing in my store.`,
        points: 5 // tom
    }, {
        id: 'MidLow',
        description: `I try to be!`,
        points: 3 // isabelle
    }, {
        id: 'Low',
        description: `Honestly, I just hate bugs`,
        points: 1 // blathers
    }]
};

const animalQuestions = [
    question1,
    question2,
    question3,
    question4,
    question5
];

const animalQuiz = {
    id: 'aniamls',
    title: 'Which Animal Crossing Character are you?',
    image: 'animal-crossing.png',
    description: `Answer the questions to see with Animal Crossing character you're most like`,
    questions: animalQuestions,
    style: './animals/style.css'
};

export default animalQuiz;