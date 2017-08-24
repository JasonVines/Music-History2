"use strict";
console.log("songs.js");


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop from the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp from the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd from the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses from the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette from the album Jagged Little Pill";

songs.unshift("Happy New Year - by Kid Rock from the album Rebel Soul");	/*adds song to the start of array*/
songs.push("Soak Up The Sun - by Sheryl Crow from the album C'mon, C'mon");	/*adds song to end of array*/

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace('>', '-');
	songs[i] = songs[i].replace('*', '');
	songs[i] = songs[i].replace('@', '');
	songs[i] = songs[i].replace('(', '');
	songs[i] = songs[i].replace('!', '');
}
// console.log(songs);


// this script will break the 'songs' array into 'song' and 'artist' based on indexOf('-')
var song = [];
var artist = [];

for (var i = 0; i < songs.length; i++) {
	song[i] = songs[i].substring(0, songs[i].indexOf(" -"));
	artist[i] = songs[i].substring(songs[i].indexOf("-")+2);
}
// console.log(song);
// console.log(artist);

var listSongs = [];

// this script will add 'song' and 'artist' to the main viewing area on the homepage
for (var i = 0; i < songs.length; i++) {
	listSongs[i] = '<header>' + song[i] + '</header><ul><li>&nbsp;&nbsp;&nbsp;&nbsp;' + artist[i] + '</li></ul>';
}

document.getElementById("addSongs").innerHTML = listSongs.join('');