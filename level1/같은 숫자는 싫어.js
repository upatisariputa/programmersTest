// 오답

function sol(arr){
    let answer = [];
    for(let i = 0; i<arr.length; i++){
      if(answer[i-1] !== arr[i] && answer[i] !== arr[i+1]){
        answer.push(arr[i])
      }
    }
    
    return answer;
  }

// 정답

function sol(arr){
    let answer = [];
    for(let i = 0; i<arr.length; i++){
      if(arr[i-1] !== arr[i]){
        answer.push(arr[i])
      }
    }
    return answer;
  }