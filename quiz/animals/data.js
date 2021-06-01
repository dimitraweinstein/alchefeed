const question1 = {
    id: 'q1',
    title: 'Question 1',
    description:
    `When it comes to island getaway life how willings are you to take on new experiences?`,
    choices: [{
        id: 'opennessHigh',
        description: 'I go where the wind blows',
        result: `
        
    `,
        openness: 10
    }, {
        id: 'opennessMidHigh',
        description: `I know what I like but im willing to try something new on occasions`,
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
        description: `Bugs?! Ewww`,
        result: `
      
  `,
        openness: 1
    }]
};
const question2 = {
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
    questions: animalQuestions
};

export default animalQuiz;