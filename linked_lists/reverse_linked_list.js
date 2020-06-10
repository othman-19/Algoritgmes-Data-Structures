/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
  if (head === null || head.next === null){
      return []
  }
  
  let previous = null;
  let current = head;
  while(current !== null) {
      let next_node = current.next
      current.next = previous;
      previous = current;
      current = next_node;
  }
  return previous
};

reverseList()

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
