function solution(array) {
  let answer = array.sort((a, b) => a - b);
  return answer[Math.floor(array.length / 2)];
}
