def solution(s, n):
    answer = ''
    splitS = list(s)
    for i in splitS:
        # print(i.upper())
        if i == ' ':
            answer += ' '
        elif i.upper() == i:
            answer += chr(((ord(i) +n - 65) % 26) + 65)
        else:
            answer += chr(((ord(i) +n - 97) % 26) + 97)
    print(answer)
    return answer

solution('AB', 1)
solution('YZ', 3)
solution('z', 1)
solution('a B z', 4)