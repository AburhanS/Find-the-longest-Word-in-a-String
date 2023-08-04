function findLongestWord(sentence){
    let words = sentence.split(" "); // split the sentence by spaces into an array of words
    let maxLength = 0; // initialize the maximum length to zero
    for(let word of words){ // loop over the array of words
        if(word.length > maxLength){ // if the current word is longer than the previous maximum
            maxLength = word.length; // update the maximum length
        }
    }
    return maxLength;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));