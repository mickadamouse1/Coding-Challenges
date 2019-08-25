console.log("##### PRODUCT OR SUM APP ######");
console.log("This application takes an array of numbers \nand sums up the biggest numbers, \nmultiplies the smallest numbers and then \ncompares the two numbers. Sum or Product is \nprinted depending on which number is largest. \nSame is printed if the numbers are the same.\n\n\n");
var arr = [];
var num = Math.floor(Math.random() * 6);
for (var i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log(`Array: ${arr}`);

function sumOrProduct(array, n) {
  console.log(`Amount of numbers operated on: ${n}`);
  array.sort(function(a,b){return a-b});
  var sum = 0;
  var product = array[0];

  console.log(`Array for multiplication: ${array}`);

  for (var i = 1; i < n; i++) {
    product = array[i] * product;
  }

  array.sort(function(a,b){return b-a});
  console.log(`Array for addition: ${array}`);

  for (var i = 0; i < n; i++) {
    sum = sum + array[i];
  }

  console.log(`The Product: ${product}`);
  console.log(`The Sum: ${sum}`);

  if (sum === product) {
    console.log(`They are equal.`);
  } else if (sum > product) {
    console.log(`The sum is largest.`);
  } else {
    console.log(`The product is largest.`);
  }
}

sumOrProduct(arr, num);
