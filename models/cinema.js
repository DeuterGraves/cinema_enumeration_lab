const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function () {
  return this.films.map(film => film.title)
};

Cinema.prototype.findFilm = function (title) {
  return this.films.find(film => film.title === title)
};

Cinema.prototype.filterGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
};

module.exports = Cinema;
