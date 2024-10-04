// 1331. Rank Transform of an Array

function arrayRankTransform(arr: number[]): number[] {
    if (arr.length === 0) return [];

    const indexedArr = arr.map((e, i) => [e, i]);

    indexedArr.sort((a, b) => a[0] - b[0]);

    const result = new Array(arr.length);
    let rank = 1;

    result[indexedArr[0][1]] = rank;

    for (let i = 1; i < indexedArr.length; i++) {
        if (indexedArr[i][0] > indexedArr[i - 1][0]) {
            rank++;
        }
        result[indexedArr[i][1]] = rank;
    }

    return result;
}

console.log(arrayRankTransform([40, 10, 20, 30]));
