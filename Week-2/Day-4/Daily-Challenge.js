const promptInput = prompt("Enter comma separated words");
const words = promptInput.split(",");
function findLongestWord() {
    //find the longest word
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > max) {
            max = words[i].length;
        }
    }
    return max;
}
function printWords(words,max) {
    firstAndLast(max);
    for (let word of words) {
        console.log(`* ${word + ' '.repeat(max - word.length)} *`);
    }
    firstAndLast(max);

}
function firstAndLast(max) {
    console.log('*'.repeat(max + 4));
}
printWords(words,findLongestWord());