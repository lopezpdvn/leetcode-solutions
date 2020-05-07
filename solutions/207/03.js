/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const graph = new Graph(numCourses);

  prerequisites.forEach(([to, from]) =>
    graph.addEdge(from, to));

  return graph.topologicalSort().length;
};

class Graph {
  constructor(nVertices) {
    this.graph = new Map();
    this.V = nVertices;
  }

  addEdge(u, v) {
    let uEdges;
    if(undefined ===
                (uEdges = this.graph.get(u))) {
      uEdges = [];
      this.graph.set(u, uEdges);
    }
    uEdges.push(v);
    return this;
  }

  topologicalSort() {
    this.buildInDegrees();

    const sourcesQueue = this.inDegs.reduce(
      (a, inDeg, vertex) =>
        inDeg ? a : a.concat(vertex),
      []);

    let visitCnt = 0;
    const topOrder = [];

    while(sourcesQueue.length) {
      const u = sourcesQueue.shift();
      topOrder.push(u);

      let neighbors;
      if(undefined ===
                (neighbors = this.graph.get(u)))
        neighbors = [];
      for(const v of neighbors)
        if(!--this.inDegs[v]) {
          sourcesQueue.push(v);
        }

      visitCnt++;
    }

    return visitCnt !== this.V ? [] : topOrder;
  }

  buildInDegrees() {
    this.inDegs = new Array(this.V).fill(0);
    this.graph.forEach(v =>
      v.forEach(e => this.inDegs[e]++));
  }
}
