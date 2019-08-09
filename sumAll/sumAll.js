const sumAll = function(num1, num2) {
    let total = 0;
    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (num1 > num2) [num1, num2] = [num2, num1];
    for (i = num1; i <= num2; i++){
        total += i;
    }
    return total;
}

module.exports = sumAll
