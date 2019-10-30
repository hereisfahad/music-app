import React, { Component } from "react";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";

import LostChameleon from "./assets/LostChameleon.mp3";
import Rock from "./assets/TheHipsta.mp3";
import Tobu from "./assets/Tobu.mp3";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioPlayer: new Audio(),
      tracks: [
        {
          name: "Lost Chameleon - Genesis",
          file: LostChameleon
        },
        {
          name: "The Hipsta - Shaken Soda",
          file: Rock
        },
        {
          name: "Tobu - Such Fun",
          file: Tobu
        }
      ],
      currentTrackIndex: null,
      isPlaying: false,
      currentTrackName: null
    };
  }
  playTrack = index => {
    if (index === this.state.currentTrackIndex) {
      this.togglePlay();
    } else {
      this.state.audioPlayer.pause();
      this.setState(
        {
          audioPlayer: new Audio(this.state.tracks[index].file),
          currentTrackIndex: index,
          isPlaying: true,
          // currentTrackName:
          //   this.state.currentTrackIndex !== null &&
          //   this.state.tracks[this.state.currentTrackIndex].name
          currentTrackName: this.state.tracks[index].name
        },
        () => this.state.audioPlayer.play()
      );
    }
  };
  togglePlay = () => {
    if (this.state.isPlaying) {
      this.state.audioPlayer.pause();
    } else {
      this.state.audioPlayer.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };
  playPreviousTrack = () => {
    this.state.audioPlayer.pause();
    const newIndex =
      (((this.state.currentTrackIndex + -1) % this.state.tracks.length) +
        this.state.tracks.length) %
      this.state.tracks.length;
    this.playTrack(newIndex);
  };
  playNextTrack = () => {
    this.state.audioPlayer.pause();
    const newIndex =
      (this.state.currentTrackIndex + 1) % this.state.tracks.length;
    this.playTrack(newIndex);
  };

  render() {
    return (
      <div className="container">
        <TrackList
          trackList={this.state.tracks}
          playTrack={this.playTrack}
          currentTrackName={this.state.currentTrackName}
          currentTrackIndex={this.state.currentTrackIndex}
          isPlaying={this.state.isPlaying}
        />
        <PlayerControls
          currentTrackName={this.state.currentTrackName}
          currentTrackIndex={this.state.currentTrackIndex}
          isPlaying={this.state.isPlaying}
          togglePlay={this.togglePlay}
          playPreviousTrack={this.playPreviousTrack}
          playNextTrack={this.playNextTrack}
        />
      </div>
    );
  }
}
