const caesar = function(string, offset) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let encodedArray = [];
  let stringArray = string.split("");
  stringArray.forEach(function (char, i) {
    if (/[^a-zA-Z]/.test(char)) {
      encodedArray.push(char);
      return;
    }

    let isUpcase = char == char.toUpperCase();
    let index = alphabet.indexOf(char.toLowerCase());
    let shiftedChar = alphabet[(((index + offset) % 26) + 26) % 26];

    if (isUpcase) {
      encodedArray.push(shiftedChar.toUpperCase());
    } else {
      encodedArray.push(shiftedChar)
    }
  });
  return encodedArray.join("")
}

module.exports = caesar
