import { monsterFlavors } from './character-data.js';
import { getUser } from '../../utils/local-Storage-utils.js';



export function getCharacter() {
    const user = getUser();
    const score = user.score;
    if (score >= 40) {
        return monsterFlavors[0].id ; //grab character data js of the quiz and grab the character for that ID
    }
    if (39 >= score >= 30) {
        return monsterFlavors[1].id;
    }
    if (29 >= score >= 20) {
        return monsterFlavors[2].id;
    }
    if (19 >= score >= 10) {
        return monsterFlavors[3].id;
    }
    else return monsterFlavors[4].id;
}