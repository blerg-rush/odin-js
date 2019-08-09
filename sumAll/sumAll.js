const sumAll = function(num1, num2) {
    let total = 0;
    for (i = num1; i <= num2; i++){
        total += i;
    }
    return total;
}

module.exports = sumAll
