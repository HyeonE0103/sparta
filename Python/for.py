fruits = ['사과', '배', '감', '귤']

for fruit in fruits:
    print(fruit)

people = [
    {'name': 'bob', 'age': 20},
    {'name': 'carry', 'age': 38},
    {'name': 'john', 'age': 7},
    {'name': 'smith', 'age': 17},
    {'name': 'ben', 'age': 27},
    {'name': 'bobby', 'age': 57},
    {'name': 'red', 'age': 32},
    {'name': 'queen', 'age': 25}
]

for human in people:
    if human["age"] > 20:
        print(human["name"])

for i, fruit in enumerate(fruits, start=1):
    print(i,fruit)


for i, fruit in enumerate(fruits):
    print(i, fruit)
    if i == 2:
        break

num_list = [1, 2, 3, 6, 3, 2, 4, 5, 6, 2, 4]

even_num = 0
total = 0
max_num = 0
for num in num_list:
    if num % 2 == 0:
        even_num += 1
    total += num
    if max_num < num:
        max_num = num

print("짝수의 개수:", even_num)
print("리스트 모든 수의 합:", total)
print("가장 큰 수:", max_num)
print("가장 큰 수:", (max(num_list)))



