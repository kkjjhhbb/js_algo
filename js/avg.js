const nums = [3, 16, 5, 25, 4, 34, 21];
const len = nums.length;
console.log(nums.reduce((avg, value) => avg + value / len, 0));
