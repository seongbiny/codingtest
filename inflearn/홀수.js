function solution(array) {
  let sum = 0;
  let minNum = 101;

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum = sum + array[i];
      if (minNum > array[i]) {
        minNum = array[i];
      }
    }
  }

  console.log(sum, minNum);
}

solution([12, 77, 38, 41, 53, 92, 85]);
