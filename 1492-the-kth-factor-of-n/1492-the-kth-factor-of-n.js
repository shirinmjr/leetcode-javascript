/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const factors=[]
    let i=1
    while (i<=n){
        
        if(n%i===0){
            factors.push(i)
        }
        i++
    }
    console.log(factors)
   return factors[k-1]?factors[k-1]:-1
};