function solution(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }

  for (i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

solution(["good", "time", "good", "time", "student"]);
