const question1 = {
    id: 'q1',
    title: 'Question 1',
    description:
        `You come home from leg day and there's a spider right in front of your face! What do you do??`,
    choices: [
        {

            id: 'opennessHigh',
            description: `We can co-exist!`,
            result: ``,
            openness: 10
        }, {
            id: 'opennessMidHigh',
            description: `It's just a little spider, let me help it get outside!`,
            result: ``,
            openness: 7
        }, {
            id: 'opennessMid',
            description: `Run away and hide.`,
            result: ``,
            openness: 5
        },
        {
            id: 'opennessMidLow',
            description: `Grab the chancla!`,
            result: ``,
            openness: 3
        },
        {
            id: 'opennessLow',
            description: `GRAB THEM BRASS KNUCKS BABY, NOT IN MY HOUSE!`,
            result: ``,
            openness: 1
        }
    ]
};
const question2 = {
    id: 'q2',
    title: 'Question 2',
    description: `You wake up late for work, what's the first thing you do?`,
    choices: [
        {
            id: 'conscientiousnessHigh',
            description: `That would never happen, I'm 10 minutes early, always.`,
            result: ``,
            conscientiousness: 10
        }, {
            id: 'conscientiousnessMidHigh',
            description: `Call my manager and apologize as I get ready, obviously.`,
            result: ``,
            conscientiousness: 7
        }, {
            id: 'conscientiousnessMid',
            description: `Text my coworker and take my time, I'l already late!`,
            result: ``,
            conscientiousness: 5
        },
        {
            id: 'opennessMidLow',
            description: `Call in sick, there's a reason I woke up late..`,
            result: ``,
            conscientiousness: 3
        },
        {
            id: 'conscientiousnessLow',
            description: `Work? Who has time for work when there's GAINZ to get?!`,
            result: ``,
            conscientiousness: 1
        }
    ]
};
const question3 = {
    id: 'q3',
    title: 'Question 3',
    description: `Your ex texts you "I miss you.." at 3AM, what are you doing?`,
    choices: [
        {
            id: 'neuroticismHigh',
            description: `They're obviously going through it. I need to check on them and ask what's going on! We're still friends, after all!`,
            result: `,
            `,
            neuroticism: 10
        }, {
            id: 'neuroticismMidHigh',
            description: `I'm sleeping but will respond in the morning wishing them well.`,
            result: `,
            `,
            neuroticism: 7
        }, {
            id: 'neuroticismMid',
            description: `It's a no from me. I'm not going to respond, but I'm happy to know I'm winning the breakup.`,
            result: ``,
            neuroticism: 5
        },
        {
            id: 'neuroticismMidLow',
            description: `I wouldn't get it, they're blocked.`,
            result: `,
            `,
            neuroticism: 3
        },
        {
            id: 'neuroticismLow',
            description: `I'm the one texting at 3AM`,
            result: ``,
            neuroticism: 1

        }
    ]
};
const question4 = {
    id: 'q4',
    title: 'Question 4',
    description: `It's Friday night - what's lit?`,
    choices: [
        {
            id: 'extraversionHigh',
            description: `Finishing up some work to make sure I have a head start on Monday!`,
            result: ``,
            extraversion: 10
        }, {
            id: 'extraversionMidHigh',
            description: `Meeting up with some vaccinated friends and going to the bar!`,
            result: ``,
            extraversion: 7
        }, {
            id: 'extraversionMid',
            description: `I have a lot of plans, just waiting for the last minute to cancel.`,
            result: ``,
            extraversion: 5
        },
        {
            id: 'extraversionMidLow',
            description: `Binge watching this new show I started!`,
            result: ``,
            extraversion: 3
        },
        {
            id: 'extraversionLow',
            description: `EVERYDAY IS FRIDAY! We gettin' LIT and causing TROUBLE!`,
            result: ``,
            extraversion: 1
        }
    ]
};
const question5 = {
    id: 'q5',
    title: 'Question 1',
    description: `Nickleback?`,
    choices: [
        {
            id: 'agreeablenessHigh',
            description: `You're entitled to like whatever band you like!`,
            result: ``,
            agreeableness: 10
        }, {
            id: 'agreeablenessMidHigh',
            description: `*cringe*`,
            result: ``,
            agreeableness: 7
        }, {
            id: 'agreeablenessMid',
            description: `At least it's not Creed.`,
            result: ``,
            agreeableness: 5
        },
        {
            id: 'agreeablenessMidLow',
            description: `Who is Nickleback?`,
            result: ``,
            agreeableness: 3
        },
        {
            id: 'agreeablenessLow',
            description: `That's my favorite band!`,
            result: ``,
            agreeableness: 1

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
    image: 'assets/monster/monster-main.png',
    description: `Answer the questions to see what kind of monster you're most like`,
    questions: monsterQuestions
};

export default monsterQuiz;