// PALINDROME –A palindrome is a word, number, phrase, or other sequence of characters which reads
//  the same backward as forward. Write a program that checks whether a word or a phrase is a 
//  palindrome or not.
let word2 = "mum"
let word1 ="race"

if (word1=== word1.split('').reverse().join('')){
    console.log("its a palindrome");
} else {
    console.log("its not a palindrome");
}

