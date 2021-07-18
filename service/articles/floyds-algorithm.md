There are a few questions on linked list that can harness Floyd's algorithm. One of them being [this](https://leetcode.com/problems/linked-list-cycle) on leetcode.

### Story nostalgia

This question made me remember the story we heard in our childhood. Of a bunny🐇 and a tortoise🐢 race. Who won in that.... the tortoise. Why? Because the bunny slept💤.

In the following algorithm, bunny wins the race🏁. Because he learnt his lesson and didn't sleep this time. But eventually both lose because they get stuck in a loop...

Enough with the story.

### Brute way 💪

The general way that comes into mind while loop detection in linked list is the method to store all node references in a single pass within a hash function and, if during iteration, we encounter a node already existing in the hash... the loop is found. We can store this reference for the application and for the usage we desire.

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        Set<ListNode> map = new HashSet<>();
        while(head!=null){
            map.add(head);
            if(head.next != null && map.contains(head.next)) return true;
            head = head.next;
        }
        return false;
    }
}
```

But it's a relatively expensive w.r.t. the algorithm we are gonna discuss, in terms of memory, the complexity being `O(n)`.

### Memory optimized approach 🤔

A trick to reduce memory complexity is to use two pointers. A `fast` and `slow` one. `fast` moves two nodes at a time. `slow` moves across one.

Results first, maths later. In order to detect the loop, we first allow the two pointers to meet. With the speed of `fast` twice to that of `slow`. `slow` moves one node ahead at a time (duh....).

Once they meet we once again start the iteration. For `slow` we start from the beginning of linked list and for the `fast` pointer we start from wherever it is. But both of them move one node at a time (Hare doesn't have infinite energy after all, he's tired... or maybe he's getting pompous, again). Now .... when these two meet during the iteration we get our **looping point**. 

Since in the question we don't need the looping point, we can allow the pointers to meet once and break out.

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head == null || head.next == null) return false; // not possible
        
        ListNode slow=head, fast = head.next;
        while(fast!=slow){
            if(fast == null || null == fast.next) return false; // no cycle
            fast = fast.next.next;
            slow = slow.next;
        }
        return true;
    }
}
```
Time complexity is along some constant factor of `O(n)` which is effectively the same. But memory complexity is now `O(1)`.

### Finding looping point - maths here🤩

![Floyd algorithm diagram](https://firebasestorage.googleapis.com/v0/b/zealot97-c70d5.appspot.com/o/Screenshot%20from%202021-07-17%2015-33-54.png?alt=media&token=657ba807-5e8c-447e-95c6-8c6e74153bc0)
Please have a look at above diagram. Note the distances are in clockwise direction.

Let's assume that linked list is as in diagram above. *A* is starting point. *B* is point where loop starts. *C* is point where the two pointers meet for the first time. *a* is distance from *A* to *B*. *b* is from *B* to *C*. *c* for *C* to *B*.

Now when the two pointers to meet for the first time, distance moved by `slow` is `a+b` and by `fast` is `a+b+c+b`. Then...
```
(a+b)*2=a+b+c+b => a=c
```

Therefore after `fast` and `slow` meet, if we move both `slow`(from _**start**_ pt) and `fast`(from _**wherever it is**_) with same speed(we can use **1 node/jump**) and then allow them to meet, we can find the **looping point**.
