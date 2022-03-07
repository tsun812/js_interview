class TreeNode {
  constructor (value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }
  getParent() {
    return this.parent;
  }
  setParent(parentNode) {
    this.parent = parentNode;
  }
  getChildren(){
    return this.children;
  }
  addChild(childNode){
    this.children.push(childNode);
    childNode.setParent(this);
  }
}

let root = new TreeNode('root');
root.addChild(new TreeNode('1'));
console.log(root.getChildren()[0].value)