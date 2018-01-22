function minArray(...arg) {
  const input = arg[0].slice(0);
  if (input.length === 0) { return 0; }
  const result = Math.min(...input);
  console.log(`The minimum of [${input}] is ${result}`);
  return result;
}

module.exports = minArray;
