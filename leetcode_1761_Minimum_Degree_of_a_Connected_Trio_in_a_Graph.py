# Utilizando exemplo do LeetCode para teste
n = 6
edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]

class Solution(object):
    def minTrioDegree(self, n, edges):
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

        grau_minimo = float('inf')

        # Encontrar trios conectados e calcular o grau de cada um
        for u in range(1, n + 1):
            for v in grafo[u]:
                if v > u:  # Evita contar o mesmo trio duas vezes
                    for w in grafo[u]:
                        if w > v and w in grafo[v]:  # verifica se o nó v que está na lista de adjacência de u também está na lista de ajacência do próximo nó w da lista de ajdacência de u, confirmando o trio.
                            # Calcula o grau do trio
                            grau_trinca = (grau[u] - 2) + (grau[v] - 2) + (grau[w] - 2)
                            grau_minimo = min(grau_minimo, grau_trinca)

        return grau_minimo if grau_minimo != float('inf') else -1

print(Solution().minTrioDegree(n, edges))