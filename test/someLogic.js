import test from 'ava';
import someLogic from '../lib/someLogic';

test('someLogic', t => {
  t.same(someLogic(2), 2);
});
