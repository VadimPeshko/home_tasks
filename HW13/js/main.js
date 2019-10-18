let msg = +prompt('Enter your number');
let numbers = [];
let str = msg.toString();

for(let i = 0; i < str.length; i++){
  numbers.push(+str.charAt(i));
}

console.log(numbers);

