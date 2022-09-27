// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

const longestWord = (sen) => {
     const arr = sen.replace(/[^a-zA-Z ]/g,"").split(" ");
     arr.sort((a,b) => {
          return b.length - a.length;
     });
     return arr;
};

console.log(longestWord("fun&!! time"));