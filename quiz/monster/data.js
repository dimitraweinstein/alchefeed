import { monsterChar } from './character-data.js';

const question1 = {
    id: 'q1',
    title: 'Question 1',
    description:
        `You come home from leg day and there's a spider right in front of your face! What do you do??`,
    choices: [
        {
            id: 'High',
            description: `We can co-exist!`,
            result: ``,
            points: 10
        }, {
            id: 'MidHigh',
            description: `It's just a little spider, let me help it get outside!`,
            result: ``,
            points: 7
        }, {
            id: 'Mid',
            description: `Run away and hide.`,
            result: ``,
            points: 5
        },
        {
            id: 'MidLow',
            description: `Grab the chancla!`,
            result: ``,
            points: 3
        },
        {
            id: 'Low',
            description: `GRAB THEM BRASS KNUCKS BABY, NOT IN MY HOUSE!`,
            result: ``,
            points: 1
        }
    ]
};
const question2 = {
    id: 'q2',
    title: 'Question 2',
    description: `You wake up late for work, what's the first thing you do?`,
    choices: [
        {
            id: 'High',
            description: `That would never happen, I'm 10 minutes early, always.`,
            result: ``,
            points: 10
        }, {
            id: 'MidHigh',
            description: `Call my manager and apologize as I get ready, obviously.`,
            result: ``,
            points: 7
        }, {
            id: 'Mid',
            description: `Text my coworker and take my time, I'l already late!`,
            result: ``,
            points: 5
        },
        {
            id: 'MidLow',
            description: `Call in sick, there's a reason I woke up late..`,
            result: ``,
            points: 3
        },
        {
            id: 'Low',
            description: `Work? Who has time for work when there's GAINZ to get?!`,
            result: ``,
            points: 1
        }
    ]
};
const question3 = {
    id: 'q3',
    title: 'Question 3',
    description: `Your ex texts you "I miss you.." at 3AM, what are you doing?`,
    choices: [
        {
            id: 'High',
            description: `They're obviously going through it. I need to check on them and ask what's going on! We're still friends, after all!`,
            result: `,
            `,
            points: 10
        }, {
            id: 'MidHigh',
            description: `I'm sleeping but will respond in the morning wishing them well.`,
            result: `,
            `,
            points: 7
        }, {
            id: 'Mid',
            description: `It's a no from me. I'm not going to respond, but I'm happy to know I'm winning the breakup.`,
            result: ``,
            points: 5
        },
        {
            id: 'MidLow',
            description: `I wouldn't get it, they're blocked.`,
            result: `,
            `,
            points: 3
        },
        {
            id: 'Low',
            description: `I'm the one texting at 3AM`,
            result: ``,
            points: 1
        }
    ]
};
const question4 = {
    id: 'q4',
    title: 'Question 4',
    description: `It's Friday night - what's lit?`,
    choices: [
        {
            id: 'High',
            description: `Finishing up some work to make sure I have a head start on Monday!`,
            result: ``,
            points: 10
        }, {
            id: 'MidHigh',
            description: `Meeting up with some vaccinated friends and going to the bar!`,
            result: ``,
            points: 7
        }, {
            id: 'Mid',
            description: `I have a lot of plans, just waiting for the last minute to cancel.`,
            result: ``,
            points: 5
        },
        {
            id: 'MidLow',
            description: `Binge watching this new show I started!`,
            result: ``,
            points: 3
        },
        {
            id: 'Low',
            description: `EVERYDAY IS FRIDAY! We gettin' LIT and causing TROUBLE!`,
            result: ``,
            points: 1
        }
    ]
};
const question5 = {
    id: 'q5',
    title: 'Question 1',
    description: `Nickleback?`,
    choices: [
        {
            id: 'High',
            description: `You're entitled to like whatever band you like!`,
            result: ``,
            points: 10
        }, {
            id: 'MidHigh',
            description: `*cringe*`,
            result: ``,
            points: 7
        }, {
            id: 'Mid',
            description: `At least it's not Creed.`,
            result: ``,
            points: 5
        },
        {
            id: 'MidLow',
            description: `Who is Nickleback?`,
            result: ``,
            points: 3
        },
        {
            id: 'Low',
            description: `That's my favorite band!`,
            result: ``,
            points: 1

        }
    ]
};

const monsterQuestions = [
    question1,
    question2,
    question3,
    question4,
    question5
];

const monsterQuiz = {
    id: 'monster',
    title: `What flavor Monster Energy are you?`,
    image: './assets/monster/monster-main.png',
    description: `Answer the questions to see what kind of monster you're most like`,
    questions: monsterQuestions,
    style: './monster/style.css',
    char: monsterChar
};

export default monsterQuiz;