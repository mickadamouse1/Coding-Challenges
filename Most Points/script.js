var arr = [];
var points = Math.floor(Math.random() * 100);
for (var i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

function betterThanAverage(classPoints, yourPoints) {
  var num = 0;
  for (var i = 0; i < classPoints.length; i++) {
    num += classPoints[i];
  }
  var averageNum = Math.floor(num / classPoints.length);
  console.log(`Your points: ${yourPoints}`);
  console.log(`Average points points: ${averageNum}`);
  if (yourPoints > averageNum) {
    console.log(`You had ${yourPoints - averageNum} more points!`);
    return true;
  }
  console.log(`They had ${averageNum - yourPoints} more points!`);
  return false;
}

var output = betterThanAverage(arr, points);
