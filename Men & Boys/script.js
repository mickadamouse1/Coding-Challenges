console.log("##### MEN & BOYS APP #####");
console.log("Men are even numbers and boys are odd numbers. \nSplit even numbers from odd numbers. \nEven numbers come first in ascending order. \nMeanwhile odd come last in descing order. \nThese rules are reversed if the number is negative.\n\n");

var arrGenerate = [];
for (var i = 0; i < Math.floor(Math.random() * 15) + 5; i++) {
  arrGenerate.push(Math.floor(Math.random() * 100) - 50);
}

console.log(`Array: ${arrGenerate.join(", ")}`);

function menFromBoys(arr){
  var arrMen = [];
  var arrMenMinus = [];
  var arrBoys = [];
  var arrBoysMinus = [];

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (arr[i] < 0) {
        arrMenMinus.push(arr[i]);
      } else {
        arrMen.push(arr[i]);
      }
    } else {
      if (arr[i] < 0) {
        arrBoysMinus.push(arr[i]);
      } else {
        arrBoys.push(arr[i]);
      }
    }
  }
  arrMenMinus.sort(function(a,b){return a-b});
  arrMen.sort(function(a,b){return a-b});
  arrBoys.sort(function(a,b){return b-a});
  arrBoysMinus.sort(function(a,b){return b-a});

  if (arrMenMinus.length === 0) {console.log(`Even Negative Array: N/A`);} else {console.log(`Even Negative Array: ${arrMenMinus.join(", ")}`);}
  if (arrMen.length === 0) {console.log(`Even Positive Array: N/A`);} else {console.log(`Even Positive Array: ${arrMen.join(", ")}`);}
  if (arrBoys.length === 0) {console.log(`Odd Positive Array: N/A`);} else {console.log(`Odd Positive Array: ${arrBoys.join(", ")}`);}
  if (arrBoysMinus.length === 0) {console.log(`Odd Negative Array: N/A`);} else {console.log(`Odd Negative Array: ${arrBoysMinus.join(", ")}`);}

  var arrSorted = arrMenMinus.concat(arrMen);
  arrSorted = arrSorted.concat(arrBoys);
  arrSorted = arrSorted.concat(arrBoysMinus);
  arrSorted = [...new Set(arrSorted)];
  return arrSorted;
}

var output = menFromBoys(arrGenerate);
output = output.join(", ");
console.log(`Sorted Array: ${output}`);
