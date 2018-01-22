module.exports = function makeImportant(arg, res) {
  let len = res;
  if (typeof res === 'undefined') {
    len = arg.length;
  }
  // console.log(arg, res);
  return arg.concat('!'.repeat(len));
};
