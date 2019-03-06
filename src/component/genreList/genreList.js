import React from 'react';
import './genreList.css';


const genreList = ({ genres }) => {
            return genres.map( genre => {
                   return <li className='user-song-item' key={genre.music_genre.music_genre_id}>
                    <div className='song-title'>
                    <p>{genre.music_genre.music_genre_name}</p>
                    </div>

                </li>
            })
           
}

export default genreList;