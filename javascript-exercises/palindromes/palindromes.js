const palindromes = function(string) {
  stringArray = string.toLowerCase().split('');
  strippedArray = []
  filter = /[a-zA-Z]/
  stringArray.forEach(function(character) {
    if(filter.test(character)) strippedArray.push(character);
  });
  return strippedArray.join('') == strippedArray.reverse().join('');
}

module.exports = palindromes
