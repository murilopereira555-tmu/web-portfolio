import React from 'react';
import './AudioPlayer.css';
import audioFile from './audio-file.mp3';

const AudioPlayer = () => {
    return (
        <figure className="audio-card">
            <figcaption className="audio-caption">
                "UR THE MOON/DIFFERENT DAY" recorded by Playboi Carti, Retrieved from https://www.youtube.com/watch?v=9UeaKI1LFGw.
            </figcaption>
            <audio controls className="audio-player">
                <source src={audioFile} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </figure>
    );
};

export default AudioPlayer;