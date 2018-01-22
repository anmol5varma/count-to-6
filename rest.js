module.exports = function average(...agrs) {
  let total = 0;
  agrs.forEach((value) => {
    total += value;
  });
  const n = agrs.length;
  if (n !== 0) { return total / n; }

  return 0;
};
