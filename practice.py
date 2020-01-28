

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
