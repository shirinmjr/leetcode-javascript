/**
 * Encodes a URL to a shortened URL.
 */

// Create a global map to store the mapping between short keys and long URLs
let urlMap = new Map<string, string>();

// Base URL for the shortened URLs
let baseURL = "http://tinyurl.com/";

// Counter to ensure unique short keys
let count = 0;

function encode(longUrl: string): string {
    // Generate a unique short key using the counter, converted to a base-36 string
    // Base-36 uses numbers and letters, creating compact and unique keys
    let shortKey = count.toString(36);

    // Increment the counter to ensure the next short key is unique
    count += 1;

    // Store the mapping of the short key to the original URL
    urlMap.set(shortKey, longUrl);

    // Return the full shortened URL by appending the short key to the base URL
    return baseURL + shortKey;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    // Extract the short key by removing the base URL from the shortened URL
    const shortKey = shortUrl.replace(baseURL, "");

    // Use the short key to look up the original URL in the map
    return urlMap.get(shortKey)!; // The `!` asserts that the key exists in the map
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */