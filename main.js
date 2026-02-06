const initApp = () => {
  loadSongs();
  sortSongsByGenre();
  addSongPopUp();
  addNewSong();
};
document.addEventListener("DOMContentLoaded", initApp);
