console.log("##### ALPHABET ADDITION #####");
console.log("This app generates a random array of letters \nand then adds them together to equate to a new letter.\n\nExample:\nA = 1.\nB = 2.\nC = 3.\nA, B, C = 6.\nF = 6\nOutput = F.\n\n");

function generateLetters() {
  var arrAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var arrRandomLetters = [];

  for (var i = 0; i < 5; i++) {
    arrRandomLetters.push(arrAlphabet[Math.floor(Math.random() * arrAlphabet.length)]);
  }

  console.log(`Generated Letters: ${arrRandomLetters.join(", ")}`);
  return addLetters(arrRandomLetters);
}

function addLetters(letters) {
  var arrLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var addedNum = 0;

  for (var i = 0; i < letters.length; i++){
    for (var x = 0; x < arrLetters.length; x++){
      var index = arrLetters.indexOf(letters[i]);
    }
    addedNum += (index + 1);
  }
  if (addedNum > 26) {
    while (addedNum > 26) {
      addedNum -= 26;
    }
  }

  addedNum -= 1;

  if (addedNum === -1) return "z";
  return arrLetters[addedNum];
}

var output = generateLetters();
console.log(`Output: ${output.toUpperCase()}`);
