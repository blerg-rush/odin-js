const repeatString = function(string,number) {
    let str = '';
    if (number < 0) str = 'ERROR';
    else{
        for(i = 0; i < number; i++){
            str += string;
        }
    }
    return str;
}

module.exports = repeatString
