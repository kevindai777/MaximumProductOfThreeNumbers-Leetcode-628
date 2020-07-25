//Objective is to find the maximum product between any three numbers
//in an array


//O(n) solution that keeps track of the lowest two numbers and greatest
//three numbers

//Keep two numbers to keep track of the minimum two numbers
//And 3 numbers to keep track of the maximum three numbers
let min1 = Infinity
let min2 = Infinity
let max1 = -Infinity
let max2 = -Infinity
let max3 = -Infinity

for (let num of nums) {
    if (num <= min1) {
        min2 = min1
        min1 = num
    } else if (num <= min2) {
        min2 = num
    }
    
    if (num >= max1) {
        max3 = max2
        max2 = max1
        max1 = num
    } else if (num >= max2) {
        max3 = max2
        max2 = num
    } else if (num >= max3) {
        max3 = num
    }
}

return Math.max(min1 * min2 * max1, max1 * max2 * max3)