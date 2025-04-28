def reach_top_tabulation(ladder: [int]) -> int:
    ladder_len = len(ladder)
    if ladder_len < 1: return 0
    if ladder_len < 3: return min(ladder)

    tab = [0] * (ladder_len + 1)
    for i in range(2, len(tab)):
        tab[i] = min(tab[i - 2] + ladder[i - 2], tab[i - 1] + ladder[i - 1])
    
    print(tab)
    return tab[-1]

# time: n
# space: n

print(reach_top_tabulation([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
print(reach_top_tabulation( [10, 15, 20]))
print(reach_top_tabulation( [1,5,8,10,4,1,50,400,0,100,200,0]))

