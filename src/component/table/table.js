import React from 'react';
import './table.css';
import List from '../list/list';
import ListTitle from '../list/listTitle';
import Spinner from '../spinner/spinner'


const table = (
    { 
        tracks, 
        displayLyrics, 
        willShowLyrics, 
        getMusicLyrics,
        songLyrics 
    }) => {
    
    if(!tracks){
        return <Spinner />
    }
    return (
        <React.Fragment>
            <ListTitle />
            <ul className="song_list">
                <List 
                tracks={tracks} 
                displayLyrics={displayLyrics}
                willShowLyrics={willShowLyrics}
                getMusicLyrics={getMusicLyrics}
                songLyrics={songLyrics}
                />
            </ul>
      </React.Fragment>
    )
}

export default table;