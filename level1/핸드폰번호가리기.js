function solution(x) {
  let xarr = x.split("");
  let arr = xarr.splice(-4);
  return xarr
    .map(item => (item = "*"))
    .concat(arr)
    .join("");
}

// 다른사람 풀이
// repeat(num) num만큼 string을 반복한다.
function solution(x) {
  return "*".repeat(x.length - 4) + x.slice(-4);
}
