var arrEng = [undefined,
  undefined,  undefined,  undefined,  undefined, undefined, 'SOS', '!', undefined, undefined, 'T', 'H', 'E', undefined, undefined, 'Q', 'U', 'I', 'C', 'K', undefined, undefined, 'B', 'R', 'O', 'W', 'N', undefined, undefined, 'F', 'O', 'X', undefined, undefined, 'J', 'U', 'M', 'P', 'S', undefined, undefined, 'O', 'V', 'E', 'R', undefined, undefined, 'T', 'H', 'E', undefined, undefined, 'L', 'A', 'Z', 'Y', undefined, undefined, 'D', 'O', 'G', '.', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var word = [];
var words = [];

while (arrEng.length > 0) {
  if (arrEng[0] === undefined) {
    arrEng.splice(0,1);
  } else {
    var index = arrEng.indexOf(undefined);
    if (index === -1) {
      word = arrEng.slice(0);
      words.push(word.join(""));
      arrEng.splice(0, arrEng.length);
    } else {
      word = arrEng.slice(0, index);
      words.push(word.join(""));
      arrEng.splice(0, index);
    }
  }
}

words = words.join(" ");
console.log(words);

//
