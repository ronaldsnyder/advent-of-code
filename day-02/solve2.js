const { getInput } = require("../common");
const {
    parseLines,
    solution2Reducer,
    drawingMinReducer,
} = require("./helpers");
const input = "input.txt";

const lines = getInput(input);

const gameResults = lines.map(parseLines);

const gameResultsWithMin = gameResults.map((game) => {
    return game.results.reduce(drawingMinReducer, {
        green: 0,
        blue: 0,
        red: 0,
    });
});

const solution = gameResultsWithMin.reduce(solution2Reducer, 0);
console.log(solution);
