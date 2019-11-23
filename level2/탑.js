function solution(x) {
  let result = Array(x.length).fill(0);
  for (let i = x.length - 1; i >= 0; i--) {
    let poped = x.pop();
    for (let k = x.length; k > 0; k--) {
      if (x[k - 1] > poped) {
        result[i] = k;
        break;
      }
    }
  }
  return result;
}
