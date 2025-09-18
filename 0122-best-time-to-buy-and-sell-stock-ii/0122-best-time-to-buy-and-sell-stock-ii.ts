function maxProfit(prices: number[]): number {
    let maxProfit: number = 0
    let prevPrice: number = prices[0]
    for (let price of prices) {
        if (price > prevPrice) {
            maxProfit += price - prevPrice
        }
        prevPrice = price
    }
    return maxProfit
};