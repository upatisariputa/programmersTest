// 첫 번째 풀이

function solution(ans) {
    var answer = [];
    
    let person =[
      {name: 1, arr : [], count: 0},
      {name: 2, arr : [], count: 0},
      {name: 3, arr : [], count: 0},
     ]
    
    person[0].arr = [1,2,3,4,5];
    person[1].arr = [2,1,2,3,2,4,5];
    person[2].arr = [3,3,1,1,2,2,4,4,5,5];
    let collectNum = []
    
    while( person[0].arr.length < ans.length){
      person[0].arr = person[0].arr.concat(person[0].arr)
      person[1].arr = person[1].arr.concat(person[1].arr)
      person[2].arr = person[2].arr.concat(person[2].arr)
    }
    
    for(let i = 0; i<ans.length; i++){
      if(ans[i] ===  person[0].arr[i]){
        count1 += 1
      }
      if(ans[i] ===  person[1].arr[i]){
        count2 += 1
      }
      if(ans[i] ===  person[2].arr[i]){
        count3 += 1
      }
    }
    
    person[0].count = 1;
    person[1].count = 10;
    person[2].count = 10;
    
    
  person.sort((a, b) => a.count > b.count ? -1 : a.count < b.count ? 1 : 0)
    
    for(let i = 0; i < 2; i++){
      answer.push(person[i].name)
    }
    
    return answer;
  }
  
  var ans = new Array(50)
  
  console.log(solution(ans))

  // 실패

// 두번째 풀이
  // concat이 아니라 % (나머지 값을 사용)
  // maxNum과 count 값이 일치하면 0,1,2 를 넣는 방식

function solution(ans) {
    var answer = [];
    let arr1 = [1,2,3,4,5];
    let arr2 = [2,1,2,3,2,4,2,5];
    let arr3 = [3,3,1,1,2,2,4,4,5,5];
    let count0 = 0
    let count1 = 0
    let count2 = 0

    for(let i = 0; i<ans.length; i++){
    if(ans[i] === arr1[i%5]){
        count0 += 1
    }
    if(ans[i] === arr2[i%8]){
        count1 += 1
    }
    if(ans[i] === arr3[i%10]){
        count2 += 1
    }
    }

    let maxNum = Math.max(count0, count1, count2)

    if(maxNum === count0) {answer.push(1)} 
    if(maxNum === count1) {answer.push(2)} 
    if(maxNum === count2) {answer.push(3)} 

    return answer;
}

