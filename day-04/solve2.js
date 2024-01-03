const { getInput } = require("../common");
const input = "input.txt";

const lines = getInput(input);

const drawings = lines.map((line) => {
    const drawing = {
        name: "",
    }

    drawing.name = line.split(":")[0].trim();
    drawing.winningNumbers = line.replaceAll("  ", " ").split(":")[1].split(" | ")[0].trim().split(" ");
    drawing.entries = line.replaceAll("  ", " ").split(":")[1].split(" | ")[1].trim().split(" ");

    return drawing;
})


let count = 0
//an array of the number of cards that have won at each drawing
const cardCount = new Array(drawings.length).fill(1)

drawings.forEach((drawing, index)=> {
    const winners = drawing.entries.filter(i => drawing.winningNumbers.includes(i)).length;
    const current = cardCount[index]

    //populate the winning cards for the next drawing
    for(let j = index + 1; j < (index + winners + 1) && j < (drawings.length); j++){
        cardCount[j] = cardCount[j] + current
    }
    count = current + count

})

console.log(count)