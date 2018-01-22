const out = require('./defarg');

test('midpoint(1, 2) is 1.5', function(){
  expect(out(1,2)).toBe(1.5);
});

test('average(1.1) is 1.05', function(){
  expect(out(1.1)).toBe(1.05);
});

test('average(undefined,0) is 0', function(){
  expect(out(undefined,0)).toBe(0);
});

test('average(0.1, 0.2) is 0.15', function(){
  expect(out(0.1, 0.2)).toBe(0.15);
});//how to check for flaot values

test('average(undefined,null) is 0', function(){
  expect(out(undefined,0)).toBe(0);
});
