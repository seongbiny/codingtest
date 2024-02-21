function solution(word, n) {
  let result = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === n) {
      result = result + 1;
    }
  }

  console.log(result);
}

solution("COMPUTERPROGRAMMING", "R");
