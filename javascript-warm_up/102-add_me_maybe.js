function incrementAndCall(number, theFunction) {
  if (number <= 0) {
    return; // Handle invalid input (number should be positive)
  }

  function inner(counter) {
    if (counter > 0) {
      theFunction(counter); // Call the provided function with counter
      inner(counter - 1); // Call itself recursively with decremented counter
    }
  }

  inner(number); // Start the recursion with initial counter
}
