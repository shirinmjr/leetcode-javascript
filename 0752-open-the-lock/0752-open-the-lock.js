/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function openLock(deadends, target) {
    // Initialize a set to keep track of deadends for faster lookup
    const deadSet = new Set(deadends);
    
    // If the initial state is a deadend, return -1
    if (deadSet.has("0000")) {
        return -1;
    }
    
    // Initialize a queue for BFS and add the initial state
    const queue = ["0000"];
    // Initialize a set to keep track of visited states
    const visited = new Set(["0000"]);
    // Initialize the number of moves required to reach the target
    let moves = 0;
    
    // Perform BFS
    while (queue.length > 0) {
        // Explore nodes at the current level
        const levelSize = queue.length;
        for (let k = 0; k < levelSize; k++) {
            const current_state = queue.shift();
            
            // If we reach the target state, return the number of moves
            if (current_state === target) {
                return moves;
            }
            
            // Explore all possible states reachable from the current state
            for (let i = 0; i < 4; i++) {
                for (let j of [-1, 1]) {
                    // Calculate the new state by changing one digit
                    const new_digit = (parseInt(current_state[i]) + j + 10) % 10;
                    const new_state = current_state.slice(0, i) + new_digit + current_state.slice(i + 1);
                    
                    // Check if the new state is not a deadend and not visited
                    if (!deadSet.has(new_state) && !visited.has(new_state)) {
                        // Add the new state to the queue and visited set
                        queue.push(new_state);
                        visited.add(new_state);
                    }
                }
            }
        }
        
        // Increment the number of moves for the next level
        moves++;
    }
    
    // If the target state is not reachable, return -1
    return -1;
}

// Example usage:
const deadends = ["0201", "0101", "0102", "1212", "2002"];
const target = "0202";
console.log(openLock(deadends, target)); // Output: 6