function solution(n, array) {
  let result = "";
  let maxLength = 0;

  for (i = 0; i < array.length; i++) {
    if (maxLength < array[i].length) {
      maxLength = array[i].length;
      result = array[i];
    }
  }

  console.log(result);
}

solution(5, ["teacher", "time", "student", "beautiful", "good"]);
