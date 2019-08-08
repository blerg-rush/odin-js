const reverseString = function(string) {
    let chars = string.split('');
    let output = [];
    for (i = 0; i < chars.length; i++){
        output.unshift(chars[i]);
    }
    return output.join('');
}

module.exports = reverseString
