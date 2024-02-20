function solution(n) {
  let answer = 0;
  for (i = 0; i < String(n).length; i++) {
    answer = answer + parseInt(String(n)[i]);
  }
  return answer;
}
