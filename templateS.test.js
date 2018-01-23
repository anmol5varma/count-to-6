const myVar = require('./templateS');

test(' becomes "Haf"', () => {
  expect(myVar.html`<b></b>`).toBe('[Hello,arrow,functions] becomes "Haf"');
});
