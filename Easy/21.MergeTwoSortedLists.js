var mergeTwoLists = function (list1, list2) {
  const head = new ListNode();
  let curNode;
  let prevNode = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curNode = list1;
      list1 = list1.next;
    } else {
      curNode = list2;
      list2 = list2.next;
    }
    prevNode.next = curNode;
    prevNode = curNode;
  }
  prevNode.next = list1 ? list1 : list2;

  return head.next;
};
