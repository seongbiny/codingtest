const fs = require("fs").readFileSync("input.txt", "utf8");
let input = fs
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// [
//   [10, 2],
//   [3, -2, -4, -9, 0, 3, 7, 13, 8, -3],
// ];

// console.log(input);

let days = input[0][0];
let sum_day = input[0][1];
let day_arr = input[1];
let maxSum = 0;

for (let i = 0; i < days - 1; i++) {
  let sum = 0;
  if (i <= days - sum_day) {
    for (let j = i; j < j + sum_day; j++) {
      sum = sum + day_arr[j];
    }
  }

  if (maxSum < sum) maxSum = sum;
}

console.log(maxSum);
