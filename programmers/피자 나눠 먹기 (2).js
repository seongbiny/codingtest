function solution(n) {
  let answer = 1;
  while (true) {
    if ((6 * answer) % n !== 0) {
      answer = answer + 1;
    } else {
      break;
    }
  }
  return answer;
}
