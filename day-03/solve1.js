const { getInput } = require("../common");
const { getSpecialChars } = require("./helpers");
const input = "input.txt";

const lines = getInput(input);

const specialChars = getSpecialChars(lines);

const getNumbersOnLine = (line, index) => {
    const re = /\d+/g;
    return { data: re.exec(line), line: index };
};

const numbers = lines.map(getNumbersOnLine);

const validNumbers = numbers.filter((number) => {
    const line = number.line;
    const data = number.data;
    const isValid = true;
});

return validNumbers;
