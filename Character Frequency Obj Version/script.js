const letters = "abcdefghijklmnopqrstuvwxyz";
var randomText = "";
for (var i = 0; i < Math.ceil(Math.random() * 10); i++) {
  randomText = randomText + letters[Math.floor(Math.random() * letters.length)];
}

const x = count(randomText)
console.log(x);

function count (string) {
  const arr = string.split("");
  const letters = [...new Set(arr)].sort();
  var count = 0;
  var obj = {};

  for (var i = 0; i < 2; i++) {
    var letter = letters[i]
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] === letters[i]) count++;
    }

    if (count > 0 && Object.keys(obj).length === i) {
      obj[letter] = count;
      count = 0;
      }
  }
  return obj;
}
