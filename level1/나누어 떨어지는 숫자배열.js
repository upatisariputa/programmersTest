function solution(arr, div){
    var answer =[];
    answer = arr.filter((item) => item%div === 0).sort((a, b) => a-b)
    
    if(answer.length === 0){
      return answer = [-1]
    }
    
    return answer;
  }