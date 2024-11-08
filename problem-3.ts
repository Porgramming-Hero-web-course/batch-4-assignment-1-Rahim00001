{
    // problem-3

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerSent = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();
        const allWords = lowerSent.split(' ');
        const matchedWord = allWords.filter(word => word === lowerWord);
        const matchCount = matchedWord.length;
        return matchCount;
    }











    // Sample Input:
    // const count = countWordOccurrences("I love typescript TypeScript", "typescript");
    // console.log(count);
}