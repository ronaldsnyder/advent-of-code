const fs = require("node:fs");

const getInput = (input) => {
    const data = fs.readFileSync(input, "utf8");
    return data.split(/\r?\n/);
};

module.exports = {
    getInput,
};
