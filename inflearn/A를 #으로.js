function solution(word) {
  let result = "";
  for (i = 0; i < word.length; i++) {
    if (word[i] === "A") {
      result = result + "#";
    } else {
      result = result + word[i];
    }
  }
  console.log(result);
}

solution("BANANA");
