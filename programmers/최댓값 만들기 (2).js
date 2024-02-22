function solution(numbers) {
  let answer = -100000000;
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (answer < numbers[i] * numbers[j]) {
        answer = numbers[i] * numbers[j];
      }
    }
  }
  return answer;
}
