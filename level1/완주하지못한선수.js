//첫번째 풀이 
function solution (participant, completion){
    let answer = ''
    for(let i = 0; i < participant.length; i++){
        let idx = completion.indexOf(participant[i])
        if(idx === -1){
            return answer = participant[i]
        }else{
            completion.splice(idx, 1)
        }
    }
    return answer
}

// 위 와 같이 실행할 경우 효율성에서 처리가 안 됨

// 정답

function solution(a, b) {
    a.sort();
    b.sort();
    for(let i = 0; i<a.length; i++){
        if(a[i] != b[i]){
        return a[i];
        }
    }
}

// paticipant와 completion을 정렬하여
// 두 배열 중 일치하지 않는 값을 리턴해준다.