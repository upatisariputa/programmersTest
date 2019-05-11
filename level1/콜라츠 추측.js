// 오답
function solution(num) {
  let count = 0;
  console.log(num);
  while (num === 1 || count > 500) {
    console.log(num);
    num % 2 === 0 ? num / 2 : num * 3 + 1;
    count += 1;
  }
  return count;
}

// 정답
// num를 변환 시키지 않았기 때문

function solution(num) {
  let count = 0;
  while (num > 1) {
    if (count > 500) {
      return -1;
    } else if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 !== 0) {
      num = num * 3 + 1;
    }
    count++;
  }
  return count;
}
