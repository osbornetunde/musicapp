import React from 'react';
import './lyrics.css';
import MusicSpinner from '../spinner/musicloadspinner';




const Lyrics = ({ songLyrics }) => {

    if(!songLyrics){
        return <MusicSpinner />
    }
        return (
            <div className="song-lyric">
            	<h4></h4>
                <p>{songLyrics}</p>
            </div>
        )
    }

export default Lyrics;