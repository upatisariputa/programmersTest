// 정답
function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

// 다른 사람 풀이

function solution(n) {
  return "수박".repeat(n).substr(0, n);
}
