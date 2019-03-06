import React from 'react';
import './table.css';
import List from '../list/list';
import ListTitle from '../list/listTitle';
import MusicSpinner from '../spinner/musicloadspinner';


const table = (
    { 
        tracks, 
        displayLyrics, 
        willShowLyrics, 
        getMusicLyrics,
        songLyrics,
        musicName
    }) => {
    
    if(!tracks){
        return <MusicSpinner />
    }
    return (
        <div className="top_table">
            <ListTitle />
            <ul className="song_list">
                <List 
                tracks={tracks} 
                displayLyrics={displayLyrics}
                willShowLyrics={willShowLyrics}
                getMusicLyrics={getMusicLyrics}
                songLyrics={songLyrics}
                musicName={musicName}
                />
            </ul>
      </div>
    )
}

export default table;