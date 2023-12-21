const fs = require("node:fs");
const { getNumberValues, sumValueArray } = require("./helpers");
const input = "input.txt";

const data = fs.readFileSync(input, "utf8");
const lines = data.split(/\r?\n/);

const values = lines.map(getNumberValues);

const solution = sumValueArray(values);

console.log(solution);
