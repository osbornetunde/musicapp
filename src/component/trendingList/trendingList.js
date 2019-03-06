import React from 'react';
import './trendingList.css';


const trendingList = ({ trendings }) => {
            return trendings.map( trending => {
                   return <li className='user-song-item' key={trending.artist.artist_id}>
                    <div className='song-title'>
                        <p>{trending.artist.artist_name}</p>
                    </div>

                    <div className='song-artist'>
                        <p>{trending.artist.artist_rating}</p>
                    </div>

                    <div className='song-album'>
                        <p>{trending.artist.artist_country}</p>
                    </div>
                </li>
            })
           
}

export default trendingList;


           
    
            