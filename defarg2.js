module.exports = function makeImportant(arg,res){
  if(typeof res === 'undefined')
    res = arg.length;
  //console.log(arg,res);
  return arg.concat('!'.repeat(res));
};
