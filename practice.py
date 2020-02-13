

def getNumber(n):
    lista = []
    while n >= 1:
        lista.append(n)
        n-=1
    return lista

print(getNumber(5))

#####################################

i = 5
print([i for i in range(i,0,-1)])

#####################################

def divisors(n):
    lista = []
    for i in range(2,n+1):
        if n%i == 0:
            lista.append(i)
    return lista

print(divisors(26))

####################################

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
## 1,2,3,5,8,13

def listOverlap(listOne, listTwo):
    repeated = []
    for e in listOne:
        if e in listTwo and e not in repeated:
            repeated.append(e)

    return repeated

####################################
interview = "how to remove    all white    spaces from          a strin     g"

def spaceRemover(string):
    newString = ''
    for e in string:
        if e != ' ':
            newString += e
    return newString

print(spaceRemover(interview))

#######################################3

def palindrome(string):
    if string == string[::-1]:

        print(True)
    else:
        print(False)

palindrome('wow')

#########################################

a = [1,2,3,4,5,6,7,8,9,10]

print(a[:-5])