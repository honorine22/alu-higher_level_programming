#!/usr/bin/node
function createCounter() {
  let value = 0; // Using let instead of var for block-scoped variable

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  function incr() {
    value += 1;
  }

  return {
    getValue: getValue,
    setValue: setValue,
    incr: incr,
  };
}

const counter = createCounter();
console.log(counter.getValue()); // 0
counter.incr();
console.log(counter.getValue()); // 1
counter.setValue(5);
console.log(counter.getValue()); // 5
counter.incr();
console.log(counter.getValue()); // 6
