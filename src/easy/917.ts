// 917. Reverse Only Letters

// Submition: https://leetcode.com/problems/reverse-only-letters/submissions/1383869123/

function reverseOnlyLetters(s: string): string {
  const arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!/[a-zA-Z]/.test(arr[left])) {
      left++;
      continue;
    }
    if (!/[a-zA-Z]/.test(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseOnlyLetters("ab-cd"));
