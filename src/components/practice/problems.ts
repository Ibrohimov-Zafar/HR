export type ProblemDifficulty = "Easy" | "Medium" | "Hard";
export type ProblemStatus = "solved" | "attempted" | "unsolved";

export type ProblemExample = {
  input: string;
  output: string;
  explanation?: string;
};

export type ProblemTestCase = {
  id: number;
  label: string;
  passed: boolean;
  runtime: string;
  memory: string;
  input: string;
  output: string;
  expected: string;
  error?: string;
};

export type ConsoleLine = {
  type: "info" | "pass" | "fail";
  text: string;
};

export type PracticeProblem = {
  id: string;
  number: number;
  title: string;
  difficulty: ProblemDifficulty;
  tags: string[];
  acceptance: string;
  status: ProblemStatus;
  topics: string;
  description: string[];
  examples: ProblemExample[];
  constraints: string[];
  followUp?: string;
  starterCode: string;
  functionName: string;
  testCases: ProblemTestCase[];
  consoleLines: ConsoleLine[];
  mentorHint: string;
  mentorTip: string;
};

export const practiceProblems: PracticeProblem[] = [
  {
    id: "two-sum",
    number: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    acceptance: "49.8%",
    status: "solved",
    topics: "Array · Hash Table",
    description: [
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      "You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    ],
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    constraints: ["2 <= nums.length <= 10⁴", "-10⁹ <= nums[i] <= 10⁹", "-10⁹ <= target <= 10⁹", "Only one valid answer exists."],
    starterCode: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`,
    functionName: "twoSum",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "52 ms", memory: "17.2 MB", input: "nums = [2,7,11,15], target = 9", output: "[0,1]", expected: "[0,1]" },
      { id: 2, label: "Case 2", passed: true, runtime: "48 ms", memory: "17.0 MB", input: "nums = [3,2,4], target = 6", output: "[1,2]", expected: "[1,2]" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 2 test cases against Solution.twoSum()..." },
      { type: "pass", text: "✓ Case 1 passed — 52 ms, 17.2 MB" },
      { type: "pass", text: "✓ Case 2 passed — 48 ms, 17.0 MB" },
      { type: "info", text: "> All tests passed · Total runtime: 100 ms" },
    ],
    mentorHint: "A hash map lets you check complements in O(1). What's the trade-off vs. sorting first?",
    mentorTip: "Mention both brute-force O(n²) and hash map O(n) approaches before coding.",
  },
  {
    id: "valid-parentheses",
    number: 20,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["String", "Stack"],
    acceptance: "40.2%",
    status: "solved",
    topics: "String · Stack",
    description: [
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      "An input string is valid if open brackets are closed in the correct order and each close bracket has a matching open bracket of the same type.",
    ],
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 <= s.length <= 10⁴", 's consists of parentheses only "()[]{}"'],
    starterCode: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {")": "(", "}": "{", "]": "["}
        for char in s:
            if char in pairs:
                if not stack or stack[-1] != pairs[char]:
                    return False
                stack.pop()
            else:
                stack.append(char)
        return not stack`,
    functionName: "isValid",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "28 ms", memory: "16.8 MB", input: 's = "()"', output: "true", expected: "true" },
      { id: 2, label: "Case 2", passed: true, runtime: "31 ms", memory: "16.9 MB", input: 's = "(]"', output: "false", expected: "false" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 2 test cases against Solution.isValid()..." },
      { type: "pass", text: "✓ Case 1 passed — 28 ms" },
      { type: "pass", text: "✓ Case 2 passed — 31 ms" },
      { type: "info", text: "> All tests passed" },
    ],
    mentorHint: "Stack is the natural fit here. Walk through what happens with nested brackets.",
    mentorTip: "Interviewers often ask about space complexity — it's O(n) for the stack.",
  },
  {
    id: "merge-two-sorted-lists",
    number: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    tags: ["Linked List", "Recursion"],
    acceptance: "62.1%",
    status: "attempted",
    topics: "Linked List · Recursion",
    description: [
      "You are given the heads of two sorted linked lists list1 and list2.",
      "Merge the two lists into one sorted list by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    ],
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" },
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50]", "-100 <= Node.val <= 100", "Both list1 and list2 are sorted in non-decreasing order."],
    starterCode: `class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        current = dummy
        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next
        current.next = list1 or list2
        return dummy.next`,
    functionName: "mergeTwoLists",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "36 ms", memory: "17.1 MB", input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]", expected: "[1,1,2,3,4,4]" },
      { id: 2, label: "Case 2", passed: false, runtime: "—", memory: "—", input: "list1 = [], list2 = [0]", output: "[]", expected: "[0]", error: "Wrong Answer — expected [0], got []" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 2 test cases against Solution.mergeTwoLists()..." },
      { type: "pass", text: "✓ Case 1 passed — 36 ms" },
      { type: "fail", text: "✗ Case 2 failed — Wrong Answer" },
      { type: "info", text: "> 1 / 2 test cases passed" },
    ],
    mentorHint: "Don't forget the edge case when one list is empty. A dummy node simplifies pointer logic.",
    mentorTip: "Compare iterative vs recursive solutions — both are O(n+m) time.",
  },
  {
    id: "maximum-subarray",
    number: 53,
    title: "Maximum Subarray",
    difficulty: "Medium",
    tags: ["Array", "DP"],
    acceptance: "50.3%",
    status: "unsolved",
    topics: "Array · Dynamic Programming",
    description: [
      "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      "A subarray is a contiguous non-empty sequence of elements within an array.",
    ],
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" },
    ],
    constraints: ["1 <= nums.length <= 10⁵", "-10⁴ <= nums[i] <= 10⁴"],
    followUp: "Can you solve it in O(1) extra space using Kadane's algorithm?",
    starterCode: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = current = nums[0]
        for num in nums[1:]:
            current = max(num, current + num)
            max_sum = max(max_sum, current)
        return max_sum`,
    functionName: "maxSubArray",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "88 ms", memory: "18.0 MB", input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", expected: "6" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 1 test case against Solution.maxSubArray()..." },
      { type: "pass", text: "✓ Case 1 passed — 88 ms" },
      { type: "info", text: "> All tests passed" },
    ],
    mentorHint: "Kadane's algorithm tracks the best sum ending at each index. Can you derive it?",
    mentorTip: "This is a classic DP problem — explain the recurrence before coding.",
  },
  {
    id: "longest-substring-without-repeating",
    number: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["Hash Table", "Sliding Window"],
    acceptance: "33.9%",
    status: "attempted",
    topics: "Hash Table · Sliding Window",
    description: [
      "Given a string s, find the length of the longest substring without duplicate characters.",
    ],
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with length 3.' },
      { input: 's = "bbbbb"', output: "1" },
    ],
    constraints: ["0 <= s.length <= 5 * 10⁴", "s consists of English letters, digits, symbols and spaces."],
    starterCode: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index = {}
        left = max_len = 0
        for right, char in enumerate(s):
            if char in char_index and char_index[char] >= left:
                left = char_index[char] + 1
            char_index[char] = right
            max_len = max(max_len, right - left + 1)
        return max_len`,
    functionName: "lengthOfLongestSubstring",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "45 ms", memory: "17.4 MB", input: 's = "abcabcbb"', output: "3", expected: "3" },
      { id: 2, label: "Case 2", passed: true, runtime: "42 ms", memory: "17.3 MB", input: 's = "bbbbb"', output: "1", expected: "1" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 2 test cases..." },
      { type: "pass", text: "✓ Case 1 passed — 45 ms" },
      { type: "pass", text: "✓ Case 2 passed — 42 ms" },
      { type: "info", text: "> All tests passed" },
    ],
    mentorHint: "Sliding window with a hash map tracks the last seen index of each character.",
    mentorTip: "Draw the window moving across the string to explain your approach.",
  },
  {
    id: "trapping-rain-water",
    number: 42,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    tags: ["Array", "Two Pointers", "Stack"],
    acceptance: "58.7%",
    status: "attempted",
    topics: "Array · Two Pointers · Stack",
    description: [
      "Given n non-negative integers height where each value represents the elevation of a bar. The width of each bar is 1.",
      "Compute how much water can be trapped between the bars after it rains. Water is trapped only when there are taller bars on both sides of a valley.",
    ],
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The elevation map traps 6 units of rain water.",
      },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 <= n <= 2 × 10⁴", "0 <= height[i] <= 10⁵"],
    followUp: "Can you solve it in O(n) time and O(1) space using two pointers?",
    starterCode: `class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        left, right = 0, len(height) - 1
        left_max = right_max = 0
        water = 0
        while left < right:
            if height[left] < height[right]:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    water += left_max - height[left]
                left += 1
            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    water += right_max - height[right]
                right -= 1
        return water`,
    functionName: "trap",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "32 ms", memory: "17.8 MB", input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", expected: "6" },
      { id: 2, label: "Case 2", passed: true, runtime: "28 ms", memory: "17.6 MB", input: "height = [4,2,0,3,2,5]", output: "9", expected: "9" },
      { id: 3, label: "Case 3", passed: false, runtime: "—", memory: "—", input: "height = [1,0,1]", output: "0", expected: "1", error: "Wrong Answer — expected 1, got 0" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 3 test cases against Solution.trap()..." },
      { type: "pass", text: "✓ Case 1 passed — 32 ms, 17.8 MB" },
      { type: "pass", text: "✓ Case 2 passed — 28 ms, 17.6 MB" },
      { type: "fail", text: "✗ Case 3 failed — Wrong Answer" },
      { type: "info", text: "> 2 / 3 test cases passed · Total runtime: 60 ms" },
    ],
    mentorHint: "Your two-pointer approach is solid. Can you explain the space complexity when the input array is extremely large?",
    mentorTip: "Consider mentioning a monotonic stack as an alternative approach.",
  },
  {
    id: "number-of-islands",
    number: 200,
    title: "Number of Islands",
    difficulty: "Medium",
    tags: ["Array", "DFS", "BFS"],
    acceptance: "57.4%",
    status: "unsolved",
    topics: "Array · DFS · BFS",
    description: [
      "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      "An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    ],
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300", 'grid[i][j] is "0" or "1".'],
    starterCode: `class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0
        rows, cols = len(grid), len(grid[0])
        count = 0

        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] == "0":
                return
            grid[r][c] = "0"
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1":
                    dfs(r, c)
                    count += 1
        return count`,
    functionName: "numIslands",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "92 ms", memory: "18.2 MB", input: "grid = 4x5 (1 island)", output: "1", expected: "1" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 1 test case against Solution.numIslands()..." },
      { type: "pass", text: "✓ Case 1 passed — 92 ms" },
      { type: "info", text: "> All tests passed" },
    ],
    mentorHint: "DFS or BFS both work. Think about how you avoid revisiting cells.",
    mentorTip: "Discuss iterative BFS vs recursive DFS and stack overflow risks on large grids.",
  },
  {
    id: "coin-change",
    number: 322,
    title: "Coin Change",
    difficulty: "Medium",
    tags: ["Array", "DP"],
    acceptance: "41.6%",
    status: "unsolved",
    topics: "Array · Dynamic Programming",
    description: [
      "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.",
      "Return the fewest number of coins needed to make up that amount. If that amount cannot be made up, return -1.",
    ],
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: ["1 <= coins.length <= 12", "1 <= coins[i] <= 2³¹ - 1", "0 <= amount <= 10⁴"],
    starterCode: `class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float("inf")] * (amount + 1)
        dp[0] = 0
        for coin in coins:
            for i in range(coin, amount + 1):
                dp[i] = min(dp[i], dp[i - coin] + 1)
        return dp[amount] if dp[amount] != float("inf") else -1`,
    functionName: "coinChange",
    testCases: [
      { id: 1, label: "Case 1", passed: true, runtime: "110 ms", memory: "18.5 MB", input: "coins = [1,2,5], amount = 11", output: "3", expected: "3" },
    ],
    consoleLines: [
      { type: "info", text: "> Running 1 test case against Solution.coinChange()..." },
      { type: "pass", text: "✓ Case 1 passed — 110 ms" },
      { type: "info", text: "> All tests passed" },
    ],
    mentorHint: "Classic bottom-up DP. Define dp[i] as the minimum coins for amount i.",
    mentorTip: "Compare with the unbounded knapsack pattern — interviewers love that connection.",
  },
];

export function getProblemById(id: string): PracticeProblem | undefined {
  return practiceProblems.find((p) => p.id === id);
}

export function difficultyTone(difficulty: ProblemDifficulty) {
  switch (difficulty) {
    case "Easy":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    case "Medium":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "Hard":
      return "border-red-200 bg-red-50 text-red-700";
  }
}
