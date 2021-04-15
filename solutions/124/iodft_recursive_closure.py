class Solution:
  def maxPathSum(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    def max_gain(node):
      nonlocal max_sum
      if not node:
        return 0

      # max sum on the L & R sub-trees of node
      L_gain = max(max_gain(node.left), 0)
      R_gain = max(max_gain(node.right), 0)
      
      # price 2 start a new path where node is a
      # highest node
      price_newpath = node.val + L_gain + R_gain
      
      # update max_sum if it's better 2 start
      # a new path
      max_sum = max(max_sum, price_newpath)
    
      # for recursion:
      # return max gain if continue same path
      return node.val + max(L_gain, R_gain)
   
    max_sum = float('-inf')
    max_gain(root)
    return max_sum
