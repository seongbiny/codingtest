function solution(n, array) {
  let result = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 10 === n) {
      result = result + 1;
    }
  }

  console.log(result);
}

solution(0, [12, 20, 54, 30, 87, 91, 30]);
