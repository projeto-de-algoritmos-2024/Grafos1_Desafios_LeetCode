# Utilizando exemplo do LeetCode para teste
n = 6
edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]

# Criar dicionário para representar o grafo
grafo = {}
grau = [0] * (n + 1)

# Preencher o dicionário de adjacência e calcular os graus dos nós
for u, v in edges:
    if u not in grafo:
        grafo[u] = set()
    if v not in grafo:
        grafo[v] = set()

    
    grafo[u].add(v)
    grafo[v].add(u)
    grau[u] += 1
    grau[v] += 1

print(grafo)
print(grau)