const Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const numTrees = (n) => {
  if (n === 1) {
    return 1;
  }
  
  const allOptions = Array(n).fill(0).map((value, index) => index + 1);
  
  const root = new Node(2);
  
  const generatePermutations = (options) => {
    const results = [];
    if (options.length === 1) {
      results.push([options[0]]);
      return results;
    }
    
    for (let i = 0; i < options.length; i++) {
      const firstNumber = options[i];
      const numbersLeft = [...options.slice(0, i), ...options.slice(i + 1)];
      const innerPermutations = generatePermutations(numbersLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        results.push([firstNumber, ...innerPermutations[j]]);
      }
    }
    
    return results;
  };
   
  const permutations = generatePermutations(allOptions);

  const addNode = (node, number) => {
    if (number < node.val) {
      if (node.left === null) {
        node.left = new Node(number);
      } else {
        addNode(node.left, number);
      }
    }

    if (number > node.val) {
      if (node.right === null) {
        node.right = new Node(number);
      } else {
        addNode(node.right, number);
      }
    }
  };

  const trees = [];
  for (let i = 0; i < permutations.length; i++) {
    const root = new Node(permutations[i][0]);
    for (let j = 1; j < permutations[i].length; j++) {
      addNode(root, permutations[i][j]);
    }
    
    trees.push(root);
  }

  const createStringFromTree = (root) => {
    const nodes = [];
    const traverse = (node) => {
      if (node === null) {
        nodes.push('null');
        return;
      }

      nodes.push(`#${node.val}`);

      traverse(node.left);
      traverse(node.right);
    };
    
    traverse(root);
    return nodes.join('');
  };

  const uniqueTracker = {};
  for (let i = 0; i < trees.length; i++) {
    uniqueTracker[createStringFromTree(trees[i])] = true;
  }

  return Object.keys(uniqueTracker).length;
};

console.log(numTrees(3));