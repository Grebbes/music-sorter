const songs = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Pop",
  },
  {
    id: 3,
    title: "Take Five",
    artist: "Dave Brubeck",
    genre: "Jazz",
  },
  {
    id: 4,
    title: "Lose Yourself",
    artist: "Eminem",
    genre: "Hip-Hop",
  },
  {
    id: 5,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
  },
  {
    id: 6,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Pop",
  },
  {
    id: 7,
    title: "Fly Me to the Moon",
    artist: "Frank Sinatra",
    genre: "Jazz",
  },
  {
    id: 8,
    title: "Humble",
    artist: "Kendreick Lamar",
    genre: "Hip-Hop",
  },
];

function loadSongs() {
  const songsContainer = document.getElementById("songs-container");

  songs.forEach((song) => {
    songsContainer.innerHTML += `<div class="song-card"><h3>${song.title}</h3><p>${song.artist}</p><span class="genre-tag">${song.genre}</span></div>`;
  });
}
