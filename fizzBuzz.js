function fizzBuzz(num1, num2) {
  //write your code here
  const end = Math.max(num1, num2);
  const start = Math.min(num1, num2);
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

fizzBuzz(1, 5);

module.exports = fizzBuzz