// IMPORT MODULES under test here:
import { addScore, getUser, setUser } from '../utils/local-Storage-utils.js';

const test = QUnit.test;

test('addScore should update users score', (expect) => {

    let user = { lebowski: { score: 42 } };
    setUser(user);

    addScore('lebowski', 10);
    user = getUser();

    expect.equal(user.lebowski.score, 52);
});
