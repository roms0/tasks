def bottom_up_dp(costs: list[int]) -> int:
    size = len(costs)
    if size == 0: return 0
    answers = [0] * size

    def track(pos: int) -> int:
        fresh = costs[pos]
        left = 0
        right = pos - 1
        while right >= left:
            fresh = max(fresh, answers[left] + answers[right])
            left += 1
            right -= 1
        return fresh

    for i in range(size):
        answers[i] = track(i)

    return max(answers)

# time: n^2
# space: n

print(bottom_up_dp([]))
print(bottom_up_dp([1]))
print(bottom_up_dp([5,5]))
print(bottom_up_dp([1, 5, 8, 9, 10, 17, 17, 20]))
print(bottom_up_dp([3, 5, 8, 9, 10, 17, 17, 20]))

