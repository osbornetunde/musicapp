import React from 'react';
import './list.css';
import Lyrics from '../lyrics/lyrics';



const list = (
    { 
        tracks, 
        displayLyrics, 
        willShowLyrics, 
        getMusicLyrics,
        songLyrics,
        musicName
     }) => {
           
        return tracks.map( track => {
           return  <li className='user-song-item-list' 
                        key={track.track.track_id} 
                        onClick={displayLyrics} >
                <div className='song-title-list'>
                <p>{track.track.track_name}</p>
                </div>
    
                <div className='song-artist-list'>
                <p>{track.track.artist_name}</p>
                </div>
    
                <div className='song-album-list'>
                <p >{track.track.album_name}</p>
                </div>
    
                <div className='song-lyrics'>
                <p><button id={track.track.track_id} onClick={getMusicLyrics} className={track.track.track_name}>View Lyrics</button></p>
                </div>
                {willShowLyrics ? 
                <div>
                    <Lyrics id={track.track.track_id} songLyrics={songLyrics} musicName={musicName}/>
                </div> 
                : null}
            </li>
            })
                
}

export default list;