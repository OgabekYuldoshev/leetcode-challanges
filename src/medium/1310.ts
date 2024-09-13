// 1310. XOR Queries of a Subarray

function xorQueries(arr: number[], queries: number[][]): number[] {
  let ans: number[] = [];

  for (let [left, right] of queries) {
    let result = 0;
    while (left <= right) {
      result = result ^ arr[left];
      left = left + 1;
    }
    ans.push(result);
  }
  return ans;
}

console.log(
  xorQueries(
    [4, 8, 2, 10],
    [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3],
    ]
  )
);
