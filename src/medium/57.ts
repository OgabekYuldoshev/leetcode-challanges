// 57. Insert Interval

function insert(intervals: number[][], newInterval: number[]): number[][] {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    let start = 0;
    let length = intervals.length - 1;

    while (start < length) {
        const currentInterval = intervals[start];
        const nextInterval = intervals[start + 1];

        if (currentInterval[1] > nextInterval[1]) {
            intervals.splice(start + 1, 1);
            length--;
            continue;
        }

        if (currentInterval[1] >= nextInterval[0]) {
            intervals[start] = [
                currentInterval[0],
                Math.max(currentInterval[1], nextInterval[1]),
            ];
            intervals.splice(start + 1, 1);

            length--;
            continue;
        }


        start++;
    }

    return intervals
};
