function solution(x, n) {
  let xArr = x.sort((a, b) => a - b);
  let count = 0;
  while (n > 0) {
    n = n - xArr[count];
    if (0 > n) {
      return count;
    }
    if (count === x.length) {
      return count;
    }
    count++;
  }
  return count;
}

// 다른 사람 풀이

function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map(v => (budget -= v))
      .findIndex(v => v < 0) || ~d.length
  );
}

// 다른 사람 풀이

function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
  return d.length;
}
