console.log("##### SIMPLE CUBE AREA MEASUREMENT APP #####");
console.log("Calculates the area based on two given numbers. \nThese numbers are gathered by multiplying values \nin two different arrays and then subtracting \nthe smallest number from the largest.\n\n");

var arr1 = [];
var arr2 = [];

for (var i = 0; i < 3; i++) {
  arr1.push(Math.floor(Math.random() * 15) + 1);
  arr2.push(Math.floor(Math.random() * 15) + 1);
}

var txtArr1 = arr1.join(", ");
var txtArr2 = arr2.join(", ");
console.log(`First Array: ${txtArr1}`);
console.log(`Second Array: ${txtArr2}`);

function findDifference(a, b) {
  var num1 = a[0];
  var num2 = b[0];
  for (var i = 1; i < 3; i++) {
    num1 = num1 * a[i];
    num2 = num2 * b[i];
  }

  console.log(`First Number: ${num1}`);
  console.log(`Second Number: ${num2}`);

  if (num1 > num2) {
    return num1 - num2
  }
  return num2 - num1;
}

var output = findDifference(arr1, arr2);
console.log(`Output: ${output}`);
