function solution(money) {
  let cup = Math.floor(money / 5500);
  let change = money - 5500 * cup;

  let answer = [cup, change];

  return answer;
}
