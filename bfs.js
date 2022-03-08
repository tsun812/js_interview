let { TreeNode } = require("./tree");
//O(n) time and space

function bfs(node, value) {
  let queue = [];
  queue.push(node);
  while (queue.length > 0) {
    let currNode = queue.shift();
    console.log(currNode.value);
    if (currNode.value === value) {
      return currNode;
    } else {
      for (var i = 0; i < currNode.getChildren().length; i++) {
        queue.push(currNode.getChildren()[i]);
      }
    }
  }
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
bfs(root, "4");
