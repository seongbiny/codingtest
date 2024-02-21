function solution(n) {
  let sum = 0;

  for (i = 1; i < n + 1; i++) {
    sum = sum + i;
  }

  console.log(sum);
}

solution(10);
