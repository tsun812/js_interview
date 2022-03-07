class TreeNode {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
  getParent() {
    return this.parent;
  }
  setParent(parentNode) {
    this.parent = parentNode;
  }
  getLeft(){
    return this.left;
  }
  setLeft(childNode){
    this.left = childNode
    childNode.setParent(this);
  }
  getRight(){
    return this.right;
  }
  setRight(childNode){
    this.right = childNode
    childNode.setParent(this);
  }
}

