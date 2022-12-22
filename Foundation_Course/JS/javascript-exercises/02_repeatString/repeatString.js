const repeatString = function(text, amountOfRepeats) {
    let result = '';
    if(text === '' ||
    amountOfRepeats === 0) {}
    else if(amountOfRepeats < 0) {
        result = 'ERROR';
    }
    else {
        for(let i = 0; i < amountOfRepeats; i++) {
            result += text;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
