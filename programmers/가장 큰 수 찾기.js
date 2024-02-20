function solution(array) {
  let answer = [];
  let big_num = 0;
  let big_index = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > big_num) {
      big_num = array[i];
      big_index = i;
    }
  }

  answer = [big_num, big_index];
  return answer;
}
