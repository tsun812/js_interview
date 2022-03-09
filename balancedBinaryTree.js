// a tree is super balanced if the difference of depth of any two leaf nodes are no greater than 1
//returns true if balanced, false otherwise
// O(n) time and space
let { TreeNode } = require("./binaryTree")
const balancedBST = function (node) {
  if (!node) return true
  let depth = [];
  let stack = [[node,0]];
  

  while(stack.length > 0){
    let curr = stack.pop()
    let currNode = curr[0]
    let currDepth = curr[1]
  if(!currNode.left && !currNode.right){
  
    if(!depth.includes(currDepth)){
      depth.push(currDepth)
     
      if(depth.length>2 || Math.abs(depth[1]-depth[0]) > 1){
        return false;
      }
    }
  }
  if(currNode.left) {
    stack.push([currNode.left, currDepth+1])
  }
  if(currNode.right) {
    stack.push([currNode.right, currDepth+1])
  }

  }
 return true;
}
let root = new TreeNode("root");
let child1 = new TreeNode("1");
let child2 = new TreeNode("2");
let child3 = new TreeNode("3");
let child4 = new TreeNode("4");
root.setLeft(child1);
root.setRight(child2);
child1.setLeft(child3);
child3.setLeft(child4);
console.log(balancedBST(root));