var monday = [],
tuesday =    [],
wednesday =  [],
thursday =   [],
friday =     [],
saturday =   [],
sunday =     [];

var stairs = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

for (var i = 0; i < stairs.length; i++) {
  for (var x = 0; x < 50; x++) {
    stairs[i].push(Math.floor(Math.random() * 10000));
  }
}

for (var i = 0; i < stairs.length; i++) {
  var y = 0;
  for (var x = 0; x < stairs[i].length; x++) {
    y += stairs[i][x];
  }
  switch (i) {
    case 0: console.log(`${y} stairs were walked on Mondays.`);
      break;
    case 1: console.log(`${y} stairs were walked on Tuesdays.`);
      break;
    case 2: console.log(`${y} stairs were walked on Wednesdays.`);
      break;
    case 3: console.log(`${y} stairs were walked on Thursdays.`);
      break;
    case 4: console.log(`${y} stairs were walked on Fridays.`);
      break;
    case 5: console.log(`${y} stairs were walked on Saturdays.`);
      break;
    case 6: console.log(`${y} stairs were walked on Sundays.`);
      break;
  }
}

function stairsIn20(s){
  var num = 0;
  for (var i = 0; i < s.length; i++) {
    for (var x = 0; x < s[i].length; x++) {
      num += s[i][x];
    }
  }
  var inYear = num;
  var in20 = num * 20;
  console.log(`The overall number of stairs walked in a year are ${inYear}`);
  console.log(`The overall number of stairs walked in 20 years are ${in20}`);
}

stairsIn20(stairs);
