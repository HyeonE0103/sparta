# 작은 따옴표 또는 큰 따옴표
a = "aa"
b = 'aa'

a = 1
b = "a"
c = a # 따옴표를 쓰지않으면 변수이름을 뜻하기 때문에 꼭 구분
print(a, b, c) # 1 "a" 1

print("I'm happy :)")

#문자열 연산
first_name = "Harry"
last_name = "Potter"

first_name + last_name  # HarryPotter
first_name + " " + last_name  # Harry Potter

a = "3"
b = "5"
a + b    # 35

a = "3"
# a + 5    # 문자열과 숫자형은 더할 수 없어서 에러!

#len()을 이용하여 문자열의 길이를 구할 수 있음
print(len("abcde"))           # 5
print(len("Hello, Sparta!"))  # 14
print(len("안녕하세요."))      # 6

#그 외에 여러가지 메소드
#대문자를 소문자로
sentence = 'Python is FUN!'
sentence.upper()  # PYTHON IS FUN!
sentence.lower()  # python is fun!

#특정 문자를 기준으로 문자열 나누기
# 이메일 주소에서 도메인 'gmail'만 추출하기
myemail = 'test@gmail.com'

result = myemail.split('@') # ['test','gmail.com'] (뒤에 배울 '리스트'라는 자료형이에요 :))

result[0] # test (리스트의 첫번째 요소)
result[1] # gmail.com (리스트의 두 번째 요소

result2 = result[1].split('.') # ['gmail','com']

result2[0] # gmail -> 우리가 알고 싶었던 것
result2[1] # com

# 한 줄로 한 번에!
myemail.split('@')[1].split('.')[0]

#특정 문자를 다른 문자로 바꾸기
txt = '서울시-마포구-망원동'
print(txt.replace('-', '>')) # '서울시>마포구>망원동'