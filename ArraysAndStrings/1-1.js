// Implement an algorithm to determine is a string has all unique characters. What if you cannot use additional data structures?
// To do this we should probably use a map of some sorts

const isUnique = (string) => {
    // O(n*m) time; O(1) space
    // for (let i = 0; i < string.length; i++) {
    //     for (let j = i + 1; j < string.length; j++) {
    //         if (string[i] === string[j]) {
    //             //not unique
    //             console.log(
    //                 "Duplicates found: ",
    //                 string[i],
    //                 "at position: ",
    //                 j
    //             );
    //             return;
    //         }
    //     }
    // }
    // console.log("No Duplicates found!");
    // return;

    /* ---------------------------------------------- */

    // O(N) time; O(N) space
    let letterCounts = {};
    for (letter of string) {
        if (letterCounts.hasOwnProperty(letter)) {
            letterCounts[letter] += 1;
        } else {
            // add the count to the letters
            letterCounts[letter] = 1;
        }
    }
    for (entry in letterCounts) {
        if (letterCounts[entry] > 1) {
            console.log(
                "Duplicate found: ",
                entry,
                "Duplicate Count: ",
                letterCounts[entry]
            );
        }
    }
};

const test1 = "sldkfhlhaaahsjdlfsdkjfhxckv";
const test2 = "hdjsalaQIRUTXCV";
const test3 = "123456789";

console.log(isUnique(test1));
console.log("---------------------------------");
console.log(isUnique(test2));
console.log("---------------------------------");
console.log(isUnique(test3));
