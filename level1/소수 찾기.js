// 효율성 개선 필요
function solution(n) {
  let answer = 1;
  let result = false;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      answer += 1;
    }
  }
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return (result = false);
      } else {
        result = true;
      }
    }
    return result;
  }
  return answer;
}
