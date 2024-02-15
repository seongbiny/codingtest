function solution(numbers) {
  let answer = 0;
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  answer = sum / numbers.length;

  return answer;
}
