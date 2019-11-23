def solution(array, commands):
  answer = []
  # 풀이방식은 자바스크립트와 동일하다 파이썬의 경우 변수에 담아 보았다.
  for i in commands:
    slicedArr = array[i[0]-1 : i[1]]
    sortedArr = sorted(slicedArr)
    answer.append(sortedArr[i[2]-1])
  return answer