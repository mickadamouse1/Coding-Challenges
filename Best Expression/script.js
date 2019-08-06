var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 10);
var c = Math.floor(Math.random() * 10);

function expressionMatter(a, b, c) {
  var arr = [];
  var biggest = 0;
  arr.push(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}

var output = expressionMatter(a, b, c);
console.log(output);
