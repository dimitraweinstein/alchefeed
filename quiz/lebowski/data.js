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
    description: `How willing are you to help a friend in need?`,
    choices: [{
        id: 'agreeablenessHigh', //Dude
        description: `She's not my special lady friend, man. I'm just helping her conceive.`,
        agreeableness: 10
    }, {
        id: 'agreeablenessMidHigh', //Donny
        description: `Phone's ringin, Dude.`,
        agreeableness: 7
    }, {
        id: 'agreeablenessMidLow', //Walter
        description: `You Want A Toe? I Can Get You A Toe.`,
        agreeableness: 5
    }, {
        id: 'agreeablenessMidLow', //Bunny
        description: `Blow on them.`,
        agreeableness: 3
    }, {
        id: 'agreeablenessLow', //Jesus
        description: `What's this day of rest sh*t?! What's this bullshit? I don't f***in care! It don't matter to Jesus. `,
        agreeableness: 1
    }]
};
const question5 = {
    id: 'q5',
    title: 'Question 5',
    description: `How well do you hold up under pressure?`,
    choices: [{
        id: 'neuroticisimHigh', //Dude
        description: `I mean we totally f***ed it up man, we f***ed up this payoff, we got the kidnappers all mad at us, and Lebowski, ya know, he yelled at me a lot...`,
        neuroticisim: 10
    }, {
        id: 'neuroticisimMidHigh', //Donny
        description: `I was bowling.`,
        neuroticisim: 7
    }, {
        id: 'neuroticisimMid', //Walter
        description: `Just because we're bereaved doesn't make us saps!`,
        neuroticisim: 5
    }, {
        id: 'neuroticisimMidLow', //Bunny
        description: `Brandt can't watch or he has to pay a hundred.`,
        neuroticisim: 3
    }, {
        id: 'neuroticisimLow', //Jesus
        description: `Let me tell you something, pendejo. You pull any of your crazy shit with us, you flas a piece out on the lanes, I'll take it away from you, stick it up your ass and pull the f***ing trigger 'til it goes "click".`,
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