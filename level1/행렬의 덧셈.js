function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let ans = [];
    for (let k = 0; k < arr1[i].length; k++) {
      ans.push(arr1[i][k] + arr2[i][k]);
    }
    answer.push(ans);
  }
  return answer;
}

// map이 인자로 index가 올수 있고 맵안에 함수가 또 올수 있음
function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
