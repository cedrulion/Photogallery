// Function to check if there exists a contiguous subarray that sums up to the target
function hasSubarrayWithSum(arr, target) {
    let sum = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum > target) {
            sum -= arr[start];
            start++;
        }

        if (sum === target) {
            return true;
        }
    }

    return false;
}

// Test cases
console.log(hasSubarrayWithSum([4, 2, 7, 1, 9, 5], 17)); // true
console.log(hasSubarrayWithSum([1, 2, 3, 4, 5], 9)); // true
console.log(hasSubarrayWithSum([10, 20, 30], 15)); // false
