const out = require('./rest');

test('average(1, 2, 3) is 2', () => {
  expect(out(1, 2, 3)).toBe(2);
});

test('average(1.1, 2.1, 3.1) is 2.1', () => {
  expect(out(1.1, 2.1, 3.1)).toBe(2.1);
});

test('average(1.1, 2.1, 3.1) is 2.1', () => {
  expect(out(1.1, 2.1, 3)).toBe(6.2 / 3);
});

test('average(0.1, 0.2) is 0.15', () => {
  expect(out(0.1, 0.2)).toBe(0.15);
});// how to check for flaot values
