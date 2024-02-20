function solution(my_string) {
  let answer = "";

  for (i = 0; i < my_string.length; i++) {
    let word = my_string[i];

    if (word === word.toUpperCase() && word !== word.toLowerCase()) {
      answer = answer + word.toLowerCase();
    } else if (word !== word.toUpperCase() && word === word.toLowerCase()) {
      answer = answer + word.toUpperCase();
    }
  }
  return answer;
}
