// 정답
function solution(s) {
    let splitArr = s.split(' ').map((i) => i.split(''))
    let aArr = []
    for(let j = 0; j < splitArr.length; j++){
      aArr.push(splitArr[j].map((item, idx) => idx%2 === 0 ? item.toUpperCase() : item.toLowerCase()).join(''))
    }
    return aArr.join(' ')
}

// 다른사람 풀이

function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}