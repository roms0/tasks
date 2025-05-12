function stocks(prices: number[]) {
  if (prices.length < 1) return 0;
  let hold = -prices[0];
  let sold = 0;
  let idle = 0;

  for (let i = 1; i < prices.length; i++) {
    let yesterday_hold = hold;
    let yesterday_idle = idle;
    let yesterday_sold = sold;

    hold = Math.max(yesterday_hold, yesterday_idle - prices[i]);
    sold = yesterday_hold + prices[i];
    idle = Math.max(yesterday_idle, yesterday_sold);
  }

  return Math.max(idle, sold);
}

console.log(stocks([7, 6, 4, 6, 3, 8]));
