function solution(s) {
    var answer = '';
    let modul = s.length % 2
    let idx = Math.floor(s.length/2)
    if(modul){
        answer = s[idx]
    }else{
        answer = s[idx-1] + s[idx]
    }
    return answer;
}