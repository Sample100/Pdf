
const originalString = "Full Stack!";

function reverseString(str) {
    return str.split('').reverse().join('');
}

const reversed = reverseString(originalString);

console.log("Original:", originalString);
console.log("Reversed:", reversed);
