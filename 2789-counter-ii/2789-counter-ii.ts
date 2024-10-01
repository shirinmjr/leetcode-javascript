type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {//5
    let orginalNum = init
    return {
        increment: () =>  ++init,

        decrement: () =>  --init,
        reset: () => {
            init = orginalNum
            return init
        }
        }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */