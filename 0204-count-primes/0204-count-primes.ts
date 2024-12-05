function countPrimes(n: number): number {
    if (n <= 2) return 0;
    const isPrime = Array.from({ length: n }, () => true);
    //const resultArray = Array(n).fill(true);
    isPrime[0] = false; // 0 is not a prime
    isPrime[1] = false; // 1 is not a prime
   // console.log(isPrime)
    let count = n - 2
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false; // Mark multiples of i as not prime
            }
        }
    }
    return isPrime.filter((val) => val).length; // Count true values
};