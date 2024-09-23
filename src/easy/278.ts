// 278. First Bad Version

// Solution: https://leetcode.com/problems/first-bad-version/submissions/1399556497/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution =
    (isBadVersion: any) =>
        (n: number): number => {
            let left = 1;
            let right = n;
            let mid = 0;
            let ans = n;

            while (left <= right) {
                mid = Math.floor((left + right) / 2);
                if (isBadVersion(mid)) {
                    ans = Math.min(ans, mid);
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            return ans;
        };
