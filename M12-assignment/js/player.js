class Jukebox {
    constructor() {
        this.albums = [];
    }

    addAlbum(album) {
        this.albums.push(album);
    }

    favoriteAlbum() {
        let max = -1;
        let fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav;
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }

    play() {
        this.played += 1;
    }

    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

// CREATE JUKEBOX INSTANCE
const jbox = new Jukebox();

// CREATE ALBUM INSTANCES AND ADD THEM TO THE JUKEBOX
const albums = [
    new Album('Operation Ivy', 'Energy'),
    new Album('Blink 182', 'Dude Ranch'),
    new Album('New Found Glory', 'Sticks and Stones')
];

albums.forEach(album => {
    jbox.addAlbum(album);
});

// Get HTML ELEMENTS
let albumSelect = document.getElementById('albums');
let playButton = document.getElementById('playButton');
let favoriteButton = document.getElementById('favoriteButton');
let resultDiv = document.getElementById('result');

// POPULATE DROP-DOWN MENU WITH ALBUMS
albums.forEach((album, index) => {
    let option = document.createElement('option');
    option.value = index;
    option.textContent = `${album.artist} - ${album.title}`;
    albumSelect.appendChild(option);
});


// PLAY BUTTON CLICK HANDLER
playButton.addEventListener('click', () => {
    let selectedIndex = albumSelect.value;
    let selectedAlbum = albums[selectedIndex];
    selectedAlbum.play();
});

// SHOW FAVORTITE ALBUM BUTTON CLICK HANDLER
favoriteButton.addEventListener('click', () => {
    let favoriteAlbum = jbox.favoriteAlbum();
    resultDiv.textContent = favoriteAlbum.display();
});