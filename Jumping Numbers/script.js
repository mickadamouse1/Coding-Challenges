function jumpingNumber(n){
  if (n <= 10) {
    return false;
  }

  var current, next;

  var arr = n.toString().split("");

  for (var i = 0; i < arr.length - 1;i++) {
    current = arr[i];
    next = arr[i + 1];
    if (current != next - 1 && current != next) {
      if (next != current - 1) {
        return true;
      }
    }
  }
  return false;
}

for (var i = 0; i < 25; i++) {
  var num = Math.floor(Math.random() * 100);
  var isJump = jumpingNumber(num);
  if (isJump) {
    console.log(`${num} jumps a number!`);
  } else {
    console.log(`${num} doesn't jump a number!`);
  }
}
