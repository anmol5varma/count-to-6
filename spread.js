function minArray(){
  let input = arguments[0].slice(0);
  let result = Math.min(...input);
  console.log('The minimum of [' + input + '] is ' + result);
  return result;
}

module.exports = minArray;
