#숫자형 자료형
a = 5
b = 4.8

a = 7
b = 2
a+b   # 9 
a-b   # 5
a*b   # 14
a/b   # 3.5

a+3*b         # 13, 여러 연산을 한 줄에 할 경우 사칙연산의 순서대로!
(a+3)*b       # 20, 소괄호를 이용해서 먼저 계산할 부분을 표시해줄 수 있음

a = 5
a = a + 3 # 5에 3을 더한 값을 다시 a에 저장
print(a)  # 8

a += 3    # 줄여 쓸 수도 있음 같은 의미!

a//b  # 3 (몫)
a%b   # 1 (나머지)
a**b  # 49 (거듭제곱)

#Bool 자료형
x = True   # 참
y = False  # 거짓

# 소문자로 쓰면 자료형으로 인식하지 않고 변수명이라 생각해 에러가 남
# z = true   # name 'true' is not defined
# True = 1   # True/False는 변수명으로 쓸 수 없음

4 > 2      # True  크다
5 < 1      # False 작다
6 >= 5     # True  크거나 같다
4 <= 4     # True  작거나 같다
3 == 5     # False 같다
4 != 7     # True  같지 않다

a = 4 > 2  # True
not a      # False    NOT 연산자로 참을 거짓으로, 거짓을 참으로 바꿔줌
a and b    # False    AND 연산자로 모두 참이어야 참을 반환
a or b     # True     OR 연산자로 둘 중 하나만 참이면 참