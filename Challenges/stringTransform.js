// Function to transform a string based on given rules
function transformString(str) {
    let length = str.length;

    if (length % 3 === 0) {
        // Reverse the entire string
        str = str.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        let asciiStr = '';
        for (let i = 0; i < str.length; i++) {
            asciiStr += str.charCodeAt(i) + ' ';
        }
        str = asciiStr.trim();
    }

    return str;
}

// Test cases
console.log(transformString("Hamburger")); // "regrubmaH"
console.log(transformString("Pizza")); // "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // "eikooCpihCetalocohC"
