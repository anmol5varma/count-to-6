const array = require('./arrowFun');

test('[Hello,arrow,functions] becomes "Haf"', function(){
  expect(array.out(['Hello', 'arrow', 'functions'])).toBe('Haf');
});
