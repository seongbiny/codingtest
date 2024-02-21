function solution(word) {
  let array = [];

  for (i = 0; i < word.length; i++) {
    if (!array.includes(word[i])) {
      array.push(word[i]);
    }
  }

  console.log(array.join(""));
}

solution("ksekkset");
