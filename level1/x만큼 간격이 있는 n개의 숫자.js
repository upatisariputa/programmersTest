function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

// 다른 사람 풀이
// fill map 사용
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

// 다른 사람 풀이
// 전개연산자와 keys()사용
function solution(x, n) {
  return [...Array(n).keys()].map(v => (v + 1) * x);
}
