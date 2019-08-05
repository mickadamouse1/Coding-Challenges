var countBy = Math.floor(Math.random() * 99) + 1;

function count(by, times) {
  console.log(`Counting up by ${by}, ${times} times.`);
  var arr = [];
  for (var i = 1; i <= times; i++) {
    arr.push(by * i);
  }
  return arr;
}

console.log(count(countBy, 5));
