let getNumbers = (x, y) => {
  for (let i = x; i < y; i++) {
    console.log(i);
  }
}

let getEven = (x, y) => {
  for (let i = x; i < y; i++) {
    if (i % 2 === 0) {
      console.log(`Even number - ${i}`)
    }
  }
}

let getFactorial = (x) => {
  let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact *= i;
  }
  console.log(`Factorial ${x} = ${fact}`);
}

let isNumberInRange = (x) => {
  return (x > 0 && x < 10) ? console.log(true) : console.log(false);
}

let getDigitsSum = (x) => {
  let numbers = [];
  let str = x.toString();
  let sum = 0;
  for(let i = 0; i < str.length; i++){
    numbers.push(+str.charAt(i));
  }
  numbers.forEach(element => {
    sum += element;
  })
  console.log(`Sum of numbers = ${sum}`);
  console.log(numbers);
}

getNumbers(0, 10);
getEven(1, 10);
getFactorial(5);
isNumberInRange(20);
getDigitsSum(14);