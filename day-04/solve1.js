const { getInput } = require("../common");
const input = "input.txt";

const lines = getInput(input);

const drawings = lines.map((line) => {
    const drawing = {
        name: ""
    }

    drawing.name = line.split(":")[0].trim();
    drawing.winningNumbers = line.replaceAll("  ", " ").split(":")[1].split(" | ")[0].trim().split(" ");
    drawing.entries = line.replaceAll("  ", " ").split(":")[1].split(" | ")[1].trim().split(" ");

    return drawing;
})

console.log(drawings[0])

const solution = drawings.reduce((solution, drawing) => {
    const winners = drawing.entries.filter(i => drawing.winningNumbers.includes(i)).length;

    if(winners === 0) {
        return solution;
    }
    console.log(drawing.name, winners)
    return solution += 2 ** (winners - 1)
}, 0);

console.log(solution);