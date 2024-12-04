function maxProfit(prices: number[]): number {

    let maxProfit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {//tomorrow price = prices[i+1]
            maxProfit += (prices[i + 1] - prices[i])
        }
        
    }

    return maxProfit
};