var txtOutput = document.getElementById("txtOutput");

var arr = [];
var l = Math.ceil(Math.random() * 3) + 3;
var text = "";

for (var i = 0; i < l; i++) {
  arr.push(Math.ceil(Math.random() * 10) + 1);
  var to = arr[i].toString();
  if (i < (l-1)) {
    text = text + `${to} * `;
  } else {
    text = text + `${to} = `;
  }
}

function grow(x){
 var num = x[0];
 for (var i = 1; i < x.length; i++) {
   num = num * x[i]
 }
 return num;
}

var output = grow(arr);
txtOutput.innerHTML = (text + output);
