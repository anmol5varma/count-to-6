module.exports = function average(...agrs) {
  let total = 0;
  agrs.forEach( function(value){
    total = total + value;
  });
  let n = agrs.length;
  if(n != 0)
    return total/n;
  else {
    return 0;
  }
};
