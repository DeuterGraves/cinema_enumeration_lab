const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map(film => film.title)
};


module.exports = Cinema;
