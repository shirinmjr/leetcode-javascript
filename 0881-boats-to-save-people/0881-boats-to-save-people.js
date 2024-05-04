/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    if (people === 0 || limit === 0) return 0
    people.sort((a, b) => a - b)

    let count = 0
    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            right--
            left++
        } else {
            right--
        }
        count++
    }
    return count
}