// import { lebowskiCharacters } from './character-data.js';



const question1 = {
    id: 'q1',
    title: 'Question 1',
    description: `Are you open and accepting of others' life decisions?`,
    choices: [{
        id: 'opennessHigh',
        description: 'All are welcome and may stay as long as they please.',
        openness: 10
    }, {
        id: 'opennessMidHigh',
        description: `You can visit but don't stay long`,
        openness: 7
    }, {
        id: 'opennessMidLow',
        description: `I'm not sure I like visitors.`,
        openness: 3
    }, {
        id: 'opennessLow',
        description: `Don't come here. Ever.`,
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
        description: `Don't come here. Ever.`,
        conscientiousness: 1
    }]
};
const question3 = {
    id: 'q1',
    title: 'Question 1',
    description:
`If a visitor approaches, are they welcome to your island?`,
    choices: [{
        id: 'opennessHigh',
        description: 'All are welcome and may stay as long as they please.',
        result: `
    
`,
        openness: 10
    }, {
        id: 'opennessMidHigh',
        description: `You can visit but don't stay long`,
        result: `
    
`,
        openness: 7
    }, {
        id: 'opennessMidLow',
        description: `I'm not sure I like visitors.`,
        result: `
    
`,
        openness: 3
    },
    {
        id: 'opennessLow',
        description: `Don't come here. Ever.`,
        result: `
  
`,
        openness: 1
    }]
};
const question4 = {
    id: 'q1',
    title: 'Question 1',
    description:
`If a visitor approaches, are they welcome to your island?`,
    choices: [{
        id: 'opennessHigh',
        description: 'All are welcome and may stay as long as they please.',
        result: `
    
`,
        openness: 10
    }, {
        id: 'opennessMidHigh',
        description: `You can visit but don't stay long`,
        result: `
    
`,
        openness: 7
    }, {
        id: 'opennessMidLow',
        description: `I'm not sure I like visitors.`,
        result: `
    
`,
        openness: 3
    },
    {
        id: 'opennessLow',
        description: `Don't come here. Ever.`,
        result: `
  
`,
        openness: 1
    }]
};
const question5 = {
    id: 'q1',
    title: 'Question 1',
    description:
`If a visitor approaches, are they welcome to your island?`,
    choices: [{
        id: 'opennessHigh',
        description: 'All are welcome and may stay as long as they please.',
        result: `
    
`,
        openness: 10
    }, {
        id: 'opennessMidHigh',
        description: `You can visit but don't stay long`,
        result: `
    
`,
        openness: 7
    }, {
        id: 'opennessMidLow',
        description: `I'm not sure I like visitors.`,
        result: `
    
`,
        openness: 3
    },
    {
        id: 'opennessLow',
        description: `Don't come here. Ever.`,
        result: `
  
`,
        openness: 1
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
    image: 'animal-crossing.png',
    description: `Answer the questions to see with Big Lebowski character you're most like`,
    questions: lebowskiQuestions
};

export default lebowskiQuiz;