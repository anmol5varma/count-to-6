const out = require('./arrowFun');

test('[Hello,arrow,functions] becomes "Haf"', function(){
  expect(out(['Hello', 'arrow', 'functions'])).toBe('[Hello,arrow,functions] becomes "Haf"');
});

test('[1,2,3] becomes "123"', function(){
  expect(out(['1', '2', '3'])).toBe('[1,2,3] becomes "123"');
});

test('[,arrow,functions] becomes "af"', function(){
  expect(out(['', 'arrow', 'functions'])).toBe('[,arrow,functions] becomes "af"');
});

test('[undefined,arrow,functions] becomes "uaf"', function(){
  expect(out(['uello', 'arrow', 'functions'])).toBe('[uello,arrow,functions] becomes "uaf"');
});
