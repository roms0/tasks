function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  // Initialize states
  let fb = -prices[0]; // First buy (start with buying the first stock)
  let fs = 0; // First sell (can't sell yet)
  let sb = -prices[0]; // Second buy (can't buy twice yet, but initialized for loop)
  let ss = 0; // Second sell (can't sell yet)

  for (let i = 1; i < prices.length; i++) {
    // Save yesterday's values
    const prev_fb = fb;
    const prev_fs = fs;
    const prev_sb = sb;
    const prev_ss = ss;

    // Update states (in dependency order)
    fb = Math.max(prev_fb, -prices[i]); // Buy first stock or hold
    fs = Math.max(prev_fs, prev_fb + prices[i]); // Sell first stock or skip
    sb = Math.max(prev_sb, prev_fs - prices[i]); // Buy second stock or hold
    ss = Math.max(prev_ss, prev_sb + prices[i]); // Sell second stock or skip
  }

  return ss; // Max profit after at most two transactions
}

console.log(maxProfit([6, 1, 3, 2, 4, 7]));
