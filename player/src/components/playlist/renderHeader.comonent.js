export function renderingPlaylistHeader(data) {
  let namePlaylist = document.createElement("h1");
  namePlaylist.className = "playlist-title";
  namePlaylist.append(data.title);

  let coverPlaylist = document.createElement("img");
  coverPlaylist.src = data.coverImage;
  coverPlaylist.className = "header-image";

  document.body.append(namePlaylist, coverPlaylist);
}