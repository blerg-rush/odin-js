const removeFromArray = function(input, ...values) {
    let anArray = Array.from(input);
    for(i = 0; i < values.length; i++){
        for(j = 0; j < anArray.length; j++){
            if(values[i] == anArray[j]){
                anArray.splice(j,1);
                i--;
            }
        }
    }
    return anArray;
}

module.exports = removeFromArray
