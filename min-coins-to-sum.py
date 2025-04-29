def min_coins_to_sum(coins: list[int], sum: int) -> int:
    answers = [sum + 1] * (sum + 1)
    answers[0] = 0
    for coin in coins:
        for i in range(1, sum + 1):
            if (coin <= i):
                answers[i] = min(answers[i], 1 + answers[i - coin])
    return answers[-1] if answers[-1] != sum + 1 else -1

print(min_coins_to_sum([1,7],6))
print(min_coins_to_sum([9],6))
print(min_coins_to_sum([1,7],7))
print(min_coins_to_sum([1,7],8))
print(min_coins_to_sum([3,9,4],17))
print(min_coins_to_sum([3,11],100))