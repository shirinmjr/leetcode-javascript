class LRUCache {
    capacity: number
    cache: Map<number, number>

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {

        if (this.cache.has(key)) {  //check if the key exist
            const value = this.cache.get(key)//get the value for the ket
            this.cache.delete(key)//remove the key after fetched
            this.cache.set(key, value)//set it to the latest postions which is the latest used
            return value //return result **after reordering***
        }
        return -1 //if key not found return -1
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {//if key already exists, remove the key and add it again at the begining which is the latest used
            this.cache.delete(key)
        }
        this.cache.set(key, value)

        // If the cache exceeds its capacity, remove the least recently used item
        if(this.cache.size > this.capacity){
            const leastRecentlyUsedKey = this.cache.keys().next().value; // Get the first key ///which is the least recent
                        this.cache.delete(leastRecentlyUsedKey); // Remove it
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

