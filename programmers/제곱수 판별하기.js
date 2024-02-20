function solution(n) {
  let answer = 2;
  let cnt = 1;
  while (true) {
    if (cnt * cnt <= n) {
      if (cnt * cnt === n) {
        answer = 1;
        break;
      } else {
        cnt = cnt + 1;
      }
    } else {
      break;
    }
  }
  return answer;
}
