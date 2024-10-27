import {playlistData} from "./player/video2.js"
console.log(playlistData)

renderingPlaylist(playlistData);

function renderingPlaylist(playlist) {
  //render
  let playlistTitle = document.createElement("h2");
  playlistTitle.append(playlist.title);

  let playlistImageElement = document.createElement("img");
  playlistImageElement.src = playlist.coverImage;

  let contentElement = document.createElement("div");
  contentElement.className = "content";
  contentElement.append(playlistTitle, playlistImageElement);

  document.body.append(contentElement);
  renderTrack(playlistData);
}

function renderTrack(playlist) {
  let tracksInfo = document.createElement("ul");

  playlist.tracks.forEach((element) => {
    let trackFrame = document.createElement("li");

    let coverImgTrack = document.createElement("img");
    let songFile = document.createElement("audio");

    coverImgTrack.src = element.coverImageArtist;
    songFile.setAttribute("controls", "");
    songFile.src = element.fileUrl;

    let nameText = document.createTextNode(
      `${element.name} - ${element.artist}`
    );
    trackFrame.append(nameText, coverImgTrack, songFile, songFile);
    tracksInfo.append(trackFrame);
  });

  document.body.append(tracksInfo);
}