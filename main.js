const initApp = () => {
  loadSongs();
  sortSongsByGenre();
  addSongPopUp();
};
document.addEventListener("DOMContentLoaded", initApp);
