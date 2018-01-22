const out = require('./defarg2');

test('makeImportant("Hey", 5) is Hey!!!!!', () => {
  expect(out('Hey', 5)).toBe('Hey!!!!!');
});

test('makeImportant("Ab") is Ab!!', () => {
  expect(out('Ab')).toBe('Ab!!');
});

test('makeImportant("Ab") is Ab!!', () => {
  expect(out('Ab', undefined)).toBe('Ab!!');
});

test('makeImportant("",5) is !!!!!', () => {
  expect(out('', 5)).toBe('!!!!!');
});

test('makeImportant("") is ', () => {
  expect(out('')).toBe('');
});
