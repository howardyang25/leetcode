function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (head1, head2) => {
  const fakeHead = new ListNode('init');
  let curHead = fakeHead;
  let leftPointer = head1;
  let rightPointer = head2;
  while (leftPointer && rightPointer) {
    if (leftPointer.val < rightPointer.val) {
      curHead.next = leftPointer;
      leftPointer = leftPointer.next;
    } else {
      curHead.next = rightPointer;
      rightPointer = rightPointer.next;
    }

    curHead = curHead.next;
  }
  
  if (leftPointer) {
    curHead.next = leftPointer;
  }

  if (rightPointer) {
    curHead.next = rightPointer;
  }

  return fakeHead.next;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(4);
a.next = b;
b.next = c;

const d = new ListNode(1);
const e = new ListNode(3);
const f = new ListNode(4);
d.next = e;
e.next = f;

console.log(mergeTwoLists(a, d));