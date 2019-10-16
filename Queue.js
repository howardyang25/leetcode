const Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
}

Queue.prototype.dequeue = function() {
  const firstInQueue = this.storage[this.start];
  if (firstInQueue !== undefined) {
    delete this.storage[this.start];
    this.start++;
    return firstInQueue;
  }
}

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}