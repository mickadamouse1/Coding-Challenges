var divideNum = Math.ceil(Math.random() * 10);
var boundry = Math.ceil(Math.random() * 100) + 10;

function maxMultiple(divisor, bound){
  var num = divisor;
  for (var i = 0; num <= bound; i++) {
    num = divisor * i;
  }
  return num - divisor;
}

var output = maxMultiple(divideNum, boundry);
console.log(`${output} is the highest multiple of ${divideNum} that remains smaller than ${boundry}`);
