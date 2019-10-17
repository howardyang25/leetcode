const TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

const isSubtree = (s, t) => {
  const arr1 = [];
  const arr2 = [];
  const traverse = (node, arr) => {
    arr.push(`#${node.val}`);

    if (node.left) {
      traverse(node.left, arr);
    } else {
      arr.push(`#${null}`);
    }

    if (node.right) {
      traverse(node.right, arr);
    } else {
      arr.push(`#${null}`);
    }
  };
  
  traverse(s, arr1);
  traverse(t, arr2);
  
  return arr1.join('').indexOf(arr2.join('')) !== -1;
};

const areIdentical = (node1, node2) => {
  if (node1 === null && node2 === null) {
    return true;
  }

  if (node1 === null || node2 === null) {
    return false;
  }

  return (node1.val === node2.val) && areIdentical(node1.left, node2.left) && areIdentical(node1.right, node2.right);
}

const isSubtreeCompareNodes = (s, t) => {
  if (s === null) {
    return true;
  }

  if (t === null) {
    return false;
  }

  if (areIdentical(s, t)) {
    return true;
  }

  return isSubtreeCompareNodes(s.left, t) || isSubtreeCompareNodes(s.right, t);
};

const a = new TreeNode(3);
const b = new TreeNode(4);
const c = new TreeNode(5);
const d = new TreeNode(1);
const e = new TreeNode(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

const f = new TreeNode(4);
const g = new TreeNode(1);
const h = new TreeNode(2);
f.left = g;
f.right = h;

console.log(isSubtreeCompareNodes(a, f));