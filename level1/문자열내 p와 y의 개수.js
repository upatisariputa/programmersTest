function solution(s) {
    let pArr = []
    let yArr = []
    s.toLowerCase().split('').forEach((it) => 
                        it === 'p' ? pArr.push(it) 
                        :it === 'y' ? yArr.push(it) : it)
    return pArr.length === yArr.length
}

