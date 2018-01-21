const dest = require('./destruct');

test('Able to extract username and email', function(){
  expect(JSON.stringify(dest([1,'anmol', 'anmol5varma@gmail.com', 21, 'anmol', 'varma']))).toBe('{"username":"anmol","email":"anmol5varma@gmail.com"}');
});

test('Able to extract username and email', function(){
  expect(JSON.stringify(dest([1,'', '', 21, 'anmol', 'varma']))).toBe('{"username":"","email":""}');
});

test('Able to extract username and email', function(){
  expect(JSON.stringify(dest([1, 'ANMOL', 'adssdadas', 21, 'anmol', 'varma']))).toBe('{"username":"ANMOL","email":"adssdadas"}');
});
