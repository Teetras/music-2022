
import { renderingPlaylistTracks } from "./playlist/renderingPlaylistTracks.comonent.js";
import { renderingPlaylistHeader } from "./playlist/renderHeader.comonent.js";

 export function renderingPlaylist(playlist) {
  renderingPlaylistHeader(playlist);
  renderingPlaylistTracks(playlist.tracks);
}





