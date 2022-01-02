// Check Permutations: Given two strings, write a method to devide if one is a permutation of the other.

const checkPermutations = (firstWord, secondWord) => {
    //O(nlog(n)) runtime, O(n) space
    // if (firstWord.length !== secondWord.length) {
    //     console.log("Lengths not equal");
    //     return false;
    // }
    // sortedFirstWord = firstWord
    //     .split("")
    //     .sort((a, b) => a.localeCompare(b))
    //     .join("");
    // sortedSecondWord = secondWord
    //     .split("")
    //     .sort((a, b) => a.localeCompare(b))
    //     .join("");

    // return sortedSecondWord === sortedFirstWord;

    //create an object and populate it with the characters and how many times they repeat
    let letters = {};
    for (let i = 0; i < firstWord.length; i++) {
        if (letters.hasOwnProperty(firstWord[i])) {
            letters[firstWord[i]] += 1;
        } else {
            // add the count to the letters
            letters[firstWord[i]] = 1;
        }
    }

    // check if the character is in the dictionary already if so decrement the count, if there is only 1 set it to zero
    for (i = 0; i < secondWord.length; i++) {
        if (letters.hasOwnProperty(secondWord[i])) {
            //character exists in json object
            letters[secondWord[i]] -= 1;
            if (letters[secondWord[i]] === 0) {
                delete letters[secondWord[i]];
            }
        } else {
            return false;
        }
    }
    console.log(letters);
    return Object.keys(letters).length === 0;
};

console.log(checkPermutations("ACBD", "BCDA"));
console.log("---------------------------------");
console.log(checkPermutations("Whats up Dog", "shut dawg p"));
console.log("---------------------------------");
console.log(checkPermutations("ACCD", "BCDA"));
console.log("---------------------------------");
console.log(checkPermutations("naser", "resan"));
