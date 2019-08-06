var count = Math.floor(Math.random() * 50);

var countSheep = function (num){
  var arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(`${i} Sheep... `);
  }
  return arr.join("");
}

var output = countSheep(count);
console.log(`If you can't sleep, count ${output}and sleep...`);
