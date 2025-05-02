
# memo O(SUM)           есть указатели на строго 2 списка длины SUM
# time O(SUM x coins)   делаем bottom-up таблицу

def combinations(coins: list[int], sum: int) -> int:
    dp = [0] * (sum + 1)
    dp[0] = 1

    # traverse coins from top one to min
    for i in range(len(coins) - 1, -1, -1):
        print(coins[i])
        # build fresh array for the coin
        next = [0] * (sum + 1)
        next[0] = 1
        for a in range(1, sum + 1):
            next[a] = dp[a]
            print(a, '-', coins[i], '= ', a - coins[i])
            if a - coins[i] >= 0:
                next[a] += next[a - coins[i]]
        # print(dp)
        # print(next)
        # print('###')
        dp = next
    
    return dp[sum]

combinations([1,3,4], 4)
