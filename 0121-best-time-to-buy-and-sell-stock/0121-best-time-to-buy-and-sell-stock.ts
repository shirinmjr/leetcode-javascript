function maxProfit(prices: number[]): number {
    let minPrice = Infinity; // Initialize with a large value
    let maxProfit = 0;
    for (let price of prices) {
        // compaire each min to min price - keep pushing to lower it
        minPrice = Math.min(minPrice, price);
        // Update maxProfit - keep pushing to get higher and higher profit
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
};