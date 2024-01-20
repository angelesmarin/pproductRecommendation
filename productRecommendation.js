//algorithm:

function dijkstra(graph, startProduct) {
    //(graph, starting node in graph)
    let n = graph.length;
    let minimumDistances = new Array(n).fill(Infinity); 
    /* min distances initially will be Infinity
        any n< Infinity will have to be considered for
        for min distance.      
    */
    let visited = new Array(n).fill(false);
    //all nodes initially will be false
    //when visited, they wil turn true

    minimumDistances[startProduct] = 0;
    /*special case where we directly assign the distance 
    from the starting node to itself as 0. 
    */

    for (let i = 0; i < n; i++) { //i= index of starting node
        //standard counter to iterate over all indexes in graph
        let minIndex = -1;
        /*stores the index number of the minimumDistance
        (0 is confusing, so initialize to -1)*/
        for (let j = 0; j < n; j++) {//index of dist. to other products )
            //standard counter
            if (!visited[j] && (minIndex === -1 || minimumDistances[j] < minimumDistances[minIndex])) {
                /*if not visited AND no min index found
                OR other product*/
                    minIndex = j;
            }
        }
        if (minimumDistances[minIndex] === Infinity) {
            break;
            /*optimazation to break early if 
            all remaining nodes are not reachable*/
        }
        visited[minIndex] = true;
        //marks selected npode as visited 

        for (let j = 0; j < n; j++) {
            //another counter
            //updates the min distance to adjacent nodes
            if (graph[minIndex][j] !==0) {
                /*only consider adjacent nodes
                if the 
                */
                let potentialDist = minimumDistances[minIndex] + graph[minIndex][j];
                if(potentialDist < minimumDistances[j]) {
                    //tentative distance
                    minimumDistances[j] = potentialDist;
                }
            }
        }
    }
    return minimumDistances;
}

//adjacency matrix representing similarity score
let graph = [
    [0, 2, 0, 1, 0],
    [2, 0, 3, 0, 0],
    [0, 3, 0, 4, 0],
    [1, 0, 4, 0, 5],
    [0, 0, 0, 5, 0]
];

let startProduct = 0;
console.log(dijkstra(graph, startProduct));

/*
dequeue operations 
*/