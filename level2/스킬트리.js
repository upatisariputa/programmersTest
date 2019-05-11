// 오답
//처음 스킬이 나오지 않고 다음 스킬이 처음으로 나오면 true로
function solution(x, n) {
  let xArr = x.split("");
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    let newArr = [];
    let flag = true;
    for (let k = 0; k < xArr.length; k++) {
      let splitN = n[i].split("").indexOf(xArr[k]);
      if (splitN > -1) {
        newArr.push(splitN);
      }
    }
    let arr = [...newArr];
    arr.sort((a, b) => a - b);
    console.log(newArr);
    console.log(arr);
    for (let j = 0; j < newArr.length; j++) {
      if (arr[j] !== newArr[j]) {
        flag = false;
      }
    }
    if (flag) {
      count += 1;
    }
  }
  return count;
}
