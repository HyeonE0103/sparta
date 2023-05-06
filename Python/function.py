def hello():
		print("안녕!")
		print("또 만나요!")

hello()

def bus_rate(age):
	if age > 65:
		print("무료")
	elif age > 20:
		print("성인")
	else:
		print("청소년")
		
bus_rate(27)
bus_rate(10)
bus_rate(72)

def bus_fee(age):
	if age > 65:
		return 0
	elif age > 20:
		return 1200
	else:
		return 750

money = bus_fee(28)
print(money)