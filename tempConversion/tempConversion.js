const ftoc = function(fahren) {
  return Math.round((fahren - 32) * (5 / 9));
}

const ctof = function(celsi) {
  return Math.round((celsi * (9 / 5) + 32));
}

module.exports = {
  ftoc,
  ctof
}
