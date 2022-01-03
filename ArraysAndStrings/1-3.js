// You are given a string with spaces. You want to encode the string as a URL, which means getting rid of the whitespace.
const URLify = (string, trueLength) => {
    if (prototypes === true) {
        if (string.length < 1) return "string is empty";
        if (string.trim().replace(/\s/g, "") === string)
            return "string has no spaces";
        return string.trim().replace(/\s/g, "%20");
    }
};

console.log(URLify("This is a test", 14));
console.log("---------------------------------");
console.log(URLify("", 0));
console.log("---------------------------------");
console.log(URLify("nospacetest", 11));
console.log("---------------------------------");
console.log(URLify("This is a trailing space test        ", 38));
console.log("---------------------------------");
console.log(URLify("  This is a trailing space test        ", 40));
