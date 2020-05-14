import React, {Component} from "react";
import Button from "react-bootstrap/Button";

const audioList1 = [
    {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        cover:
            'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        musicSrc: () => {
            return Promise.resolve(
                'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
            )
        },
    },
];

const options ={
    audioLists: audioList1,

    onAudioPlay(audioInfo) {
        console.log('audio playing', audioInfo)
    },

    onAudioPause(audioInfo) {
        console.log('audio pause', audioInfo)
    },
};

class Audio extends Component {
    render() {
        return (
            <div className="audio">
                <button onClick={() => this.audio.play()}>play</button>
                <button onClick={() => this.audio.pause()}>pause</button>
                <button onClick={() => this.audio.load()}>reload</button>
                <button onClick={() => (this.audio.currentTime = 40)}>
                    change current play time
                </button>
                <button onClick={() => (this.audio.playbackRate = 2)}>
                    change play back rate
                </button>
                <button onClick={() => (this.audio.volume = 0.2)}>change volume</button>
            </div>

        )
    }
}

