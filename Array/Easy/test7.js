// Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17
 
// 1st approch
// const maximumWealth = (accounts) =>  {
//     let n = accounts.length;
//     let maxWealth = 0;

//     for (let i = 0; i < n; i++) {
//         let wealth = 0;
//         let m = accounts[i].length;
//         for(let j = 0; j<m;j++) {
//             wealth += accounts[i][j];
      
//         }
//         maxWealth = Math.max(maxWealth, wealth);
//     }
//     return maxWealth;
// };

// 2nd approch
const  maximumWealth = (accounts) => {
    let maxWealth = 0;

    // Iterate through each customer's accounts
    for (let i = 0; i < accounts.length; i++) {
        // Calculate the wealth of the current customer
        const wealth = accounts[i].reduce((sum, amount) => sum + amount, 0);

        // Update maxWealth if the current customer's wealth is greater
        maxWealth = Math.max(maxWealth, wealth);
    }

    return maxWealth;
}

let custAccount =  [[1,5],[7,3],[3,5]];
const result  = maximumWealth(custAccount);
console.log(result)