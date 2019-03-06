import React from 'react';
import './trendingList'

const trendingTitle = () => {
    return (
        <div className='song-header-containers'>
                    <div className='song-title-header'>
                        <p>Artist Name</p>
                    </div>
                    <div className='song-artist-header'>
                        <p>Artist Rating</p>
                    </div>
                    <div className='song-album-header'>
                    <p>Artist Country</p>
                </div>
        </div>
    )
}

export default trendingTitle;