//swap until the children are smaller than the parent, Parent>children
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp(); //separation of concern
  }

  bubbleUp() {
    //take the index of the idem and find the parent.
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx]; //don't need to do this but easier to read?
      if (element <= parent) break;
      //   if (element > parent) {
      this.values[parentIdx] = element;
      this.values[idx] = parent; //swapping it
      idx = parentIdx; //we need to change the index in order to avoid infinite loop
      //   }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap)
heap.insert(199)
console.log(heap)
