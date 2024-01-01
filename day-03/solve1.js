const { getInput } = require("../common");
const { getSpecialChars, includesChar, numbersReducer, getLineCharArray } = require("./helpers");
const input = "input.txt";

const lines = getInput(input);

const specialChars = getSpecialChars(lines);
const isSymbol = includesChar(specialChars)
const numbers = lines.reduce(numbersReducer, []);
const lineCharArray = getLineCharArray(lines);

const validNumbers = numbers.filter((number) => {
    const lineIndex = number.line;
    const data = number.data;
    let isValid = false;
    const currentLine = lineCharArray[lineIndex];
    const previousLine = lineIndex !== 0 ? lineCharArray[lineIndex - 1] : [];

    const nextLine =
        lineIndex === lineCharArray.length - 1
            ? []
            : lineCharArray[lineIndex + 1];

    const numberStartIndex = data.index === 0 ? 0 : data.index - 1;

    const numberEndIndex =
        data[0].length + data.index >= currentLine.length
            ? currentLine.length
            : data[0].length + data.index;

    if (isSymbol(currentLine[numberStartIndex])) {
        isValid = true;
    }
    if (isSymbol(currentLine[numberEndIndex])) {
        isValid = true;
    }
    if (previousLine.length > 0) {
        for (let i = numberStartIndex; i <= numberEndIndex; i++) {
            if (isSymbol(previousLine[i])) {
                isValid = true;
            }
        }
    }
    if (nextLine.length > 0) {
        for (let i = numberStartIndex; i <= numberEndIndex; i++) {
            if (isSymbol(nextLine[i])) {
                isValid = true;
            }
        }
    }

    return isValid;
});

const solution = validNumbers.reduce((acc, curr) => {
    return (acc += parseInt(curr.data[0]));
}, 0);

console.log(solution);
