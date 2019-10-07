console.log("##### Space Remover #####");
console.log("\n");

var arrRnd = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = [];

for (var i = 0; i < Math.ceil(Math.random() * 100); i++) {
  var l = letters.length;
  var rng = Math.ceil(Math.random() * l);
  if (rng % 2 == 0) {
    arrRnd.push(letters[rng]);
  } else {
    arrRnd.push(" ");
  }

  var x = arrRnd.join("");
}
console.log(`With Spaces: ${x}`);

function removeSpace(x) {
  return x.split(" ").join("");
}

var output = removeSpace(x);
console.log("\n");
console.log(`Without Spaces: ${output}`);
