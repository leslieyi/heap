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

  extractMax() {
    //no arguments
    const max = this.values[0];
    const end = this.values.pop();
    //take the end and put it in the [0]
    if (this.values.length > 0) {
      //edge case
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null; //tracking index with swap and setting it to null when we find a larger number

      //start with the leftside

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break; //break out of the loop
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
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
console.log(heap);
heap.insert(199);
console.log(heap);

console.log("hi", heap.extractMax());
console.log(heap);
