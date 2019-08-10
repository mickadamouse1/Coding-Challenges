var names = ["Phillip", "Jonny", "Frank", "Suzie", "Liu", "Mitsuhara", "O'Riely", "McDonnal", "Horris", "Reol"];
var day = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = Math.floor(Math.random() * 3000) + 1000;
var gender = ["M", "F"];

var arr = [];
arr.push(names[Math.floor(Math.random() * names.length)]);
arr.push(names[Math.floor(Math.random() * names.length)]);
arr.push(names[Math.floor(Math.random() * names.length)]);
arr.push(generateDate());

function generateDate() {
  var date = "";
  date = date + day[Math.floor(Math.random() * day.length)];
  date = date + "-";
  date = date + month[Math.floor(Math.random() * month.length)];
  date = date + "-";
  date = date + year.toString();
  return date;
}

function driver(data) {
  var license = "";
  var arrDate = data[3].split("-");

// Adds name
  var name = data[2].toUpperCase().substring(0,5);
  while (name.length < 5){
    name = name + "9";
  }
  license = license + name;

  // Adds year of birth
  var decade = arrDate[2].substring(2,3);
  license = license + decade;

  // Adds month of birth
  var month = arrDate[1].substring(0,3).toLowerCase();
  switch (month) {
    case "jan":
      month = "01";
      break;
    case "feb":
      month = "02";
      break;
    case "mar":
      month = "03";
      break;
    case "apr":
      month = "04";
      break;
    case "may":
      month = "05";
      break;
    case "jun":
      month = "06";
      break;
    case "jul":
      month = "07";
      break;
    case "aug":
      month = "08";
      break;
    case "sep":
      month = "09";
      break;
    case "oct":
      month = "10";
      break;
    case "nov":
      month = "11";
      break;
    case "dec":
      month = "12";
      break;
  }
  if (data[4] === "F") {
    month = (Number(month) + 50).toString();
  }
  license = license + month;

  // Adds day of birth
  var day = arrDate[0];
  license = license + day;

  // Adds year
  var year = arrDate[2].substring(3);
  license = license + year;

  // Adds initials
  var firstInitial = data[0].substring(0,1);
  var secondInitial = data[1].substring(0,1);
  if (!secondInitial) {
    secondInitial = "9";
  }
  if (!firstInitial) {
    firstInitial = "9";
  }
  license = license + (firstInitial + secondInitial);

  // Adds arbitrary digit
  license = license + "9";

  // Adds two computer check digits
  license = license + "AA";

  return license;
}

console.log(`Details: ${arr.join(" ")}`);
console.log(`Generated License: ${driver(arr)}`);
