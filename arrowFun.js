function out(){
  let inputs = arguments[0].slice(0);//process.argv.slice(2);
  //console.log(inputs);
  let result = inputs.map(input => input.charAt(0)).reduce((a,b) => a+b+'','');
  let output = '['+inputs.join(',')+']'+' becomes "'+result+'"';
  return output;
}
//out(['asd','asd', 'Hello', 'arrow', 'functions']);
module.exports = out;
