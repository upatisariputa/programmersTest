//오답

function solution(a, b) {
    var answer = '';
    let week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31]
    let day = b;

    for(let i = 0; i < a; i++){
        day += month[i]  
    }

    let weekday = day%7-1
    if(weekday === undefined){
        answer = 'WED'
    }
    answer = week[weekday]
    return answer;
}

  // modulo 사용시 1,7 이면 undefined가 나옴

  function solution(a, b) {
    var answer = '';
    let week = [ 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31]
    let day = b;
    
    for(let i = 0; i < a; i++){
      day += month[i]  
    }
    
    let weekday = day%7
    answer = week[weekday]
    return answer;
  }