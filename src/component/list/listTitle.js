import React from 'react';
import './list.css';


const listTitle = () => {
    return (
        <div className='song-header-container-list'>
                <div className='song-title-header-list'>
                    <p>Title</p>
                </div>
                <div className='song-artist-header-list'>
                    <p>Artist</p>
                </div>
                <div className='song-album-header-list'>
                    <p>Album</p>
                </div>
                <div className='song-lyrics-header-list'>
                    <p>Lyrics</p>
                </div>
        </div>
    )
}

export default listTitle