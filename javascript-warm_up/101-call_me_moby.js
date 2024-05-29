function repeat(x, theFunction) {
    if (x <= 0) {
      return; // Handle invalid input (x should be positive)
    }
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
  