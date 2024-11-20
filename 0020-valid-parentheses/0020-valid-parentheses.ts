function isValid(s: string): boolean {
    const close_to_open = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    const stack: string[] = [];
    for (const c of s) {//check every charactor of the string
        if (close_to_open.has(c)) { //does the map has the key
            if (stack.length === 0 ||// it's false if there is no element left in the stack to match
                stack.pop() !== close_to_open.get(c)) {// falase pop the last stack and it is not matching the value
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0 // If the stack is empty, all brackets are matched

};