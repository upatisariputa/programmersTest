def string_middle(str):
    return str[(len(str)-1)//2:len(str)//2+1]

# def string_middle(str):
#     a = len(str)
#     if a % 2 == 0 :
#         a = (a-2) / 2
#     else :
#         a = (a-1) / 2
#     return str[int(a) : -int(a)]