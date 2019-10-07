console.log("##### Character Frequency #####");
console.log("This program takes a sentence, \nremoves all special characters \nand spacing then counts the \nfrequency of each character \nbefore ordering them into an \narray in order of most \nfrequent character.");
var words = ["hello", "horse", "dynoma24yto", "r@Zust", "chocolate", "Https", "long johns"];

var text = [];

for (var i = 0; i < 5; i++) {
  text.push(words[Math.ceil(Math.random() * words.length)]);
}

var sentence = text.join(" ");

function letterFrequency(text){
  var alphabet = "abcdefghijklmnopqrstuvwyz";
  var txt = text.toLowerCase();
  txt = txt.replace(/[^\w]/gi, '');
  txt = txt.split("");

  var arr = [];

  for (var i = 0; i < alphabet.length; i++) {
    var count = 0;
    for (var x = 0; x < txt.length; x++) {
      if (alphabet[i] === txt[x]) {
        count++;
      }
    }
    if (count) {
      var arrTemp = [alphabet[i], count];
      arr.push(arrTemp);
    }
  }

  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr.length - 1; x++) {
      if (arr[x][1] < arr[x+1][1]) {
        var num = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = num;
      }
    }
  }
  return arr;
}

var output = letterFrequency(sentence);
console.log(output);
