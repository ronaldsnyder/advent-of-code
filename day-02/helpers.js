const getGameId = (line) => {
    return parseInt(line.split(":")[0].split(" ")[1]);
};

const removeGameId = (line) => {
    return line.split(": ")[1];
};

const getDrawings = (line) => {
    return line.split(";");
};

const parseDrawing = (drawing) => {
    const gameResult = {
        blue: 0,
        red: 0,
        green: 0,
    };
    let result = drawing.split(", ");

    result.forEach((value) => {
        value = value.trimStart().trimEnd();
        const x = value.split(" ");
        gameResult[x[1]] = parseInt(x[0]);
    });
    return gameResult;
};

const parseLines = (line) => {
    const gameResult = {
        Game: null,
        results: [],
    };
    gameResult.Game = getGameId(line);
    line = removeGameId(line);
    let drawings = getDrawings(line);
    gameResult.results = drawings.map(parseDrawing);
    return gameResult;
};

const solutionOneReducer = (accumulator, currentValue) => {
    let validGame = true;
    ////only 12 red cubes, 13 green cubes, and 14 blue cubes
    currentValue.results.forEach((value) => {
        if (value.red > 12 || value.green > 13 || value.blue > 14) {
            validGame = false;
        }
    });
    if (validGame) {
        accumulator += currentValue.Game;
    }
    return accumulator;
};

const drawingMinReducer = (acc, cur) => {
    if (cur.green > acc.green) {
        acc.green = cur.green;
    }
    if (cur.blue > acc.blue) {
        acc.blue = cur.blue;
    }
    if (cur.red > acc.red) {
        acc.red = cur.red;
    }
    return acc;
};

const solution2Reducer = (acc, cur) => {
    return cur.green * cur.blue * cur.red + acc;
};

module.exports = {
    parseLines,
    solutionOneReducer,
    drawingMinReducer,
    solution2Reducer,
};
