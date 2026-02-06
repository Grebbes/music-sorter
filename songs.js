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
    artist: "Kendrick Lamar",
    genre: "Hip-Hop",
  },
];

function loadSongs() {
  const songsContainer = document.getElementById("songs-container");
  songsContainer.innerHTML = "";

  songs.forEach((song) => {
    songsContainer.innerHTML += `<div class="song-card"><h3>${song.title}</h3><p>${song.artist}</p><span class="genre-tag">${song.genre}</span></div>`;
  });
}

function addSongPopUp() {
  const addSongBtn = document.getElementById("newSong");
  const songPopUp = document.getElementById("modal-overlay");
  const titleInput = document.getElementById("song-title");
  const artistInput = document.getElementById("song-artist");
  const genreInput = document.getElementById("song-genre");

  addSongBtn.onclick = () => {
    titleInput.value = "";
    artistInput.value = "";
    genreInput.value = "";

    songPopUp.classList.add("active");
    closePopUp();
  };
}

function closePopUp() {
  const cancelBtn = document.getElementById("cancel-btn");
  const closeBtn = document.getElementById("close-btn");
  const modalOverlay = document.getElementById("modal-overlay");

  if (modalOverlay && cancelBtn && closeBtn) {
    cancelBtn.onclick = () => {
      modalOverlay.classList.remove("active");
    };

    closeBtn.onclick = () => {
      modalOverlay.classList.remove("active");
    };
  }
}

function addNewSong() {
  const titleInput = document.getElementById("song-title");
  const artistInput = document.getElementById("song-artist");
  const genreInput = document.getElementById("song-genre");
  const addSongBtn = document.getElementById("add-btn");
  const modalOverlay = document.getElementById("modal-overlay");

  addSongBtn.addEventListener("click", (event) => {
    if (!titleInput.value || !artistInput.value || !genreInput.value) {
      return;
    }
    event.preventDefault();
    const newSong = {
      id: songs.length + 1,
      title: titleInput.value,
      artist: artistInput.value,
      genre: genreInput.value,
    };
    songs.push(newSong);
    modalOverlay.classList.remove("active");
    loadSongs();
  });
}
