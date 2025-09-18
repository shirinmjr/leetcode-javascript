function maxProfit(prices: number[]): number {
   let minPrice = Infinity; // Initialize with a large value
   let maxProfit = 0;


   for (let price of prices) {
       minPrice = Math.min(minPrice, price); // Update minPrice
       maxProfit = Math.max(maxProfit, price - minPrice); // Update maxProfit
   }


   return maxProfit;


   // let minPrice = prices[0]
   // let maxProfit = 0
   // for (let i = 1; i < prices.length; i++) {
   //     if (prices[i] < minPrice) {
   //         minPrice = prices[i]
   //     }
   //     if (maxProfit < prices[i] - minPrice) {
   //         maxProfit = prices[i] - minPrice
   //     }
   // }
   // return maxProfit
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






