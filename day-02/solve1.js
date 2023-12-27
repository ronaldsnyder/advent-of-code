const { getInput } = require("../common");
const { parseLines, solutionOneReducer } = require("./helpers");
const input = "input.txt";

const lines = getInput(input);

const gameResults = lines.map(parseLines);

const solution = gameResults.reduce(solutionOneReducer, 0);

console.log(solution);
