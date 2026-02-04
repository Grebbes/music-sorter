function sortSongsByGenre() {
  const songsContainer = document.getElementById("songs-container");
  const rockBtn = document.getElementById("rock");
  const popBtn = document.getElementById("pop");
  const jazzBtn = document.getElementById("jazz");
  const hiphopBtn = document.getElementById("hiphop");
  const allBtn = document.getElementById("all");

  allBtn.onclick = () => {
    songsContainer.innerHTML = "";
    document
      .querySelectorAll(".genre-btn")
      .forEach((btn) => btn.classList.remove("active"));
    allBtn.classList.add("active");
    loadSongs();
  };

  rockBtn.onclick = () => {
    songsContainer.innerHTML = "";
    document
      .querySelectorAll(".genre-btn")
      .forEach((btn) => btn.classList.remove("active"));
    rockBtn.classList.add("active");
    songs.forEach((song) => {
      if (song.genre === "Rock") {
        songsContainer.innerHTML += `<div class="song-card"><h3>${song.title}</h3><p>${song.artist}</p><span class="genre-tag">${song.genre}</span></div>`;
      }
    });
  };

  popBtn.onclick = () => {
    songsContainer.innerHTML = "";
    document
      .querySelectorAll(".genre-btn")
      .forEach((btn) => btn.classList.remove("active"));
    popBtn.classList.add("active");
    songs.forEach((song) => {
      if (song.genre === "Pop") {
        songsContainer.innerHTML += `<div class="song-card"><h3>${song.title}</h3><p>${song.artist}</p><span class="genre-tag">${song.genre}</span></div>`;
      }
    });
  };

  jazzBtn.onclick = () => {
    songsContainer.innerHTML = "";
    document
      .querySelectorAll(".genre-btn")
      .forEach((btn) => btn.classList.remove("active"));
    jazzBtn.classList.add("active");
    songs.forEach((song) => {
      if (song.genre === "Jazz") {
        songsContainer.innerHTML += `<div class="song-card"><h3>${song.title}</h3><p>${song.artist}</p><span class="genre-tag">${song.genre}</span></div>`;
      }
    });
  };

  hiphopBtn.onclick = () => {
    songsContainer.innerHTML = "";
    document
      .querySelectorAll(".genre-btn")
      .forEach((btn) => btn.classList.remove("active"));

    hiphopBtn.classList.add("active");
    songs.forEach((song) => {
      if (song.genre === "Hip-Hop") {
        songsContainer.innerHTML += `<div class="song-card"><h3>${song.title}</h3><p>${song.artist}</p><span class="genre-tag">${song.genre}</span></div>`;
      }
    });
  };
}
