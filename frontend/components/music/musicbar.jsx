import React from 'react';

class MusicBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="musicBar">
                <div className="now-playing-info">
                    <img src={window.Yacht}></img>
                    <div className="music-info">
                        <p className="info-song-title">
                            Hello my name is song-info
                        </p>
                        <br/>
                            Hello my name is artist-info
                        </div>
                </div>
                <div className="playing-bar">
                    <button id="audioControl">Hello There!</button>
                    <audio id="music!"
                    src={window.Song} type="audio/mp3">
                        Your browser hates this
                    </audio>
                </div>
                <div className="volume-rocker">
                    hi my name is volume
                </div>
            </div>
        )
    }
}

export default MusicBar;