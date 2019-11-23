def solution(answers):
    answer = []
    firstPerson = [1,2,3,4,5]
    secondPerson = [2,1,2,3,2,4,2,5]
    thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,]
    answerArr = [0,0,0]

    for i in range(len(answers)):
        if(firstPerson[i%5] == answers[i]):
            answerArr[0] += 1
        if(secondPerson[i%8] == answers[i]):
            answerArr[1] += 1
        if(thirdPerson[i%10] == answers[i] ):
            answerArr[2] += 1

    max_num = max(answerArr)

    for k in range(len(answerArr)):
        if(max_num == answerArr[k]):
            answer.append(k+1)

    return answer

print(solution([1,2,3,4,5]))
print(solution([1,3,2,4,2]))