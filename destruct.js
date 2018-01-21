function dest(){
  let userArray = arguments[0].slice(0);//process.argv.slice(2);
  // console.log(userArray);
  let userObject = {};
  [ , userObject.username, userObject.email] = userArray;
  // console.log(userObject);
  return userObject;
}

module.exports = dest;
