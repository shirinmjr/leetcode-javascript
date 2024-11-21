function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0)
    const stack: number[] = []

    for (let i = 0; i < temperatures.length; i++) {
        // While stack is not empty and
        // current temperature is greater than the temperature at the top index in the stack
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop()!;  // Pop the index of the cooler temperature
            result[index] = i - index;  // The number of days to wait is the difference in indices
        }
        // Push the current index onto the stack
        stack.push(i)
    }
    return result
};