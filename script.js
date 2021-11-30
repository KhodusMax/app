'use strict';

// let numberOfFilms;

// function start() {

//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
                            this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
                            while (this.count == ''|| this.count == null || isNaN(this.count)) {
                                this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
                            }
                        },
    rememberMyFilms: function () {
                        for (let i = 1; i <= this.count; i++) {
                            const a = prompt('Один из последних просмотренных фильмов', ''),
                                b = +prompt('На сколько оцените его?', '');
                        
                            if ( a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
                                personalMovieDB.movies[a] = b;
                            } else {
                                i--;
                            }
                        }
                    },
    detectPersonalLevel: function () {
                    if (this.count < 10) {
                        alert('Мало фильмов');
                    } else if (this.count >= 10 && this.count <= 30) {
                        alert('Классный зритель');
                    } else if (this.count > 30) {
                        alert('Киноман');
                    } else {
                        alert('Error');
                    }
                },
    showMyDB: function () {
                    if (personalMovieDB.privat === false) {console.log(personalMovieDB)};
                },
     writeYourGenres: function() {
                    for (let i = 1; i < 4; i++) {
                        let yourFavGenres = prompt(`Ваш любимый жане прд номером ${i}`, '');
                        personalMovieDB.genres.push(yourFavGenres);
                        while (yourFavGenres == ''|| yourFavGenres == null || typeof yourFavGenres !== 'string') {
                            i--;
                        }
                    }
                    this.genres.forEach((elem, index) => {
                        console.log(`Любимый жанр № ${index + 1} - это ${elem}`);
                    })
                },
    toggleVisibleMyDB: function () {
                    if (this.privat) {
                        this.privat = false;
                    } else {
                        this.privat = true;
                    }
                }
    
};

// personalMovieDB.start();


// function rememberMyFilms() {
//     for (let i = 1; i <= numberOfFilms; i++) {
//         const a = prompt('Один из последних просмотренных фильмов', ''),
//               b = +prompt('На сколько оцените его?', '');
    
//         if ( a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
//     }
// }

// personalMovieDB.rememberMyFilms();

// function detectPersonalLevel() {
//     if (numberOfFilms < 10) {alert('Мало фильмов')};
//     if (numberOfFilms >= 10 && numberOfFilms <= 30) {alert('Классный зритель')};
//     if (numberOfFilms > 30) {alert('Киноман')}
//     else {alert('Error')};
// }

// personalMovieDB.detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat === false) {console.log(personalMovieDB)};
// }

// personalMovieDB.showMyDB();

// function writeYourGenres() {

//     for (let i = 1; i < 4; i++) {
//         let yourFavGenres = prompt(`Ваш любимый жане прд номером ${i}`, '');
//         personalMovieDB.genres.push(yourFavGenres);
//         while (yourFavGenres == ''|| yourFavGenres == null || typeof yourFavGenres !== 'string') {
//             i--;
//         }
//     }

// }

// personalMovieDB.writeYourGenres();


