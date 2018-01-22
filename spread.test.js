const out = require('./spread');

test('The minimum of [18,5,7,24] is 5', () => {
  expect(out([18, 5, 7, 24])).toBe(5);
});

test('The minimum of [-18,5,7,24] is -5', () => {
  expect(out([-18, 5, 7, 24])).toBe(-18);
});

test('The minimum of [24] is 24', () => {
  expect(out([24])).toBe(24);
});

test('The minimum of [] is 0', () => {
  expect(out([])).toBe(0);
});
