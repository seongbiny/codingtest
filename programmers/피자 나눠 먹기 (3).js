function solution(slice, n) {
  let answer = 1;

  while (true) {
    if ((slice * answer) / n < 1) {
      answer = answer + 1;
    } else {
      break;
    }
  }

  return answer;
}
