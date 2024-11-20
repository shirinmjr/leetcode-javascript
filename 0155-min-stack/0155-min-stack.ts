class MinStack {
    private stack: { value: number; min: number }[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
        this.stack.push({ value: val, min });
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1].value;
    }

    getMin(): number {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
return this.stack[this.stack.length-1].min

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */