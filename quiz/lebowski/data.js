// import { lebowskiCharacters } from './character-data.js';



const question1 = {
    id: 'q1',
    title: 'Question 1',
    description: `Are you open and accepting of others' life decisions?`,
    choices: [{
        id: 'opennessHigh', //Dude
        description: 'Jackie Treehorn treats objects like women, man.',
        openness: 10
    }, {
        id: 'opennessMidHigh', //Donny
        description: `I am the walrus.`,
        openness: 7
    }, {
        id: 'opennessMid', //Walter
        description: `Say what you want about the tenets of National Socialism, Dude, at least its an ethos.`,
        openness: 5
    }, {
        id: 'opennessMidLow', //Bunny
        description: `Ulli doesn't care about anything. He's a Nihilist.`,
        openness: 3
    }, {
        id: 'opennessLow', //Jesus
        description: `You said it man. Nobody f***s with the Jesus.`,
        openness: 1
    }]
};
const question2 = {
    id: 'q2',
    title: 'Question 2',
    description: `When it comes to objection, how conscientious are you, man?`,
    choices: [{
        id: 'conscientiousHigh', //The Dude
        description: 'This aggression will not stand, man!',
        conscientiousness: 10
    }, {
        id: 'conscientiousMidHigh', //Donny
        description: `I'm throwing rocks tonight. Mark it, Dude.`,
        conscientiousness: 7
    }, {
        id: 'conscientiousMid', //Walter
        description: `This is not 'Nam. This is bowling. There are rules.`,
        conscientiousness: 5
    }, {
        id: 'conscientiousMidLow', //Jesus
        description: `I would have f***ed you in the ass Saturday. I f*** you in the ass next Wednesday instead. Wooo! You got a date Wednesday, baby!`,
        conscientiousness: 3
    }, {
        id: 'conscientiousLow', //Bunny
        description: `I can't blow that far.`,
        conscientiousness: 1
    }]
};
const question3 = {
    id: 'q3',
    title: 'Question 3',
    description: `Do you like meeting new people, making new friends?`,
    choices: [{
        id: 'extraversionHigh', //Dude
        description: 'This is the f***in guy! I can find this f***in Lebowski guy!',
        extraversion: 10
    }, {
        id: 'extraversionMidHigh', //Donny
        description: `Who's got your undies, Walter?`,
        extraversion: 7
    }, {
        id: 'extraversionMid', //Walter
        description: `This is what happens when you f**k a stranger in the ass, Larry!`,
        extraversion: 5
    }, {
        id: 'extraversionMidLow', //Bunny
        description: `I'll suck your c**k for a thousand dollars.`,
        extraversion: 3
    }, {
        id: 'extraversionLow', //Jesus
        description: `You ready to be f****ed man? I see you rolled your way into the semis. Dios mio, man. Liam and me, we're gonna f*** you up.`,
        extraversion: 1
    }]
};
const question4 = {
    id: 'q4',
    title: 'Question 4',
    description:
`If a visitor approaches, are they welcome to your island?`,
    choices: [{
        id: 'agreeablenessHigh', //Dude
        description: 'All are welcome and may stay as long as they please.',
        agreeableness: 10
    }, {
        id: 'agreeablenessMidHigh', //Donny
        description: `You can visit but don't stay long`,
        agreeableness: 7
    }, {
        id: 'agreeablenessMidLow', //Walter
        description: `I'm not sure I like visitors.`,
        agreeableness: 5
    }, {
        id: 'agreeablenessMidLow', //Bunny
        description: `I'm not sure I like visitors.`,
        agreeableness: 3
    }, {
        id: 'agreeablenessLow', //Jesus
        description: `Don't come here. Ever.`,
        agreeableness: 1
    }]
};
const question5 = {
    id: 'q5',
    title: 'Question 5',
    description:
`If a visitor approaches, are they welcome to your island?`,
    choices: [{
        id: 'neuroticisimHigh', //Dude
        description: 'All are welcome and may stay as long as they please.',
        neuroticisim: 10
    }, {
        id: 'neuroticisimMidHigh', //Donny
        description: `You can visit but don't stay long`,
        neuroticisim: 7
    }, {
        id: 'neuroticisimMid', //Walter
        description: `I'm not sure I like visitors.`,
        neuroticisim: 5
    }, {
        id: 'neuroticisimMidLow', //Bunny
        description: `I'm not sure I like visitors.`,
        neuroticisim: 3
    }, {
        id: 'neuroticisimLow', //Jesus
        description: `Don't come here. Ever.`,
        neuroticisim: 1
    }]
};

const lebowskiQuestions = [
    question1,
    question2,
    question3,
    question4,
    question5
];

const lebowskiQuiz = {
    id: 'lebowski',
    title: 'Which Big Lebowski Character are you?',
    image: './assets/lebowski/The dude.webp',
    description: `Answer the questions to see which Big Lebowski character you're most like`,
    questions: lebowskiQuestions,
    style: './lebowski/style.css'
};

export default lebowskiQuiz;