function shiftingLetters(s: string, shifts: number[]): string {
    let ans = ''

    let sumOfShifts = shifts.reduce((sum, shift) => sum + shift);

    for (let i = 0; i < s.length; i++) {
        let shift = sumOfShifts % 26

        sumOfShifts = sumOfShifts - shifts[i]

        let charCode = s[i].charCodeAt(0)

        let newCharCode = charCode - 97 + shift

        newCharCode = (newCharCode % 26) + 97

        ans += String.fromCharCode(newCharCode)
    }

    return ans
};

console.log(shiftingLetters("abc", [3, 5, 9]))