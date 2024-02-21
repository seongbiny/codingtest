function solution(A, B, C) {
  let minNum = 101;
  let arr = [A, B, C];

  for (i = 0; i < 3; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }

  console.log(minNum);
}

solution(6, 5, 11);
