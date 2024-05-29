// modifyMyVar.js
const myVarModule = require("./myVarModule");

// Log the current value of myVar
console.log("Before modification:", myVarModule.getMyVar());

// Modify myVar to 333
myVarModule.setMyVar(333);

// Log the modified value of myVar
console.log("After modification:", myVarModule.getMyVar());
