import {test, expect} from 'vitest'

import {sum} from './sum'

test('sum(1,1) should return 2', () => {
    expect(sum(1,1)).toBe(2);
});
