function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  print(l1)
  print(l2)

  let inMind = 0;
  const initNode = new ListNode();
  let curNode = initNode;
  let sum = 0;
  while (l1 || l2 || inMind > 0) {
    curNode.next = new ListNode();
    curNode = curNode.next;

    sum = (l1?.val ?? 0) + (l2?.val ?? 0) + inMind;
    curNode.val = sum % 10;
    inMind = Math.floor(sum / 10);

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return initNode.next
};

const print = (list) => {
  let ans = [];
  while (list) {
    ans.push(list.val);
    list = list.next;
  }
  console.log(ans);
};

l111 = new ListNode(3);
//l111 = null;
l11 = new ListNode(4, l111);
l1 = new ListNode(2, l11);

l222 = new ListNode(4);
l22 = new ListNode(6, l222);
l2 = new ListNode(5, l22);



print(addTwoNumbers(l1, l2));
