import React from 'react';
import './trendingList.css';


const trendingList = ({ trendings }) => {
            return trendings.map( trending => {
                   return <li className='user-song-item-trend' key={trending.artist.artist_id}>
                    <div className='song-title-trend'>
                        <p>{trending.artist.artist_name}</p>
                    </div>

                    <div className='song-artist-trend'>
                        <p>{trending.artist.artist_rating}</p>
                    </div>

                    <div className='song-album-trend'>
                        <p>{trending.artist.artist_country}</p>
                    </div>
                </li>
            })
           
}

export default trendingList;


           
    
            