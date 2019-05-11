//정답
function solution(s) {
  let isNum = curr => !isNaN(parseInt(curr));

  return (s.length === 4 || s.length === 6) && s.split("").every(isNum);
}

// 다른사람 풀이
// 정규식 사용
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
