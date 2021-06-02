const question1 = {
    id: 'q1',
    title: 'Question 1',
    description: `How do you feel about new experiences?`,
    choices: [{
        id: 'opennessHigh',
        description: 'I go where the wind blows.',
        openness: 10  //kk slider
    }, {
        id: 'opennessMidHigh',
        description: `I saw some things on the travel channel.`,
        openness: 7   // isabelle
    }, {
        id: 'opennessMid',
        description: `Are there bells involved?`,
        openness: 5   // tom
    }, {
        id: 'opennessMidLow',
        description: `As aong as there are not any bugs!`,
        openness: 3  // blathers
    }, {
        id: 'opennessLow',
        description: `All I do is travel, I live on a boat.`,
        openness: 1   // red
    }]
};
const question2 = {
    id: 'q2',
    title: 'Question 2',
    description: `How responsible are you?`,
    choices: [{
        id: 'conscientiousHigh', 
        description: 'Planing ahead for the future is my favorite past time.',
        conscientiousness: 10 // Tom 
    }, {
        id: 'conscientiousMidHigh', 
        description: `My cousin thinks im really responsible! `,
        conscientiousness: 7 // red
    }, {
        id: 'conscientiousMid', 
        description: `As a curator of rare artifacts, I take responsibility very seriously`,
        conscientiousness: 5 // blathers
    }, {
        id: 'conscientiousMidLow', 
        description: `Sometimes I am forgetful but I try`,
        conscientiousness: 3 // isabelle
    }, {
        id: 'conscientiousLow', 
        description: `I actually just finsished a song about this. *music plays*`,
        conscientiousness: 1 // kk slider
    }]
};
const question3 = {
    id: 'q3',
    title: 'Question 3',
    description: `How much do you knwo about island life?`,
    choices: [{
        id: 'extraversionHigh',
        description: 'I could tell you anything about island life but I dont know why you would want to learn about the bugs they are wicked things.',
        extraversion: 10 // Blathers 
    }, {
        id: 'extraversionMidHigh',
        description: `I know the most because I give announcements every morning!`,
        extraversion: 7 // isabelle
    }, {
        id: 'extraversionMid',
        description: `Well I know hoe much everything costs.`,
        extraversion: 5 // tom
    }, {
        id: 'extraversionMidLow',
        description: `Catching bugs and fish is not my scene, but you will find me in the courtyard.`,
        extraversion: 3 // kk slider
    }, {
        id: 'extraversionLow',
        description: `I could tell you all about the shore life`,
        extraversion: 1 //  redd
    }]
};
const question4 = {
    id: 'q4',
    title: 'Question 4',
    description: `How willing are you to help others?`, 
    choices: [{
        id: 'agreeablenessHigh',
        description: 'I am very willing to help facilitate the enjoyment of the island.',
        agreeableness: 10 // isabelle
    }, {
        id: 'agreeablenessMidHigh',
        description: `I spend most of my time reading but I am willing to help`,
        agreeableness: 7 // blathers 
    }, {
        id: 'agreeablenessMid',
        description: `If there is bells to be made I am in.`,
        agreeableness: 5 // tom
    }, {
        id: 'agreeablenessMidLow',
        description: `Always ready to serenade`,
        agreeableness: 3 // kk slider 
    }, {
        id: 'agreeablenessLow',
        description: `Ahoy, come aboard my ship for a deal of life time!`,
        agreeableness: 1 // redd
    }]
};
const question5 = {
    id: 'q5',
    title: 'Question 5',
    description:
    `How honest are you?`,
    choices: [{
        id: 'neuroticisimHigh',
        description: 'I will tell you what I told my cousin, all my paintings are real.',
        neuroticisim: 10 // red
    }, {
        id: 'neuroticisimMidHigh',
        description: `My music never lies`,
        neuroticisim: 7 // kk slider
    }, {
        id: 'neuroticisimMid',
        description: `I believe I give a fair price for everthing in my store.`,
        neuroticisim: 5 // tom
    }, {
        id: 'neuroticisimMidLow',
        description: `I try to be!`,
        neuroticisim: 3 // isabelle
    }, {
        id: 'neuroticisimLow',
        description: `Honestly, I just hate bugs`,
        neuroticisim: 1 // blathers
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
    style: './animal/style.css'
};

export default animalQuiz;