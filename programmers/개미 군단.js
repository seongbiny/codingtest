function solution(hp) {
  let answer = 0;
  let temp_hp = hp;

  let generalAnt = Math.floor(temp_hp / 5);
  temp_hp = temp_hp - generalAnt * 5;

  let soldierAnt = Math.floor(temp_hp / 3);
  temp_hp = temp_hp - soldierAnt * 3;

  answer = answer + generalAnt + soldierAnt + temp_hp;

  return answer;
}
