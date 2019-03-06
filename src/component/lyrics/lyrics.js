import React from 'react';
import './lyrics.css';
import Spinner from '../spinner/spinner';




const Lyrics = ({ songLyrics }) => {

    if(!songLyrics){
        return <Spinner />
    }
        return (
            <div className="song-lyric">
                <p>{songLyrics}</p>
            </div>
        )
    }

export default Lyrics;