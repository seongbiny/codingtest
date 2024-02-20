function solution(my_string) {
  let answer = 0;

  for (i = 0; i < my_string.length; i++) {
    if (parseInt(my_string[i]) < 10 && 0 < parseInt(my_string[i])) {
      answer = answer + parseInt(my_string[i]);
    }
  }

  return answer;
}
