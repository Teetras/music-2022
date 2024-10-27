export function renderingPlaylistTracks(tracks) {
  var trackElement = document.createElement("div");
  trackElement.className = "track-list";

  tracks.forEach((element) => {
      var trackElementOne = document.createElement("div");
      trackElementOne.className = "track-container";

      let trackTitle = titleTrack(element);

      let trackAudio = document.createElement("audio");
      trackAudio.src = element.fileUrl;
      trackAudio.controls = true;
      trackAudio.className = "track-audio";

      let trackCover = document.createElement("img");
      trackCover.src = element.coverImageArtist;
      trackCover.className = "track-cover";

      let trackInfo = document.createElement("div");
      trackInfo.className = "track-info";
      trackInfo.append(trackTitle, trackAudio);

      trackElementOne.append(trackCover, trackInfo);
      trackElement.append(trackElementOne);
  });
  document.body.append(trackElement);
}

function titleTrack(element) {
  let nameText = document.createTextNode(`${element.name} - ${element.artist}`);
  let trackTitle = document.createElement("div");
  trackTitle.append(nameText);
  trackTitle.className = "track-title";
  if (element.isHot) {
      trackTitle.append(" 🎈");
  }
  return trackTitle;
}