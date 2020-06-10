/*
A Least Recently Used (LRU) Cache

Accessing and Evicting

Putting things together, here are the steps we'd run through each time an item was accessed:

Look up the item in our hash map.

If the item is in the hash table, then it's already in our cache—this is called a "cache hit"

Use the hash table to quickly find the corresponding linked list node.

Move the item's linked list node to the head of the linked list, since it's now the most recently used (so it shouldn't get evicted any time soon).

If the item isn't in the hash table, we have a cache miss. We need to load the item into the cache:

Is our cache full? If so, we need to evict something to make room:

Grab the least-recently used cache item—it'll be at the tail of the linked list.

Evict that item from the cache by removing it from the linked list and the hash map.

Create a new linked list node for the item. Insert it at the head of the linked list.

Add the item to our hash map, storing the newly-created linked list node as the value.

Keeping all the pointers straight as you move around linked list nodes is tricky! Try implementing it yourself! See if you can see why it's important that our linked list is doubly-linked :)

All of those steps are O(1)O(1), so put together it takes O(1)O(1) time to update our cache each time an element is accessed. Pretty cool!

*/

/**
 * ============================================
 * A Least Recently Used (LRU) Cache Implementation.
 * CREDIT: Inteview Cake
 * WEBSITE: https://www.interviewcake.com/concept/java/lru-cache
 * ============================================
 */
