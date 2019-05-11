// 오답
function sol(a, b){
    var answer = [];
    var newArr = a.map((item) => item.slice(b)).sort()
    console.log(newArr)
    for(let i = 0; i<a.length; i++){
      for(let j = 0; j<newArr.length; j++){
        if(newArr[i] === a[j].slice(b)){
          answer.push(a[j])
        }
      }
    }
    return answer
  }

  // sort와 localeCompare 사용

function sol(a, b){
    return a.sort((p, c) => p[b] === c[b] ? p.localeCompare(c) : p[b].localCompaere(c[b]))
}