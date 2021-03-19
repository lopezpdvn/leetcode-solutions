def f(prices):
    if prices is None or len(prices) < 2:
        raise Exception()

    from math import inf
    # a - b
    b = inf
    profit = 0

    for price in prices:
        if price < b:
            b = price
            continue

        a = price
        profit = max(profit, a - b)

    return profit

assert f([7,1,5,3,6,4]) == 5
assert f([7,6,4,3,1]) == 0
