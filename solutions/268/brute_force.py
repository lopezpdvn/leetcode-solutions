def f(nums):
    if nums is None: raise Exception()
    if not nums: return 0
    n = len(nums)
    nums.sort()

    if nums[-1] != n: return n
    if nums[0]: return 0

    for i in range(n - 1):
        expected = nums[i] + 1
        if nums[i + 1] != expected:
            return expected

assert f([]) == 0
assert f([0]) == 1
assert f([1]) == 0
assert f([3,0,1]) == 2
assert f([9,6,4,2,3,5,7,0,1]) == 8
