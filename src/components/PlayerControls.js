import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward
} from "@fortawesome/free-solid-svg-icons";

function PlayerControls(props) {
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <marquee>{props.currentTrackName}</marquee>
        </div>
        <div>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={props.playPreviousTrack}
            disabled={!props.currentTrackName}
          >
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={props.togglePlay}
            disabled={!props.currentTrackName}
          >
            {props.isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={props.playNextTrack}
            disabled={!props.currentTrackName}
          >
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>
      </div>
    </>
  );
}

export default PlayerControls;
