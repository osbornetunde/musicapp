import React from 'react';
import './list.css';


const listTitle = () => {
    return (
        <div className='song-header-container'>
                <div className='song-title-header'>
                    <p>Title</p>
                </div>
                <div className='song-artist-header'>
                    <p>Artist</p>
                </div>
                <div className='song-album-header'>
                    <p>Album</p>
                </div>
                <div className='song-lyrics-header'>
                    <p>Lyrics</p>
                </div>
        </div>
    )
}

export default listTitle