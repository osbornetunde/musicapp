import React from 'react';
import './lyrics.css';
import MusicSpinner from '../spinner/musicloadspinner';




const Lyrics = ({ songLyrics, musicName }) => {

    if(!songLyrics){
        return <MusicSpinner />
    }
        return (
            <div className="song-lyric">
            	<h4>{musicName}</h4>
                <p>{songLyrics}</p>
            </div>
        )
    }

export default Lyrics;