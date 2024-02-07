function solution(numer1, denom1, numer2, denom2) {
  let denom3 = denom1 * denom2;
  let numer3 = numer1 * denom2 + numer2 * denom1;

  let minNum = denom3 > numer3 ? denom3 : numer3;

  while (true) {
    if (denom3 % minNum === 0 && numer3 % minNum === 0) {
      return [numer3 / minNum, denom3 / minNum];
    } else {
      minNum = minNum - 1;
    }
  }

  const answer = [numer3, denom3];

  return answer;
}
