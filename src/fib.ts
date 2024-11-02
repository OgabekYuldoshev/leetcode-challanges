function fibWithMemo(n: number) {
    const stack = new Array(n + 1).fill(-1);
    stack[0] = 0;
    stack[1] = 1;

    function recursion(n: number): number {
        if (stack[n] > -1) return stack[n];
        stack[n] = recursion(n - 1) + recursion(n - 2);
        return stack[n];
    }
    const res = recursion(n);
    return res;
}
console.time();
console.log(BigInt(fibWithMemo(1000)));
console.timeEnd();


// function fib(n: number) {
//     function recursion(n: number): number {
//         if (n === 0) return 0;
//         if (n === 1) return 1;

//         return recursion(n - 1) + recursion(n - 2);
//     }
//     return recursion(n);
// }
// console.time();
// console.log(fib(50));
// console.timeEnd();
