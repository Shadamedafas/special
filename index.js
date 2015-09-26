var fs = require('fs');

// Constants
var TOTAL_POINTS = 28;

// Initial values
var pointsPool = TOTAL_POINTS;
var special = [
  {
    attribute : 'S',
    value : 1
  },
  {
    attribute : 'P',
    value : 1
  },
  {
    attribute : 'E',
    value : 1
  },
  {
    attribute : 'C',
    value : 1
  },
  {
    attribute : 'I',
    value : 1
  },
  {
    attribute : 'A',
    value : 1
  },
  {
    attribute : 'L',
    value : 1
  }
];

do {
  var index = Math.floor(Math.random() * 7);

  if (special[index].value < 10) {
    special[index].value++;
    pointsPool--;
  }
} while (pointsPool);

fs.writeFile("special.json", JSON.stringify(special, null, 2), function () {
  console.log("See you later, Space Cowboy.");
});
