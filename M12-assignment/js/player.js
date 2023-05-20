class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)

// Create album instances and add them to the Jukebox
let albums = [
    ('Operation Ivy', 'Energy'),
    ('Blink 182', 'Dude Ranch'),
    ('New Found Glory', 'Sticks and Stones')
];

albums.forEach(album => {
    jbox.addAlbum(album);
});

// Get HTML elements
let albumSelect = document.getElementById('albumsDropdown');
let playButton = document.getElementById('playButton');
let favoriteButton = document.getElementById('favoriteButton');
let resultDiv = document.getElementById('result');

// Populate drop-down menu with albums
albums.forEach((album, index) => {
    let option = document.createElement('option');
    option.value = index;
    option.textContent = `${album.artist} / ${album.title}`;
    albumSelect.appendChild(option);
});


// Play button click handler
playButton.addEventListener('click', () => {
    let selectedIndex = albumSelect.value;
    let selectedAlbum = Album[selectedIndex];
    selectedAlbum.play();
});

// Show favorite album button click handler
favoriteButton.addEventListener('click', () => {
    let favoriteAlbum = jbox.favoriteAlbum();
    resultDiv.textContent = favoriteAlbum.display();
});