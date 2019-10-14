var words = ["hello", "horse", "dynoma24yto", "r@Zust", "chocolate", "Https", "long johns"];
var word = [];

for (var i = 0; i < 3; i++) {
  word.push(words[Math.ceil(Math.random() * words.length)]);
}
console.log(`Original String: ${word.join("")}`);
word = word.join("").replace(/[^\w]/g, "");

function duplicateCount(text){
  var input = text.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var occured = 0;
  var count = 0;
  for (var i = 0; i < alphabet.length; i++) {
    var occured = 0;
    var letter = alphabet[i];
    for (var x = 0; x < input.length; x++) {
      if (letter === input[x]) occured++;
    }
    if (occured > 1) count++;
  }
  console.log(`Converted String: ${input}`);
  console.log(`Number of Unique Duplicated Characters: ${count}`);
  return count;
}

duplicateCount(word);
console.log("Refresh Page To Generate New Output");
