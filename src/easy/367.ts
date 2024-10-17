// 367. Valid Perfect Square

// "SOLUTION: https://leetcode.com/problems/valid-perfect-square/submissions/1425059935/"
function isPerfectSquare(num: number): boolean {
    let start = 0;
    let end = num;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const square = mid * mid;

        if (square === num) {
            return true;
        }

        if (square < num) {
            start = mid + 1;
        } else {
            end = mid - 1;

        }
    }

    return false
};

console.log(isPerfectSquare(16))