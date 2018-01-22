console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html() {
  let inputs = arguments[0].slice(0);
  //let in = arguments[0].slice(0);
  let result = '';
  for(let i =1; i < arguments.length; i++){
    result = result + inputs[i-1] + arguments[i];
  }
  result = result + inputs[i-1];
  return result.replaceAll('&' , '&amp;').replaceAll('<' , '&lt;').replaceAll('>' , '&gt;').replaceAll('"' , '&quot;').replaceAll('\'' , '&apos;');
}
