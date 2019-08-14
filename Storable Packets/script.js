var max = Math.floor(Math.random() * 100) + 1;
var arrRnd = [];
for (var i = 0; i < 10; i++) {
  arrRnd.push(Math.floor(Math.random() * 20) + 1);
}

function save(sizes, hd) {
  var num = hd;
  var times = 0;
  for (var i = 0; i < sizes.length; i++) {
    num = num - sizes[i];
    times++;
    if (num == 0){
      return times;
    } else if (num < 0) {
      return times - 1;
    }
  }
  return times;
}

var output = save(arrRnd, max);
console.log(`Data Packet: ${arrRnd}`);
console.log(`Disk Size: ${max}`);
console.log(`Storable Amount: ${output}`);
