'''
range(5) - діапазон від 0 до 5
len('hi') - довжина слова 2

'''
mobs = ["сібіка",'дільфін','свіня','кіт','вілк']
del mobs[3]

# для НАЗВА_ЗМІННОЇ в НАЗВА_ПОСЛІДОВНОСТІ:
for index in range(len(mobs)):

    # якщо довжина моба < 5
    if len(mobs[index]) <=5:
        mobs[index] = "💀"

    print(index, ' = ', mobs[index])

print('передостанній ', mobs[3])
