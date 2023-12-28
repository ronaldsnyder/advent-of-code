const getSpecialChars = (input) => {
    const specialChars = {};
    input.forEach((line) => {
        const chars = line.split("");
        chars.forEach((char) => {
            if (!specialChars[char] && isNaN(char) && char !== ".") {
                specialChars[char] = true;
            }
        });
    });
    return Object.keys(specialChars);
};

module.exports = {
    getSpecialChars,
};
