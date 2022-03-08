let { TreeNode } = require("./tree");
//O(n) or O(b^d)time where b is maximum branching and d is the maximum depth. O(d)space where d is proportional to  depth of the tree

function dfs(node, value) {
  if(node.value === value) return node;
  if (node.getChildren()) {
    console.log(node.value)
    for (var i = 0; i < node.getChildren().length; i++) {
      dfs(node.getChildren()[i], value);
    }
  
  }
  return null; 
}
let root = new TreeNode("root");
let child1 = new TreeNode("1");
let child2 = new TreeNode("2");
let child3 = new TreeNode("3");
let child4 = new TreeNode("4");
root.addChild(child1);
root.addChild(child2);
child1.addChild(child3);
child2.addChild(child4);
dfs(root, "3");
