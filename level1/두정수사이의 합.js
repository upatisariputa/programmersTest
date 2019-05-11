function sol(a, b){
    var answer = 0;
    if(a == b){
      return a
    }else if(a > b){
      for(let k = b; k <= a; k++){
        answer += k
      }
    }else{
      for(let i = a;  i <= b ; i++){
        answer += i
      }
    }
    return answer
}