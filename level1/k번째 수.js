// 오답
function solution(n, lost, rev) {
    var answer = n-lost.length;
    for(let i = 0; i<rev.length; i++){
     if(lost.indexOf(rev[i]-1) !== -1){
       answer += 1
     }else if(lost.indexOf(rev[i]+1) !== -1){
       answer += 1
     }
     rev = rev.slice(1)
    }
    return answer;
}

// 오답

function solution(n, losti, revi) {
    let lost = losti.sort()
    let rev = revi.sort()
    var answer = n-lost.length;
    
    for(let k = 0; k<rev.length; k++){
      let same = lost.indexOf(rev[k])
      if(lost.includes(rev[k])){
        answer += 1
        lost.splice(same, 1)
        rev.splice(k, 1)
      }
    }
    
    for(let i = 0; i<rev.length; i++){
      let minus = lost.indexOf(rev[i]-1)
      let plus = lost.indexOf(rev[i]+1)
      if(minus !== -1){
       answer += 1
       lost.splice(minus, 1)
     }else if(plus !== -1){
       answer += 1
       lost.splice(plus, 1)
     }
      rev.slice(1)
    }
    return answer;
  }
