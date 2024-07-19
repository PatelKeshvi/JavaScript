

let str = "red and while";
let n = str.length;
let str1 = "";
let count = 0;

for (let i = 0; i <= n; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" ||
        str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" ||
        str[i] == "O" || str[i] == "U") {
        str1 += str[i];
    }
}

// console.log(str1);  // Print Vowels

if (str1.length > 0) {
    console.log(true);
} else {
    console.log(false);
}