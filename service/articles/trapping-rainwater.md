# Trapping rainwater

### We shall do more of it in real life as well.

Well, this question is a real easy one. On leetcode it's [numbered at 42](https://leetcode.com/problems/trapping-rain-water/description).

Despite of knowing the solution by heart I messed up showcasing my solution in my Amazon interview. It is similar to [container with most water problem](https://leetcode.com/problems/container-with-most-water/description/) whom I mixed it up with😐. Or was it vice versa? See, even at the moment of writing this I am even confused.

The lesson was simple, 
> Don't jump to most optimal solutions in one go, especially during interviews when excitement is running high.

The solution is to calculate the maximum height amongst all elevations on both the sides for each elevation in the array. Since these maximums will prevent water runoff therefore they'll probably help in storing some water.

Then we can pick the minimum amongst both, left and right height's and subtract the height of current elevation from it to determine the amount of rainwater stored for elevation at that index.

![rain-water-trap](https://firebasestorage.googleapis.com/v0/b/zealot97-c70d5.appspot.com/o/rainwatertrap.png?alt=media&token=ff15926f-1eef-4958-9d01-ecdbac7b1a15)

The brute way to do this is to iterate over the array once and for each element calculate the maximum height on both sides. This'll run in `O(n^2)`. It's trivial and can easily be visualised. So I won't bother writing the code for this solution.

Of course, we can use the _dynamic programming_ to store the recurring calculations of maximums for both left and right using a single pass from left to right and then from right to left. And then simply use it to calculate the result. In this case the time complexity is gonna be `O(n)` and memory complexity, `O(n)`.

Here's my code,
```java
class Solution {
    public int trap(int[] height) {
        if(height.length <3) return 0;
        int wCollected = 0, left[] = new int[height.length], right[] = new int[height.length];
        left[0] = height[0];
        for(int i=1; i<height.length; i++){
            left[i] = Integer.max(height[i], left[i-1]);
        }
        right[height.length-1] = height[height.length-1];
        for(int i=height.length-2; i>=0; i--){
            right[i] = Integer.max(height[i], right[i+1]);
        }
        for(int i=1; i<height.length; i++){
            wCollected += Integer.min(left[i], right[i]) - height[i];
        }
        return wCollected;
    }
}
```

However, if we carefully observe the left and right height arrays we'll see that they follow a strictly increasing and decreasing order respectively. That's the trick for better space complexity. Hope it ticked you....

Let's utilize it. For that we use _two pointer method_. 

We'll use these pointers for indexing(call it `left` and `right`) as well as one more pair (call it `leftMax` and `rightMax`) to store the maximum height. 

If the elevation at `left` is smaller than `right`, we calculate water collected in it based on max values as we did above and increment `left` by 1. Otherwise, we do the same for elevation on the `right` and decrement `right` by 1. If this difference is negative we don't add it to solution.

As we can see it works with memory complexity of `O(1)` and time complexity of `O(n)`.

Here's my implementation of it,
```java
class Solution {
    public int trap(int[] hts) {
        if(hts.length < 3) return 0;
        int l, r, maxL, maxR;
        l = 0;
        r = hts.length-1;
        maxL = hts[l]; maxR = hts[r];
        int water = 0;
        while(l<r){
            if(maxL<maxR){
                water += Integer.max(0, Integer.min(maxL, maxR)-hts[l]);
                maxL = Integer.max(maxL, hts[++l]);
            }else{
                water += Integer.max(0, Integer.min(maxL, maxR)-hts[r]);
                maxR = Integer.max(maxR, hts[--r]);
            }
        }
        return water;
    }
}
```
Hope it helps, 👋.
