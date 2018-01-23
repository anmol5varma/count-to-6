const res = require('./arrowFunT');

test('An object is returned', () => {
  expect(typeof res).toBe('object');
});

test('An object is returned with property kick', () => {
  expect(Object.hasOwnProperty.call(res, 'kick')).toBe(true);
});

test('An object is returned with property kick which is a function', () => {
  expect(typeof res.kick).toBe('function');
});
