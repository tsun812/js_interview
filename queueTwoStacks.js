//O(n)
class QueueTwoStacks {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  enqueue(item) {
    return this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length() === 0) {
      while (this.inStack > 0) {
        let itemCurr = this.inStack.pop();
        this.outStack.push(itemCurr);
      }
      if (this.outStack.length() === 0) {
        throw new Error("something wrong happend");
      }
    }
    return this.outStack.pop();
  }
}
