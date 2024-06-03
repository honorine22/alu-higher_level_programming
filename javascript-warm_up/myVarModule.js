let myVar = 0;

function getMyVar () {
  return myVar;
}

function setMyVar (newValue) {
  myVar = newValue;
}

module.exports = {
  getMyVar,
  setMyVar
};
