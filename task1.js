function findLengthOfLongestUniqueSubstring(s) {
    let uniqueSubstringMaxLength = 0;
    let allSubstrings = [];
    let uniqueSubstrings = [];

    //makes an array of all possible substrings of given string
    for (let i = 0; i < s.length; i++){
        for (let j = i + 1; j < s.length + 1; j++){
            allSubstrings.push(s.slice(i, j));
        }
    }

    //makes an array of all substrings without repeating characters
    for (let i = 0; i < allSubstrings.length; i++) {
        const currentCharSet = new Set();

        for (let j = 0; j < allSubstrings[i].length; j++){
            currentCharSet.add(allSubstrings[i][j])
        }

        if (allSubstrings[i].length === currentCharSet.size) {
            uniqueSubstrings.push(allSubstrings[i])
        }
    }

    //finds the longest unique substring
    for (let i = 0; i < uniqueSubstrings.length; i++) {
        if (uniqueSubstrings[i].length > uniqueSubstringMaxLength){
            uniqueSubstringMaxLength = uniqueSubstrings[i].length
        }
    }

    return uniqueSubstringMaxLength;
}

// CASE 1
console.log(findLengthOfLongestUniqueSubstring("abcabcbb"));                    // OUTPUT: 3

// CASE 2
console.log(findLengthOfLongestUniqueSubstring("bbbbb"));                       // OUTPUT: 1

// CASE 3
console.log(findLengthOfLongestUniqueSubstring("kekw"));                        //OUTPUT: 3

// CASE 4
console.log(findLengthOfLongestUniqueSubstring("abcdefg"));                     //OUTPUT: 7

// CASE 5
console.log(findLengthOfLongestUniqueSubstring("abacadaeaf"));                  //OUTPUT: 3

// CASE 6
console.log(findLengthOfLongestUniqueSubstring("qwertyuiopasdfghjklzxcvbnm"));  //OUTPUT: 26