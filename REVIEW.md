### SET

```JS
const mySet = new Set();
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
## Closures
### Objects

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

```TS
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: function (val2: any) {
            if (val === val2) return true
            throw new Error("Not Equal")
        },
        notToBe: function (val2: any) {
            if (val !== val2) return true
            throw new Error("Equal")
        }
    }
};
```
## Array

#### Apply Transform Over Each Element in Array
```TS
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    return arr.map((n,i) =>  fn(n, i))
};
```
#### Filter Elements from Array
```TS
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  return  arr.filter((num,i)=>fn(num,i))
};
```
### Array Reduce Transformation
The reduce method's callback function should receive two arguments: the accumulator (result from previous calculations) and the current value from the array.
```TS
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  return nums.reduce((accum, curr) => fn(accum, curr), init);

};
```
https://github.com/shirinmjr/leetcode-javascript/blob/main/2761-array-reduce-transformation/2761-array-reduce-transformation.ts

