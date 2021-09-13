const numberOfFilms = +prompt("Сколько вы фильмов посмотрели", "");

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt('Один из последних фильмов?','');
const b = prompt('Насколько оцените его?','');
const c = prompt('Один из просмотренных фильмов?','');
const d = prompt('Насколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

