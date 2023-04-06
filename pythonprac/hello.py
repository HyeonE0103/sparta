a = 3
b = a
a = a + 1
num = a*b
num2 = 99

string ='대한'
string2 ='민국'
print(string + string2) #대한민국

a=['사과','배','감']
print(a[0]) #사과

a= {}
a= {'name':'영수','age':24}
# a의 값: {'name':'영수','age':24}
# a['name']의 값: '영수'

def f(x):
	return 2*x+3
print(f(2)) #7

#파이썬에서 함수 생성시, 들여쓰기는 중요!
def hey():
	print("헤이")
hey() #헤이

def sum(a,b,c):
	return a+b+c
result = sum(1,2,3)
print(result) #6

age = 25
if age > 20:
	print("성인입니다")
else:
	print("청소년입니다")
	
fruits = ['사과','배','감','귤']
for fruit in fruits:
	print(fruit)  # 사과, 배, 감, 귤
	
ages =[5,10,13,23,25,9]

for a in ages:
	if a>20:
		print("성인입니다")
	else:
		print("청소년입니다")
