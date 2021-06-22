# Floyd's algorithm for loop detection in linked list

## Also called tortoise 🐢 and hare algorithm 🐇.... makes me remember that story on the two in which hare lost

There are many questions and applications on loop detection in a linked list. 

Important thing to remember is the story we heard in our childhood. Of a bunny🐇 and a tortoise🐢 race. Who won in that.... the tortoise. Why? Because the bunny slept💤.

In the above algorithm, bunny wins the race🏁. Because he learnt his lesson and didn't sleep this time. But eventually both lose because they get stuck in a loop... called life.

Enough with philosophy.

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

But it's a damn computationally expensive. In terms of memory, the complexity being `O(n)`. Time complexity is also the same.

### Memory optimized approach 🤔

A trick to reduce memory complexity is to use two pointers. A `fast` and `slow` one. `fast` moves two nodes at a time. `slow` moves across one.

Results first, maths later. In order to detect the loop, we first allow the two pointers to meet. With the speed of `fast` twice to that of `slow`. `slow` moves one node ahead at a time (duh....).

Once they meet we once again start the iteration. For `slow` we start from the beginning of linked list and for the `fast` pointer we start from wherever it is. But both of them move one node at a time (Hare doesn't have infinite energy after all, he's tired... or maybe he's getting cocky). Now .... when these two meet during the iteration we get our **looping point**.

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

### Maths here🤩

Please note the distances are in clockwise direction.

Let's assume that linked list is as in diagram above. *A* is starting point. *B* is point where loop starts. *C* is point where the two pointers meet for the first time. *a* is distance from *A* to *B*. *b* is from *B* to *C*. *c* for *C* to *B*.

Now when the two pointers to meet for the first time, distance moved by `slow` is `a+b` and by `fast` is `a+b+c+b`. Then...
```
(a+b)*2=a+b+c+b => a=c
```

### Important noted observation - ignore

Please refer the diagram above. *A* is starting point of the loop. *C* is point where the two pointers meet. *B* is point where `fast` is when `slow` enters the loop.

The important point is that *C* can be before or after *B*. *a* is distance from *A* to *B*. *c* is from either *B* to *C* or *C* to *B* as per the two cases. *b* is distance from *B* to *A*.

If you take examples you'll know that **fast** will catch and meet up to **slow** before slow finishes one cycle of the loop. This is the key observation here. 

One key observation is for the case when our `fast` and `slow` meet within the loop.

When *C* is before *B*, 
```
2(a-c) = b+a-c => b=a-c
```

Similarly for the other case we'll get,
```
2(a+c) = b+a+c => b=a+c
```

Thanks for coming here and gracing me with your precious time. Some recommendations are listed somewhere around here. Let's meet again soon......
