function solution(arr) {
  let array = arr.sort((a, b) => a - b);

  console.log(array);
  if (array[0] + array[1] > array[2]) {
    console.log("YES");
  } else console.log("NO");
}

solution([6, 7, 11]);
