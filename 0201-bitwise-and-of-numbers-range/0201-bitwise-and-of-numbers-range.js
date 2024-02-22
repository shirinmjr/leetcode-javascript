var rangeBitwiseAnd = function (left, right) {
    let shift = 0;
    // console.log("start", left, right);
    console.log("start", "left: ", left.toString(2), "right: ", right.toString(2));

    // Find the common bits in the binary representations of left and right
    while (left < right) {
console.log("while left: ",left,"right",right)
        left >>= 1;
        right >>= 1;
        console.log("left: ", left.toString(2), "right: ", right.toString(2));
        //console.log(left, right);
        shift++;
        
    }
    // Shift back the common bits to the original position
    console.log("shift", shift);
    console.log(left << shift);
    return left << shift;
};


//console.log(rangeBitwiseAnd(5, 7)); // Output: 4
//console.log(rangeBitwiseAnd(16, 32)); // Output: 4
//console.log(rangeBitwiseAnd(0, 0)); // Output: 0
//console.log(rangeBitwiseAnd(1, 2147483647)); // Output: 0

// start left:  101 --- 110 -----right:  111
//100 111 => 100
// practice.js:8 shift 0
// practice.js:11 left:  10 right:  11
// practice.js:8 shift 1
// practice.js:11 left:  1 right:  1
// practice.js:16 4
// practice.js:21 4
/**
 * start left:  10000 right:  100000
practice.js:8 while left:  16 right 32
practice.js:11 left:  1000 right:  10000
practice.js:8 while left:  8 right 16
practice.js:11 left:  100 right:  1000
practice.js:8 while left:  4 right 8
practice.js:11 left:  10 right:  100
practice.js:8 while left:  2 right 4
practice.js:11 left:  1 right:  10
practice.js:8 while left:  1 right 2
practice.js:11 left:  0 right:  1
practice.js:8 while left:  0 right 1
practice.js:11 left:  0 right:  0
practice.js:17 shift 6
practice.js:18 0
practice.js:24 0
 */