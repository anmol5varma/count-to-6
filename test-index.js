const sum = require('./index');

test('Should add two numbers', function(){
  expect(sum(2,3)).toBe(5);
});
