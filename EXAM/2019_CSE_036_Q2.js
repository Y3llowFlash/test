const prompt=require("prompt-sync")();
function countLetters(word) {
    
    const letterCounts = {};
    
    
    for (const letter of word) {
        
        if (letterCounts.hasOwnProperty(letter)) {
            // If the letter is already in the object, increment its count.
            letterCounts[letter]++;
        } else {
            // If the letter is not in the object, add it with a count of 1.
            letterCounts[letter] = 1;
        }
    }
    
    return letterCounts;
}

    const word = prompt("Enter a String : ");
    const letterCounts = countLetters(word);
    console.log(letterCounts);