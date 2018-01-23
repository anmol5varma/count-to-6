function nowSafe(word) {
  // console.log(typeof word);
  // console.log(word);
  const res = word.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
  return res;
}

function html(arr, username, comment) {
  const safeString = arr[0] + nowSafe(username) + arr[1] + nowSafe(comment) + arr[2];
  // console.log(safeString);
  return safeString;
}
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

module.exports = { html, nowSafe };
// html(['<b>', ' says</b>: "', '"']);
