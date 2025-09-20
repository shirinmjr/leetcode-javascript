function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
};