function solution(word) {
  let result = "";
  if (word.length % 2 === 0) {
    let index = word.length / 2;
    result = word[index - 1] + word[index];
  } else {
    let index = Math.floor(word.length / 2);
    result = word[index];
  }

  console.log(result);
}

solution("good");
