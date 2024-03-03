const fs = require("fs").readFileSync("input.txt", "utf8");
let input = fs.trim().split("\n");

const start_word = input[1][0];
const end_word = input[1].at(-1);

for (let i = 2; i < input.length; i++) {
  let result = "NE";
  if (input[i][0] === start_word && input[i].at(-1) === end_word) {
    result = "DA";
  }

  console.log(result);
}
