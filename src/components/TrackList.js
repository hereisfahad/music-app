import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
function TrackList(props) {
  return (
    <>
      {props.trackList.map((track, index) => (
        <div key={index} className="box">
          <button className="button" onClick={() => props.playTrack(index)}>
            {props.currentTrackName === track.name && props.isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </>
  );
}

export default TrackList;
