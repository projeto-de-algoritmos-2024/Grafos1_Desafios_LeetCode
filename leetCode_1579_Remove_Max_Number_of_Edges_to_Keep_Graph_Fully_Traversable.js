/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
        this.components = n;
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        this.components--;
        return true;
    }
    
    isConnected() {
        return this.components === 1;
    }
}

function maxNumEdgesToRemove(n, edges) {
    
    edges.sort((a, b) => b[0] - a[0]);
    
    const ufAlice = new UnionFind(n);
    const ufBob = new UnionFind(n);
    let edgesUsed = 0;
    
    for (let [type, u, v] of edges) {
        u--; v--; 
        
        if (type === 3) { 
            
            const addedInAlice = ufAlice.union(u, v);
            const addedInBob = ufBob.union(u, v);
            
            if (addedInAlice || addedInBob) {
                edgesUsed++;
            }
        } else if (type === 1) { 
            if (ufAlice.union(u, v)) {
                edgesUsed++;
            }
        } else if (type === 2) { 
            if (ufBob.union(u, v)) {
                edgesUsed++;
            }
        }
    }
    
    if (!ufAlice.isConnected() || !ufBob.isConnected()) {
        return -1;
    }
    
    return edges.length - edgesUsed;
}
