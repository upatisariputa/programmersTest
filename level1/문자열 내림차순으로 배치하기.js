// 오답
// 내림차순이 아니라 역순으로 배열
function solution(s) {
    var answer = '';
  let answerArr = []
  let strSplit = s.split('')
  for(let i = s.length; i>=0; i--){
    answerArr.push(strSplit[i])
  }
  answer = answerArr.join('')
    return answer;
}

// 정답
// charCodeAt() 사용
function solution(s) {
    return s.split('').sort((prev, cur) => cur.charCodeAt() - prev.charCodeAt()).join('')
  }