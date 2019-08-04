var arr = [];

for (var i = 0; i < 5; i++) {
  arr.push(Math.floor((Math.random() * 99) + 1));
}

console.log(arr);

console.log(Math.min(...arr));
