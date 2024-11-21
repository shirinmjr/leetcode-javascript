function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0);  // Initialize result with 0's
    const stack: number[] = []


    for (let i = 0; i < temperatures.length; i++) {


        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();  // Get the index of the previous day with a smaller temperature
            result[index!] = i - index;  // The number of days to wait is the difference in indices
        }
        stack.push(i);
    }

    return result;




};