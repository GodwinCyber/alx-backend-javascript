const calculateNumber = require("./0-calcul");

const Utils = {
    calculateNumber: function(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        if (type === 'SUM') {
            return roundedA + roundedA;
        }
        if (type === 'SUBTRACT') {
            return roundedA - roundedB;
        }
        if (type === 'DIVIDE') {
            if (roundedB === 0) {
                return 'Error';
            }
            return roundedA / roundedB;
        } else {
            throw new Error('Invalid operation type');
        }
    }
};

module.exports = Utils;
