const fs = require("node:fs");
const { getNumberValues, sumValueArray } = require("./helpers");
const input = "input.txt";
const textToNumber = [
    ["nine", "nine9nine"],
    ["eight", "eight8eight"],
    ["seven", "seven7seven"],
    ["six", "six6six"],
    ["five", "five5five"],
    ["four", "four4four"],
    ["three", "three3three"],
    ["two", "two2two"],
    ["one", "one1one"],
    ["zero", "zero0zero"],
];
const data = fs.readFileSync(input, "utf8");

let lines = data.split(/\r?\n/);

lines = lines.map((line) => {
    textToNumber.forEach((value) => {
        line = line.replaceAll(value[0], value[1]);
    });
    return line;
});

const values = lines.map(getNumberValues);

const solution = sumValueArray(values);

console.log(solution);
