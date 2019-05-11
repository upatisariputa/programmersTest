function solution(x) {
  let hashad = x
    .toString()
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b));
  return x % hashad === 0;
}
