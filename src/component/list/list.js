import React from 'react';
import './list.css';
import Lyrics from '../lyrics/lyrics';



const list = (
    { 
        tracks, 
        displayLyrics, 
        willShowLyrics, 
        getMusicLyrics,
        songLyrics
     }) => {
           
        return tracks.map( track => {
           return  <li className='user-song-item' 
                        key={track.track.track_id} 
                        onClick={displayLyrics.bind(this)} 
                        id={track.track.track_id} >
                <div className='song-title'>
                <p>{track.track.track_name}</p>
                </div>
    
                <div className='song-artist'>
                <p>{track.track.artist_name}</p>
                </div>
    
                <div className='song-album'>
                <p>{track.track.album_name}</p>
                </div>
    
                <div className='song-lyrics'>
                <p><button id={track.track.track_id} onClick={getMusicLyrics}>View Lyrics</button></p>
                </div>
                {willShowLyrics ? 
                <div>
                    <Lyrics id={track.track.track_id} songLyrics={songLyrics}/>
                </div> 
                : null}
            </li>
            })
                
}

export default list;