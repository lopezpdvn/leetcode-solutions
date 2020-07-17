# Time:  O(k * log(min(n, m, k))), where n is the size of num1, and m is the size of num2.
# Space: O(min(n, m, k))

from heapq import heappush, heappop

def kSmallestPairs(nums1, nums2, k):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :type k: int
    :rtype: List[List[int]]
    """
    pairs = []
    if len(nums1) > len(nums2):
        tmp = kSmallestPairs(nums2, nums1, k)
        for pair in tmp:
            pairs.append([pair[1], pair[0]])
        return pairs

    min_heap = []
    def push(i, j):
        if i < len(nums1) and j < len(nums2):
            heappush(min_heap, [nums1[i] + nums2[j], i, j])

    push(0, 0)
    while min_heap and len(pairs) < k:
        _, i, j = heappop(min_heap)
        pairs.append([nums1[i], nums2[j]])
        push(i, j + 1)
        if j == 0:
            push(i + 1, 0)  # at most queue min(n, m) space
    return pairs

print(kSmallestPairs([1, 7, 11], [2, 4, 6], 3))
print(kSmallestPairs([1, 1, 2], [1, 2, 3], 2))
print(kSmallestPairs([1, 2], [3], 3))
