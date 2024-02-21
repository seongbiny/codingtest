function solution(array) {
  //   let arr = array.sort((a, b) => a - b);
  //   console.log(arr[0]);

  let minNum = 99999999999;
  for (i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }

  console.log(minNum);
}

solution([5, 3, 7, 11, 2, 15, 17]);
