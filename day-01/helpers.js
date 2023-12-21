const getNumberValues = (line) => {
    const splitLine = line.split("");
    const returnVal = {
        first: null,
        last: null,
    };
    let firstValueFound = false;
    splitLine.forEach((value) => {
        if (!isNaN(value)) {
            if (!firstValueFound) {
                firstValueFound = true;
                returnVal.first = value;
                returnVal.last = value;
            } else {
                returnVal.last = value;
            }
        }
    });
    return parseInt(returnVal.first + returnVal.last);
};

const sumValueArray = (values) => {
    return values.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );
};

module.exports = { sumValueArray, getNumberValues };
