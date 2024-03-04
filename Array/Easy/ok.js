const countGoodPairs  = (arr) => {
    let goodPairsCount = 0;
    let goodPair = {};

    for (let num of arr) {

        if (goodPair[num]) {

            goodPairsCount +=  goodPair[num];
            goodPair[num]++;
        } else  {
            goodPair[num] = 1;
        }
    }
return goodPairsCount;
}




const nums = [1, 2, 3, 1, 1, 3];
const result = countGoodPairs(nums);

console.log(result);