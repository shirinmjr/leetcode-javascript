function evalRPN(tokens: string[]): number {
    const operations = new Set<String>(['+', '-', '*', '/'])
    const stack: number[] = [];
    for (const token of tokens) {
        //console.log(stack)
       if (!operations.has(token)) { // if (!isNaN(Number(token))) {
            //if token is a number
            stack.push(Number(token))
        } else {
            let a = stack.pop()
            let b = stack.pop()
            // console.log(a,token,b)
            // Perform the operation based on the operator
            let result: number;
            switch (token) {
                case "+":
                    result = b + a;
                    break;
                case "-":
                    result = b - a;
                    break;
                case "*":
                    result = b * a;
                    break;
                case "/":// Truncate division towards zero
                    result = Math.trunc(b / a);
                    break;
                default:
                    throw new Error(`Invalid operator: ${token}`);
            }
            // console.log(result)
            stack.push(result)
        }
    }
    // The final result will be the only element left in the stack
    return stack.pop()!;
};