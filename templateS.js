// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(arr, ...args) {
  let res = '';
  args.forEach((value) => {
    res = `${res} ${value}`;
  });
  console.log(res);
  // let in = arguments[0].slice(0);

  // let safeString inputs.replaceAll('&' , '&amp;')
  // .replaceAll('<' , '&lt;').replaceAll('>' , '&gt;')
  // .replaceAll('"' , '&quot;').replaceAll('\'' , '&apos;');
}

html(['<b>', ' says</b>: "', '"']);
