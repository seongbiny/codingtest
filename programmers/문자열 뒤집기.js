function solution(my_string) {
  var answer = "";

  for (i = 0; i < my_string.length; i++) {
    answer = my_string[i] + answer;
  }
  return answer;
}
