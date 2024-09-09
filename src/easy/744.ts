// 744. Find Smallest Letter Greater Than Target

// Submission: https://leetcode.com/problems/find-smallest-letter-greater-than-target/submissions/1384239585/?envType=problem-list-v2&envId=array&difficulty=EASY

function nextGreatestLetter(letters: string[], target: string): string {
  const list = letters
    .map((letter) => letter.charCodeAt(0))
    .filter((l) => l > target.charCodeAt(0));

  return list[0] ? String.fromCharCode(list[0]) : letters[0]
}

console.log(nextGreatestLetter(["x","x","y","y"], "z"));
