function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            maxProfit += (prices[i + 1] - prices[i]);
        }
    }
    return maxProfit;
};
/* Dynamic Programming 
function maxProfit(prices: number[]): number {
    const dp = new Array(prices.length).fill(0);
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]); // Update the minimum price
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice); // Update dp[i]
    }

    return dp[prices.length - 1]; // Maximum profit at the last day
}
*/