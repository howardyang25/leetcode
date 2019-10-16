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
  
  console.log(arr1);
  console.log(arr2);
  return arr1.join('').indexOf(arr2.join('')) !== -1;
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

console.log(isSubtree(a, f));