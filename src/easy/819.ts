// 819. Most Common Word

function mostCommonWord(paragraph: string, banned: string[]): string {
  paragraph = paragraph.toLowerCase();
  const bannedWords = new Set(banned);
  const wordCount: { [key: string]: number } = {};
  for (const w of paragraph.match(/\b\w+\b/g) || []) {
    if (bannedWords.has(w)) {
      continue;
    }
    if (w) {
      wordCount[w] = (wordCount[w] || 0) + 1;
    }
  }

  const index = Object.values(wordCount).indexOf(
    Math.max(...Object.values(wordCount))
  );

  return Object.keys(wordCount)[index];
}

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
