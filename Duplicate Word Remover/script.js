function removeDuplicateWords (s) {
  var arr = s.split(" ");
  for (var i = 0; i < 100; i++) {
    var word = arr[i];
    for (var x = i + 1; x < arr.length; x++) {
      if (arr[x] === word) {
        arr.splice(x, 1);
        x--;
      }
    }
  }
  return arr.join(" ");
}

var generateSentence = function() {
  var arrWords = ["Hat", "Jeb", "Oopsie", "Doopsie", "Lemon", "Squazie", "Unto", "Friend", "Merlon"];
  var arrSentence = [];
  for (var i = 0; i < Math.floor(Math.random() * 20) + 6; i++) {
    arrSentence.push(arrWords[Math.floor(Math.random() * arrWords.length)]);
  }
  return arrSentence.join(" ");
}

var generatedSentence = generateSentence();
var output = removeDuplicateWords(generatedSentence);
console.log("### DUPLICATE WORD REMOVER ###");
console.log(`The Original Sentence Was: ${generatedSentence}\n\nThe New Sentence Is: ${output}`);
