function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// const isValidBST = (root) => {
//   if (root === null) {
//     return true;
//   }

//   const inOrder = [];
//   const traverse = (node) => {
//     if (node.left) {
//       traverse(node.left);
//     }
    
//     inOrder.push(node.val);
    
//     if (node.right) {
//       traverse(node.right);
//     }

//   };
  
//   traverse(root);
//   console.log(inOrder);
//   for (let i = 0; i < inOrder.length - 1; i++) {
//     if (inOrder[i] >= inOrder[i + 1]) {
//       return false;
//     }
//   }

//   return true;
// };

const isValidBST = (root) => {
  const check = (node, lowerBound, upperBound) => {    
    if (node === null) {
      return true;
    }

    if (node.val <= lowerBound || root.left.val >= upperBound)) {
      return false;
    }
    
    if (root.right && (root.right.val <= root.val || root.right.val <= lowerBound || root.right.val >= upperBound)) {
      return false;
    }
    
    if (root.left) {
      return isValidBST(root.left, -Infinity, root.val);
    }
    
    if (root.right) {
      return isValidBST(root.right, root.val, +Infinity);
    }
  };
  
  if (check(root, -Infinity, +Infinity) === undefined) {
    return true;
  }
};
// const a = new TreeNode(2);
// const b = new TreeNode(1);
// const c = new TreeNode(3);

// const a = new TreeNode(10);
// const b = new TreeNode(5);
// const c = new TreeNode(15);
// const d = new TreeNode(6);
// const e = new TreeNode(20);

// a.left = b;
// a.right = c;
// c.left = d;
// c.right = e;

const a = new TreeNode(3);
const b = new TreeNode(1);
const c = new TreeNode(5);
const d = new TreeNode(0);
const e = new TreeNode(2);
const f = new TreeNode(4);
const g = new TreeNode(6);
const h = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.right = h;

console.log(isValidBST(a));

