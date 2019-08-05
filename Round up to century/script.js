var year = Math.floor(Math.random() * 3000) + 1;
var output = Math.ceil(year/100).toString() + "00";
console.log(`The year ${year} rounded up to the nearest century is ${output}`);
