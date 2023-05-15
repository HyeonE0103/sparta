def cal(a, b):
    return a + 2 * b
print(cal(3, 5))  #13
print(cal(5, 3))  #11
print(cal(a=3, b=5))  #13
print(cal(b=5, a=3))  #13

print("\n")

def cal(a, b):
    return a + 2 * b
print(cal(3, 5))  #13
print(cal(5, 3))  #11
print(cal(a=3, b=5))  #13
print(cal(b=5, a=3))  #13

def call_names(*args):
    for name in args:
        print(f'{name}야 밥먹어라~')
call_names('철수','영수','희재')
#철수야 밥먹어라~
#영수야 밥먹어라~
#희재야 밥먹어라~