const { getInput } = require("../common");
const { getSpecialChars, includesChar, numbersReducer, getLineCharArray, getAsterisk } = require("./helpers");
const input = "input.txt";

const lines = getInput(input);

const specialChars = getAsterisk();
const isSymbol = includesChar(specialChars)
const numbers = lines.reduce(numbersReducer, []);
const lineCharArray = getLineCharArray(lines);

const calculateValidIndexes = (number) => {
    const numberWithIndexes = {number: parseInt(number.data[0]), indexes: []};
    for(let i = -1; i< number.data[0].length + 1; i++) {
        numberWithIndexes.indexes.push(number.data.index + i);
    }
    return numberWithIndexes;
}


const nyResult = lineCharArray.reduce((solution, line, lineIndex) => {
    //skip first line
    if(lineIndex === 0) {
        return solution;
    }
    //skip last line
    if(lineIndex === lineCharArray.length - 1) {
        return solution;
    }

    for(let i = 0; i < line.length; i++) {
       if(isSymbol(line[i])) {
           let numbersOnLineAbove = numbers.filter((number) => number.line === lineIndex +1);
           let numbersOnLineBelow = numbers.filter((number) => number.line === lineIndex -1)
           let numbersOnCurrentLine = numbers.filter((number) => number.line === lineIndex);

           numbersOnLineAbove = numbersOnLineAbove.map(calculateValidIndexes);
           numbersOnLineBelow = numbersOnLineBelow.map(calculateValidIndexes);
           numbersOnCurrentLine = numbersOnCurrentLine.map(calculateValidIndexes);

           const matchOnLineAbove = numbersOnLineAbove.filter((number) => number.indexes.includes(i));
           const matchOnLineBelow = numbersOnLineBelow.filter((number) => number.indexes.includes(i));
           const matchOnCurrentLine = numbersOnCurrentLine.filter((number) => number.indexes.includes(i));

           if(matchOnCurrentLine.length > 1) {
               solution += matchOnCurrentLine[0].number * matchOnCurrentLine[1].number
           }
           if(matchOnLineAbove.length > 1) {
               solution += matchOnLineAbove[0].number * matchOnLineAbove[1].number
           }
           if(matchOnLineBelow.length > 1) {
               solution += matchOnLineBelow[0].number * matchOnLineBelow[1].number
           }
           if(matchOnCurrentLine.length > 0 && matchOnLineAbove.length > 0) {
                solution += matchOnCurrentLine[0].number * matchOnLineAbove[0].number
           }
           if(matchOnCurrentLine.length > 0 && matchOnLineBelow.length > 0) {
               solution += matchOnCurrentLine[0].number * matchOnLineBelow[0].number
           }
           if(matchOnLineAbove.length > 0 && matchOnLineBelow.length > 0) {
               solution += matchOnLineAbove[0].number * matchOnLineBelow[0].number
           }
        }

    }
    return solution;
}, 0);

console.log(nyResult)
