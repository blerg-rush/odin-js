const getTheTitles = function(array) {
  let titles = []
  array.forEach(function(object){
    titles.push(object.title);
  });
  return titles;
}

module.exports = getTheTitles;
