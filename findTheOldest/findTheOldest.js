let findTheOldest = function(array) {
  return array.reduce((previous, current) => {
    let previousAge = age(previous.yearOfBirth, previous.yearOfDeath)
    let currentAge = age(current.yearOfBirth, current.yearOfDeath)
    if(previousAge < currentAge){
      return current
    } else {
      return previous
    }
  });
}

function age(begin, end) {
  if (!end) {
    end = (new Date()).getFullYear();
  }
  return end - begin;
}

module.exports = findTheOldest
