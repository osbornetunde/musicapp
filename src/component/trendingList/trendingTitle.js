import React from 'react';
import './trendingList'

const trendingTitle = () => {
    return (
        <div className='song-header-containers-trend'>
                    <div className='song-title-header-trend'>
                        <p>Artist Name</p>
                    </div>
                    <div className='song-artist-header-trend'>
                        <p>Artist Rating</p>
                    </div>
                    <div className='song-album-header-trend'>
                    <p>Artist Country</p>
                </div>
        </div>
    )
}

export default trendingTitle;