'use strict';

let numberOfFilms;

function start() {

    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 1; i <= numberOfFilms; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = +prompt('На сколько оцените его?', '');
    
        if ( a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {alert('Мало фильмов')};
    if (numberOfFilms >= 10 && numberOfFilms <= 30) {alert('Классный зритель')};
    if (numberOfFilms > 30) {alert('Киноман')}
    else {alert('Error')};
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {console.log(personalMovieDB)};
}

showMyDB();

function writeYourGenres() {

    for (let i = 1; i < 4; i++) {
        let yourFavGenres = prompt(`Ваш любимый жане прд номером ${i}`, '');
        personalMovieDB.genres.push(yourFavGenres);
        while (yourFavGenres == ''|| yourFavGenres == null || typeof yourFavGenres !== 'string') {
            i--;
        }
    }

}

writeYourGenres();


