/**
 * Encodes a URL to a shortened URL.
 */
let urlMap = new Map();
let baseURL = "http://tinyurl.com/";
let count = 0;
function encode(longUrl: string): string {
    let shortKey = count.toString(36)
    count += 1
    urlMap.set(shortKey, longUrl);
    return baseURL + shortKey
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
 const shortKey = shortUrl.replace(baseURL, "");

        // Return the original long URL
        return urlMap.get(shortKey);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */