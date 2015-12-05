import test from 'ava';
import { someLogic } from '../';

test('someLogic', t => {
    t.same(someLogic(2), 2);
});
