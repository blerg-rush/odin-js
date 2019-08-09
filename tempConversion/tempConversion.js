const ftoc = function(fahren) {
  let celsi = ((fahren - 32) * (5 / 9));
  if (celsi % 1 == 0) return celsi;
  return celsi.toFixed(1);
}

const ctof = function(celsi) {
  let fahren = ((celsi * (9 / 5) + 32));
  if (fahren % 1 == 0) return fahren;
  return fahren.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
