const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

let count = 0;

for (i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] === input[input.length - (i + 1)]) {
    count = count + 1;
  } else {
    count = 0;
    break;
  }
}

console.log(count === Math.floor(input.length / 2) ? 1 : 0);
console.log(count);
