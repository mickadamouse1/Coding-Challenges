  var generatedArray = [];
  var arr = [];
  for (var i = 0; i < 7; i++) {
    generatedArray.push(Math.floor(Math.random() * 100) +1);
  }

  values = generatedArray;
  values = values.sort(function(a, b){return a-b});

  while (values.length != 0) {
    if (arr.length == 0) {
      arr.push(values[0]);
    } else if ((arr.length % 2) == 1) {
      arr.push(values[0]);
    } else {
      arr.unshift(values[0]);
    }
    values.shift();
  }

  console.log("This is a pendulum effect.\nIt starts with the smallest number at the centre and grows outwords.\nE.g. (right, left, right left).");
  console.log(arr.join(" - "));
