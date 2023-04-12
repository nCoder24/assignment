const isEven = function(number) {
  return number % 2 === 0;
}

const selectEvenNumbers = function(numbers) {
  const evenNumbers = [];
  for(const number of numbers) {
    if (isEven(number)) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const selectOddNumbers = function(numbers) {
  const evenNumbers = [];
  for(const number of numbers) {
    if (isOdd(number)) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

exports.selectEvenNumbers = selectEvenNumbers;
