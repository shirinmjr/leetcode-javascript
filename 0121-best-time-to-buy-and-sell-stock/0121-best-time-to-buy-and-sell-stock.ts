function maxProfit(prices: number[]): number {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let price of prices) {
        if (price < minPrice){
            minPrice = price;
        }
        if (maxProfit< price-minPrice){
            maxProfit = price-minPrice
        }
    }
    return maxProfit
};