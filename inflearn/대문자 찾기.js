function solution(word) {
  let result = 0;

  for (i = 0; i < word.length; i++) {
    if (
      word[i] === word[i].toUpperCase() &&
      word[i] !== word[i].toLowerCase()
    ) {
      result = result + 1;
    }
  }

  console.log(result);
}

solution("KoreaTimeGood");
