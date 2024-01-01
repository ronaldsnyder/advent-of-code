const getSpecialChars = (input) => {
    const specialChars = {};
    input.forEach((line) => {
        const chars = line.split("");
        chars.forEach((char) => {
            if (!specialChars[char] && isNaN(char) && char !== ".") {
                specialChars[char] = true;
            }
        });
    });
    return Object.keys(specialChars);
};

const getAsterisk = () => {
    return "*";
}

/*

const isSymbol = (char) => {
    return specialChars.includes(char);
};
 */

const includesChar = (myArray) => {
    return (char) => myArray.includes(char)
}

const numbersReducer = (acc, curr, index) => {
    const re = /\d+/g;
    let match;

    while ((match = re.exec(curr)) !== null) {
        acc.push({ data: match, line: index });
    }

    return acc;
}

const getLineCharArray = (lines) => {
    return lines.map((line) => line.split(""))
}

module.exports = {
    getSpecialChars, getAsterisk, includesChar, numbersReducer, getLineCharArray
};
