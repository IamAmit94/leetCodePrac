// https://leetcode.com/problems/find-words-containing-character/description/

// 2942. Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

 

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
// Example 3:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []
// Explanation: "z" does not occur in any of the words. Hence, we return an empty array.

// 1st approch
const findWordsContaining = function(words, x) {
    let n = words.length;
    let wordContainArray = []
    for (let i = 0; i < n; i++) {
         let char = words[i].length;
         for(let j = 0; j < char; j ++) {
                if(words[i][j] === x) {
                    wordContainArray.push(i);
                    break; // break the loop once match is found;
                }
         }
    }
    return wordContainArray;
};

// 2nd approch
// const findWordsContaining = function(words, x) {
//     const result = [];

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes(x)) {
//             result.push(i);
//         }
//     }

//     return result;
// }

let arrayString = ["leet","code"];
let toFind = 'e'
const result = findWordsContaining(arrayString, toFind)
console.log(result)