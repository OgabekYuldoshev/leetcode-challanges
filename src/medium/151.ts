// 151. Reverse Words in a String

function reverseWords(s: string): string {
	let words = s.match(/\w+/g);
	return words?.reverse().join(" ") || "";
}

console.log(reverseWords("hello      world"));
