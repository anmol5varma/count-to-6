const res = require('./arrowFunT');

test('An object is returned', function(){
  expect(typeof res).toBe('object');
});

test('An object is returned with property kick', function(){
  expect(Object.hasOwnProperty.call(res, 'kick')).toBe(true);
});

test('An object is returned with property kick which is a function', function(){
  expect(typeof res.kick).toBe('function');
});
