const ftoc = function(fahren) {
  let celsi = ((fahren - 32) * (5 / 9));
  if (celsi % 1 == 0) return celsi;
  return Math.round(celsi * 10) / 10;
}

const ctof = function(celsi) {
  let fahren = ((celsi * (9 / 5) + 32));
  if (fahren % 1 == 0) return fahren;
  return Math.round(fahren * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
