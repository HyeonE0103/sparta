#리스트 기초, 순서가 있는 다른 자료형들의 모임
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

#딕셔너리 기초, 키와 밸류의 쌍으로 이루어진 자료의 모임
person = {"name":"Bob", "age": 21}
print(person["name"]) # Bob

a = {"one":1, "two":2}
# 빈 딕셔너리 만들기
a = {}
a = dict()

# person = {"name":"Bob", "age": 21} # 딕셔너리는 순서가 없기 때문에 인덱싱X
# print(person[0])   # 0이라는 key가 없으므로 KeyError 발생!

#딕셔니러의 값을 업데이트하거나 새로운 쌍의 자료 넣기
person = {"name":"Bob", "age": 21}
person["name"] = "Robert"
print(person)  # {'name': 'Robert', 'age': 21}
person["height"] = 174.8
print(person)  # {'name': 'Robert', 'age': 21, 'height': 174.8}

#딕셔너리 밸류로는 아무 자료형이나 쓸수 있음
person = {"name":"Alice", "age": 16, "scores": {"math": 81, "science": 92, "Korean": 84}}
print(person["scores"])             # {'math': 81, 'science': 92, 'Korean': 84}
print(person["scores"]["science"])  # 92

#해당 키가 존재하는지 알고 싶을때는 in사용
person = {"name":"Bob", "age": 21}
print("name" in person)       # True
print("email" in person)      # False
print("phone" not in person)  # True
