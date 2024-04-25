function findMaxWeight(capacity, weights) {
  let maxWeight = 0;

  function dfs(index, currentWeight) {
    // 현재 무게가 용량을 초과하는 경우, 더 이상 진행하지 않음
    if (currentWeight > capacity) return;
    // 모든 바둑이를 고려했을 때
    if (index === weights.length) {
      if (currentWeight > maxWeight && currentWeight <= capacity) {
        maxWeight = currentWeight;
      }
      return;
    }
    // 현재 바둑이를 포함하는 경우
    dfs(index + 1, currentWeight + weights[index]);
    // 현재 바둑이를 포함하지 않는 경우
    dfs(index + 1, currentWeight);
  }

  dfs(0, 0);
  return maxWeight;
}

// 입력 처리
const input = ["259 5", "81", "58", "42", "33", "61"];

const [capacity, n] = input[0].split(" ").map(Number);
const weights = input.slice(1).map(Number);

// 결과 계산 및 출력
const result = findMaxWeight(capacity, weights);
console.log(result);
