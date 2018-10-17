const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map(film => film.title)
};

Cinema.prototype.findFilm = function (title) {
  return this.films.find(film => film.title === title)
};

module.exports = Cinema;
