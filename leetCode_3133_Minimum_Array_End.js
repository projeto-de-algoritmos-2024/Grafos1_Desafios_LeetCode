/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let result = [];

    function dfs(node, path) {
        path.push(node);

        if (node === graph.length - 1) {
            result.push([...path]); 
        } else {
            for (let nextNode of graph[node]) {
                dfs(nextNode, path); 
            }
        }

        path.pop();
    }

    dfs(0, []);
    
    return result;
};
