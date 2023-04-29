#리스트 기초
a = [1, 5, 2]
b = [3, "a", 6, 1]
c = []
d = list()
e = [1, 2, 4, [2, 3, 4]]

a = [1, 5, 2]
print(len(a))   # 3
b = [1, 3, [2, 0], 1]
print(len(b))   # 4

a = [1, 3, 2, 4]  #인덱싱
print(a[3])  # 4
print(a[1:3]) # [3, 2]
print(a[-1]) # 4 (맨 마지막 것)

a = [1, 2, [2, 3], 0] #슬라이싱
print(a[2])      # [2, 3]
print(a[2][0])   # 2

#덧붙이기
a = [1, 2, 3]
a.append(5)
print(a)     # [1, 2, 3, 5]
a.append([1, 2])
print(a)     # [1, 2, 3, 5, [1, 2]]
# 더하기 연산과 비교!
a += [2, 7]
print(a)     # [1, 2, 3, 5, [1, 2], 2, 7]

#정렬하기
a = [2, 5, 3]
a.sort()
print(a)   # [2, 3, 5]
a.sort(reverse=True)
print(a)   # [5, 3, 2]

#요소가 리스트 안에 있는지 알아보기
a = [2, 1, 4, "2", 6]
print(1 in a)      # True
print("1" in a)    # False
print(0 not in a)  # True