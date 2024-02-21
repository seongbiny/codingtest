function solution(word) {
  let result = "";

  for (i = 0; i < word.length; i++) {
    let n = word[i];
    if (n === n.toUpperCase() && n !== n.toLowerCase()) {
      result = result + n.toLowerCase();
    } else {
      result = result + n.toUpperCase();
    }
  }

  console.log(result);
}

solution("StuDY");
