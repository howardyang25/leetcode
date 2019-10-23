function Node(val, neighbors) {
  this.val = val;
  this.neighbors = neighbors;
}

const cloneGraph = (rootNode) => {
  if (!rootNode.neighbors.length) {
    return new Node(rootNode.val, []);
  }

  const nodeTracker = {};
  const neighborTracker = {};
  let cloneRoot;
  
  const recurse = (node) => {
    const clone = new Node(node.val, []);
    if (node === rootNode) {
      cloneRoot = clone;
    }

    nodeTracker[node.val] = clone;
    neighborTracker[node.val] = [];
    for (let i = 0; i < node.neighbors.length; i++) {
      neighborTracker[node.val].push(node.neighbors[i].val);
      if (!nodeTracker[node.neighbors[i].val]) {
        recurse(node.neighbors[i]);
      }
    }
  };
  
  recurse(rootNode);
  const neighbors = Object.entries(neighborTracker);
  for (let i = 0; i < neighbors.length; i++) {
    for (let j = 0; j < neighbors[i][1].length; j++) {
      nodeTracker[neighbors[i][0]].neighbors.push(nodeTracker[neighbors[i][1][j]]);
    }
  }

  return cloneRoot;
};

const a = new Node(1, []);
const b = new Node(2, []);
const c = new Node(3, []);
const d = new Node(4, []);

// a.neighbors = [b, c];
// b.neighbors = [a, c];
// c.neighbors = [b, d];
// d.neighbors = [a, c];

a.neighbors = [b];
b.neighbors = [a];

console.log(cloneGraph(a));